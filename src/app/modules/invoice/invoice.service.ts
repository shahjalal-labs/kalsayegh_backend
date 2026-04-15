import { Request } from "express";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import httpStatus from "http-status";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import { TCreateInvoice } from "./invoice.validation";
import { InvoiceStatus, Prisma, UserRole } from "@prisma/client";
import { paginationHelper, TOptions } from "../../../shared/pagination";

const createInvoice = async (req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const payload: TCreateInvoice = req.body;
  const estimatorId = req.user.id;

  const existingClient = await prisma.client.findUnique({
    where: {
      id: payload.clientId,
    },
  });

  if (!existingClient) {
    throw new ApiError(httpStatus.NOT_FOUND, "Client does not exist");
  }

  const items = payload.items;

  for (const item of items) {
    const existingItem = await prisma.item.findUnique({
      where: {
        id: item.id,
      },
    });

    if (!existingItem) {
      throw new ApiError(400, `Item with id ${item.id} does not exist`);
    }
  }

  const processImages = async (
    files: Express.Multer.File[] | undefined,
    folder: string,
  ) => {
    if (!files || files.length === 0) return null;
    return Promise.all(
      files.map((file) => uploadInSpace(file, `invoice/${folder}`)),
    );
  };

  const [map, urls] = await Promise.all([
    processImages(files?.map, "map"),
    processImages(files?.urls, "urls"),
  ]);

  const newInvoice = await prisma.invoice.create({
    data: {
      clientId: payload.clientId,
      estimatorId: estimatorId,

      date: payload.date,
      endDate: payload.endDate,
      invoiceName: payload.invoiceName,
      items: payload.items,
      grandTotal: payload.grandTotal,
      additionalMarkUp: payload.additionalMarkUp,
      sideMap: map ? map[0] : undefined,
      fileUrls: urls ? urls : undefined,
      depositAmount: payload.depositAmount,
      discountAmount: payload.discountAmount,
    },
  });

  return newInvoice;
};

const getAllInvoices = async (
  paginations: TOptions,
  filter?: {
    status?: InvoiceStatus;
    searchTerm?: string;
  },
) => {
  const { page, limit, skip } = paginationHelper(paginations);

  const whereClause: Prisma.InvoiceWhereInput = {};

  const andClause: Prisma.InvoiceWhereInput[] = [];

  if (filter?.status) {
    andClause.push({
      status: filter.status,
    });
  }

  const searchTerm = filter?.searchTerm?.trim();
  if (searchTerm)
    andClause.push({
      OR: [
        {
          invoiceName: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },

        {
          client: {
            OR: [
              { clientName: { contains: searchTerm, mode: "insensitive" } },
              { email: { contains: searchTerm, mode: "insensitive" } },
              { phoneNumber: { contains: searchTerm, mode: "insensitive" } },
              { address: { contains: searchTerm, mode: "insensitive" } },
            ],
          },
        },
      ],
    });

  if (andClause.length) whereClause.AND = andClause;

  const [estimates, total] = await Promise.all([
    prisma.invoice.findMany({
      where: whereClause,
      omit: {
        items: true,
      },
      skip,
      take: limit,
      orderBy: {
        id: "desc", // same as createdAt:"desc"
      },
    }),

    prisma.invoice.count({
      where: whereClause,
    }),
  ]);

  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data: estimates,
  };
};

const getInvoiceDetails = async (invoiceId: string) => {
  const invoice = await prisma.invoice.findUnique({
    where: {
      id: invoiceId,
    },
    include: {
      client: true,
    },
    omit: {
      createdAt: true,
    },
  });

  if (!invoice) throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");
  return invoice;
};

const changeInvoiceStatus = async (
  userId: string,
  invoiceId: string,
  status: InvoiceStatus,
) => {
  const [user, invoice] = await Promise.all([
    prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        role: true,
      },
    }),

    prisma.invoice.findUnique({
      where: {
        id: invoiceId,
      },
    }),
  ]);

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  /* if (user.role !== UserRole.ADMIN && user.role !== UserRole.ESTIMATOR)
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "You have no access to  change the stautus",
    ); */

  if (!invoice) throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");

  return prisma.invoice.update({
    where: {
      id: invoiceId,
    },
    data: {
      status,
    },
    select: {
      id: true,
      invoiceName: true,
      status: true,
    },
  });
};

export const invoiceService = {
  createInvoice,
  getAllInvoices,
  getInvoiceDetails,
  changeInvoiceStatus,
};
