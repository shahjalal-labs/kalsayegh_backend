import {
  Client,
  EmailStatus,
  EstimateStatus,
  Item,
  MarkUp,
  Prisma,
  Tax,
} from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import { Request } from "express";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import { paginationHelper, TOptions } from "../../../shared/pagination";
import httpStatus from "http-status";
import { randomUUID } from "crypto";

/* const createEstimateInDB = async (req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const payload: TCreateEstimate = req.body;
  const estimatorId = req.user.id;

  const existingClient = await prisma.client.findUnique({
    where: {
      id: payload.clientId,
    },
  });

  if (!existingClient) {
    throw new ApiError(400, "Client does not exist");
  }

  if (payload.contractId) {
    const contract = await prisma.contract.count({
      where: {
        id: payload.contractId,
      },
    });
    if (!contract)
      throw new ApiError(httpStatus.NOT_FOUND, "Contract not found");
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
      files.map((file) => uploadInSpace(file, `courses/${folder}`)),
    );
  };

  const [map, urls] = await Promise.all([
    processImages(files?.map, "map"),
    processImages(files?.urls, "urls"),
  ]);

  const estimateCount = await prisma.estimate.count();

  const newEstimate = await prisma.estimate.create({
    data: {
      clientId: payload.clientId,
      estimatorId: estimatorId,
      legendary: payload.legendary,
      date: payload.date,
      endDate: payload.endDate as string,
      estimateName: payload.estimateName,
      items: payload.items,
      grandTotal: payload.grandTotal,
      additionalMarkUp: payload.additionalMarkUp,
      sideMap: map ? map[0] : undefined,
      fileUrls: urls ? urls : undefined,
      depositAmount: payload.depositAmount,
      discountAmount: payload.discountAmount,
      isOnlinePayment: payload.isOnlinePayment,
      coverPaymentProcessingFee: payload.coverPaymentProcessingFee,
      noteForClient: payload.noteForClient,
      privateNote: payload.privateNote,
      clientSign: payload.clientSign,
      mySign: payload.mySign,
      format: payload.format,
      contractId: payload.contractId,
      poNumber: payload.poNumber,
      isGroupingEnabled: payload.isGroupingEnabled,
      estimateNumber: (estimateCount + 1).toString(),
      isAutoInvoice: payload.isAutoInvoice,
    },
  });

  const itemss = await prisma.item.findMany({
    where: { id: { in: payload.items.map((item: any) => item.id) } },
  });

  if (newEstimate.isAutoInvoice) {
    invoiceService.generateInvoiceFromEstimate(newEstimate.id);
  }

  return {
    ...newEstimate,
    itemss,
  };
}; */

const createEstimateInDB = async (req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const payload: TCreateEstimate = req.body;
  const estimatorId = req.user.id;

  // 1. Validate client
  const existingClient = await prisma.client.findUnique({
    where: { id: payload.clientId },
  });
  if (!existingClient) {
    throw new ApiError(400, "Client does not exist");
  }

  // 2. Validate contract if provided
  if (payload.contractId) {
    const contract = await prisma.contract.count({
      where: { id: payload.contractId },
    });
    if (!contract)
      throw new ApiError(httpStatus.NOT_FOUND, "Contract not found");
  }

  // 3. Validate each line item exists globally
  const items = payload.items;
  for (const item of items) {
    const existingItem = await prisma.item.findUnique({
      where: { id: item.id },
    });
    if (!existingItem) {
      throw new ApiError(400, `Item with id ${item.id} does not exist`);
    }
  }

  // 4. Process subitems (if any) – generate UUIDs and validate itemId references
  let processedSubItems = undefined;
  if (
    payload.subItems &&
    Array.isArray(payload.subItems) &&
    payload.subItems.length > 0
  ) {
    // Build a set of valid line item IDs from payload.items
    const validItemIds = new Set(items.map((i: any) => i.id));

    processedSubItems = payload.subItems.map((sub: any) => {
      // Check that the referenced itemId exists in the estimate's items
      if (!validItemIds.has(sub.itemId)) {
        throw new ApiError(
          400,
          `Subitem references itemId ${sub.itemId} which is not in the estimate items list`,
        );
      }
      return {
        id: randomUUID(), // generate unique UUID for this subline item
        itemId: sub.itemId,
        title: sub.title,
        quantity: sub.quantity ?? null,
        unitCost: sub.unitCost ?? null,
        price: sub.price ?? null,
      };
    });
  }

  // 5. Process images
  const processImages = async (
    files: Express.Multer.File[] | undefined,
    folder: string,
  ) => {
    if (!files || files.length === 0) return null;
    return Promise.all(
      files.map((file) => uploadInSpace(file, `courses/${folder}`)),
    );
  };

  const [map, urls] = await Promise.all([
    processImages(files?.map, "map"),
    processImages(files?.urls, "urls"),
  ]);

  // 6. Get estimate count for numbering
  const estimateCount = await prisma.estimate.count();

  // 7. Create estimate
  const newEstimate = await prisma.estimate.create({
    data: {
      clientId: payload.clientId,
      estimatorId: estimatorId,
      legendary: payload.legendary,
      date: payload.date,
      endDate: payload.endDate as string,
      estimateName: payload.estimateName,
      items: payload.items,
      subItems: processedSubItems,
      grandTotal: payload.grandTotal,
      additionalMarkUp: payload.additionalMarkUp,
      sideMap: map ? map[0] : undefined,
      fileUrls: urls ? urls : undefined,
      depositAmount: payload.depositAmount,
      discountAmount: payload.discountAmount,
      isOnlinePayment: payload.isOnlinePayment,
      coverPaymentProcessingFee: payload.coverPaymentProcessingFee,
      noteForClient: payload.noteForClient,
      privateNote: payload.privateNote,
      clientSign: payload.clientSign,
      mySign: payload.mySign,
      format: payload.format,
      contractId: payload.contractId,
      poNumber: payload.poNumber,
      isGroupingEnabled: payload.isGroupingEnabled,
      estimateNumber: (estimateCount + 1).toString(),
      isAutoInvoice: payload.isAutoInvoice,
    },
  });

  // 8. Fetch detailed line items (for response)
  const itemss = await prisma.item.findMany({
    where: { id: { in: payload.items.map((item: any) => item.id) } },
  });

  // 9. Auto-generate invoice if requested
  if (newEstimate.isAutoInvoice) {
    invoiceService.generateInvoiceFromEstimate(newEstimate.id);
  }

  return {
    ...newEstimate,
    itemss,
  };
};

const editEstimateInDB = async (estimateId: string, req: Request) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const payload = req.body;
  const estimatorId = req.user.id;

  // 1. Check if estimate exists
  const existingEstimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
  });
  if (!existingEstimate) {
    throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");
  }

  // 2. Validate client if provided
  if (payload.clientId) {
    const existingClient = await prisma.client.findUnique({
      where: { id: payload.clientId },
    });
    if (!existingClient) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Client does not exist");
    }
  }

  // 3. Validate contract if provided
  if (payload.contractId) {
    const contractExists = await prisma.contract.count({
      where: { id: payload.contractId },
    });
    if (!contractExists) {
      throw new ApiError(httpStatus.NOT_FOUND, "Contract not found");
    }
  }

  // 4. Validate items if provided
  if (payload.items && Array.isArray(payload.items)) {
    for (const item of payload.items) {
      const existingItem = await prisma.item.findUnique({
        where: { id: item.id },
      });
      if (!existingItem) {
        throw new ApiError(
          httpStatus.BAD_REQUEST,
          `Item with id ${item.id} does not exist`,
        );
      }
    }
  }

  // 5. Process image uploads (if any)
  const processImages = async (
    files: Express.Multer.File[] | undefined,
    folder: string,
  ) => {
    if (!files || files.length === 0) return null;
    return Promise.all(
      files.map((file) => uploadInSpace(file, `estimates/${folder}`)),
    );
  };

  const [map, urls] = await Promise.all([
    processImages(files?.map, "map"),
    processImages(files?.urls, "urls"),
  ]);

  // 6. Build update data object (only include fields that are provided)
  const updateData: Prisma.EstimateUpdateInput = {
    // Always update the estimator (last editor)
    estimator: { connect: { id: estimatorId } },
  };

  // Scalar fields
  if (payload.estimateName !== undefined)
    updateData.estimateName = payload.estimateName;
  if (payload.legendary !== undefined) updateData.legendary = payload.legendary;
  if (payload.date !== undefined) updateData.date = payload.date;
  if (payload.endDate !== undefined) updateData.endDate = payload.endDate;
  if (payload.items !== undefined) updateData.items = payload.items;
  if (payload.additionalMarkUp !== undefined)
    updateData.additionalMarkUp = payload.additionalMarkUp;
  if (payload.grandTotal !== undefined)
    updateData.grandTotal = payload.grandTotal;
  if (payload.discountAmount !== undefined)
    updateData.discountAmount = payload.discountAmount;
  if (payload.depositAmount !== undefined)
    updateData.depositAmount = payload.depositAmount;
  if (payload.isOnlinePayment !== undefined)
    updateData.isOnlinePayment = payload.isOnlinePayment;
  if (payload.coverPaymentProcessingFee !== undefined)
    updateData.coverPaymentProcessingFee = payload.coverPaymentProcessingFee;
  if (payload.noteForClient !== undefined)
    updateData.noteForClient = payload.noteForClient;
  if (payload.privateNote !== undefined)
    updateData.privateNote = payload.privateNote;
  if (payload.clientSign !== undefined)
    updateData.clientSign = payload.clientSign;
  if (payload.mySign !== undefined) updateData.mySign = payload.mySign;
  if (payload.format !== undefined) updateData.format = payload.format;
  if (payload.poNumber !== undefined) updateData.poNumber = payload.poNumber;
  if (payload.isGroupingEnabled !== undefined)
    updateData.isGroupingEnabled = payload.isGroupingEnabled;
  if (payload.isAutoInvoice !== undefined)
    updateData.isAutoInvoice = payload.isAutoInvoice;
  if (payload.estimateNumber !== undefined)
    updateData.estimateNumber = payload.estimateNumber; // usually auto-generated, but allow manual override

  // Relation fields (connect syntax)
  if (payload.clientId !== undefined) {
    updateData.client = { connect: { id: payload.clientId } };
  }
  if (payload.contractId !== undefined) {
    updateData.contract = { connect: { id: payload.contractId } };
  }

  // Overwrite sideMap / fileUrls if new files were uploaded
  if (map) updateData.sideMap = map[0];
  if (urls) updateData.fileUrls = urls;

  // 7. Perform update
  const updatedEstimate = await prisma.estimate.update({
    where: { id: estimateId },
    data: updateData,
  });

  // 8. Fetch detailed items for the response
  const itemIds = updatedEstimate.items.map((item: any) => item.id);
  const itemsDetail =
    itemIds.length > 0
      ? await prisma.item.findMany({
          where: { id: { in: itemIds } },
        })
      : [];

  return {
    ...updatedEstimate,
    items: itemsDetail,
  };
};

const getEstimateByIdFromDB = async (estimateId: string) => {
  const estimate = await prisma.estimate.findUnique({
    where: {
      id: estimateId,
    },
    include: {
      client: true,
    },
  });
  if (!estimate) throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");
  const items = estimate.items;

  const itemsIds = items.map((item) => {
    return item.id;
  });

  const itemsData = await prisma.item.findMany({
    where: {
      id: {
        in: itemsIds,
      },
    },
    include: {
      markUp: true,
    },
  });

  const taxIds = itemsData.flatMap((item) => item.taxes ?? []);
  const uniqueTaxIds = Array.from(new Set(taxIds));

  const taxesData = await prisma.tax.findMany({
    where: {
      id: {
        in: uniqueTaxIds,
      },
    },
  });
  const taxMap = new Map(taxesData.map((tax) => [tax.id, tax]));

  const itemsDataWithTax = itemsData.map((item) => ({
    ...item,
    taxes: (item.taxes ?? []).map((taxId) => taxMap.get(taxId)).filter(Boolean),
  }));

  return {
    ...estimate,
    itemsData: itemsDataWithTax,
  };
};

const createClientInDB = async (clientData: Client, userId: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
  });

  const client = await prisma.client.findUnique({
    where: {
      email: clientData.email,
    },
  });

  if (client) {
    throw new ApiError(400, "Client with this email already exists");
  }

  const newClient = await prisma.client.create({
    data: {
      address: clientData.address,
      city: clientData.city,
      clientName: clientData.clientName,
      email: clientData.email,
      estimatorId: user.role === "ESTIMATOR" ? userId : null,
      phoneNumber: clientData.phoneNumber,
      state: clientData.state,
      zip: clientData.zip,
    },
  });

  return newClient;
};

const getMyClientsFromDB = async (userId: string) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
  });

  const clients = await prisma.client.findMany({
    // where: {
    //   estimatorId: user.role === "ESTIMATOR" ? userId : undefined,
    // },
    select: {
      id: true,
      clientName: true,
      email: true,
      city: true,
      address: true,
      state: true,
      zip: true,
    },
  });
  return clients;
};

const createNewMarkUpInDB = async (payload: MarkUp) => {
  const existingMarkUp = await prisma.markUp.findUnique({
    where: {
      name: payload.name,
    },
  });

  if (existingMarkUp) {
    throw new ApiError(400, "MarkUp with this name already exists");
  }

  if (!payload.percentage && !payload.amount) {
    throw new ApiError(400, "Either percentage or amount must be provided");
  }

  if (payload.percentage && payload.amount) {
    throw new ApiError(400, "Only one of percentage or amount can be provided");
  }

  const newMarkUp = await prisma.markUp.create({
    data: {
      name: payload.name,
      percentage: payload.percentage,
      amount: payload.amount,
    },
  });

  return newMarkUp;
};

const getAllMarkUpsFromDB = async () => {
  const markUps = await prisma.markUp.findMany({
    select: {
      id: true,
      name: true,
      percentage: true,
      amount: true,
    },
  });
  return markUps;
};

const createNewItemInDB = async (
  payload: Item,
  files?: Express.Multer.File[],
) => {
  const existingItem = await prisma.item.findFirst({
    where: { itemName: payload.itemName },
  });
  if (existingItem) {
    throw new ApiError(400, "Item with this name already exists");
  }

  if (payload.markUpId) {
    const markUp = await prisma.markUp.findUnique({
      where: { id: payload.markUpId },
    });
    if (!markUp) throw new ApiError(400, "MarkUp does not exist");
  }

  if (payload.taxes?.length) {
    const existingTaxes = await prisma.tax.findMany({
      where: { id: { in: payload.taxes } },
      select: { id: true },
    });
    const existingTaxIds = new Set(existingTaxes.map((tax) => tax.id));
    const invalidTaxIds = payload.taxes.filter((id) => !existingTaxIds.has(id));
    if (invalidTaxIds.length) {
      throw new ApiError(400, `Invalid tax id(s): ${invalidTaxIds.join(", ")}`);
    }
  }

  // Upload images if any
  let imageUrls: string[] = [];
  if (files && files.length > 0) {
    const uploadPromises = files.map((file) => uploadInSpace(file, "items"));
    imageUrls = await Promise.all(uploadPromises);
  }

  const newItem = await prisma.item.create({
    data: {
      itemName: payload.itemName,
      markUpId: payload.markUpId,
      rate: payload.rate,
      description: payload.description,
      notes: payload.notes,
      taxes: payload.taxes,
      format: payload.format,
      imageUrls,
    },
  });
  return newItem;
};

const updateItemInDb = async (payload: any) => {
  const existingItem = await prisma.item.findUnique({
    where: {
      id: payload.itemId,
    },
  });

  if (!existingItem) {
    throw new ApiError(404, "Item does not exist");
  }

  if (payload.itemName) {
    const duplicateItem = await prisma.item.findFirst({
      where: {
        itemName: payload.itemName,
        id: {
          not: payload.itemId,
        },
      },
    });

    if (duplicateItem) {
      throw new ApiError(400, "Item with this name already exists");
    }
  }

  if (payload.markUpId) {
    const markUp = await prisma.markUp.findUnique({
      where: {
        id: payload.markUpId,
      },
    });

    if (!markUp) {
      throw new ApiError(400, "MarkUp does not exist");
    }
  }

  if (payload.taxes?.length) {
    const existingTaxes = await prisma.tax.findMany({
      where: {
        id: {
          in: payload.taxes,
        },
      },
      select: {
        id: true,
      },
    });

    const existingTaxIds = new Set(existingTaxes.map((tax) => tax.id));
    const invalidTaxIds = payload.taxes.filter(
      (taxId: any) => !existingTaxIds.has(taxId),
    );

    if (invalidTaxIds.length) {
      throw new ApiError(400, `Invalid tax id(s): ${invalidTaxIds.join(", ")}`);
    }
  }

  const updatedItem = await prisma.item.update({
    where: {
      id: payload.itemId,
    },
    data: {
      itemName: payload.itemName,
      markUpId: payload.markUpId,
      rate: payload.rate,
      description: payload.description,
      notes: payload.notes,
      taxes: payload.taxes,
      format: payload.format,
    },
  });

  return updatedItem;
};

const getItemListFromDB = async () => {
  const items = await prisma.item.findMany({
    select: {
      id: true,
      itemName: true,
      description: true,
      rate: true,
      notes: true,
      format: true,
      imageUrls: true,
      markUp: {
        select: {
          id: true,
          name: true,
          percentage: true,
          amount: true,
        },
      },
      taxes: true,
    },
  });

  const taxIds = [...new Set(items.flatMap((item) => item.taxes ?? []))];

  const taxList =
    taxIds.length > 0
      ? await prisma.tax.findMany({
          where: {
            id: {
              in: taxIds,
            },
          },
          select: {
            id: true,
            name: true,
            percentage: true,
          },
        })
      : [];

  const taxMap = new Map(taxList.map((tax) => [tax.id, tax]));

  const itemsWithTaxData = items.map((item) => ({
    ...item,
    taxes: (item.taxes ?? []).map((taxId) => taxMap.get(taxId)).filter(Boolean),
  }));

  return itemsWithTaxData;
};

const createNewTaxInDB = async (payload: Tax) => {
  const existingTax = await prisma.tax.findUnique({
    where: {
      name: payload.name,
    },
  });

  if (existingTax) {
    throw new ApiError(400, "Tax with this name already exists");
  }

  if (!payload.percentage) {
    throw new ApiError(400, "Percentage must be provided");
  }

  const newTax = await prisma.tax.create({
    data: {
      name: payload.name,
      percentage: payload.percentage,
    },
  });

  return newTax;
};

const getAllTaxesFromDB = async () => {
  const taxes = await prisma.tax.findMany({
    select: {
      id: true,
      name: true,
      percentage: true,
    },
  });
  return taxes;
};

const getAllEstimate = async (
  paginations: TOptions,
  filter?: {
    status?: EstimateStatus;
    searchTerm?: string;
  },
) => {
  const { page, limit, skip } = paginationHelper(paginations);

  const whereClause: Prisma.EstimateWhereInput = {};

  const andClause: Prisma.EstimateWhereInput[] = [];

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
          estimateName: {
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
    prisma.estimate.findMany({
      where: whereClause,
      include: { client: true },
      omit: {
        items: true,
      },
      skip,
      take: limit,
      orderBy: {
        id: "desc", // same as createdAt:"desc"
      },
    }),

    prisma.estimate.count({
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

/* const getEstimateDetails = async (estimateId: string) => {
  const estimate = await prisma.estimate.findUnique({
    where: {
      id: estimateId,
    },
    include: {
      client: true,
    },
    omit: {
      createdAt: true,
    },
  });

  if (!estimate) throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");

  const estimateItems = Array.isArray(estimate.items) ? estimate.items : [];

  const itemIds = estimateItems
    .map((item) => {
      if (typeof item !== "object" || item === null) return undefined;
      const currentItem = item as { id?: unknown };
      return typeof currentItem.id === "string" ? currentItem.id : undefined;
    })
    .filter((id): id is string => Boolean(id));

  const items =
    itemIds.length > 0
      ? await prisma.item.findMany({
          where: {
            id: {
              in: itemIds,
            },
          },
          select: {
            description: true,
            itemName: true,
            rate: true,
            markUp: true,
            taxes: true,
          },
        })
      : [];

  return {
    ...estimate,
    items,
  };
}; */

// updated for added item quantity & subtotal
const getEstimateDetails = async (estimateId: string) => {
  const estimate = await prisma.estimate.findUnique({
    where: {
      id: estimateId,
    },
    include: {
      client: true,
      contract: true,
    },
    omit: {
      createdAt: true,
    },
  });

  if (!estimate) {
    throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");
  }

  const estimateItems = Array.isArray(estimate.items) ? estimate.items : [];

  const itemIds = estimateItems.map((item) => item.id);

  const dbItems =
    itemIds.length > 0
      ? await prisma.item.findMany({
          where: {
            id: {
              in: itemIds,
            },
          },
          select: {
            id: true, // required for mapping
            description: true,
            itemName: true,
            rate: true,
            markUp: true,
            taxes: true,
            format: true,
            imageUrls: true,
          },
        })
      : [];

  const finalItems = dbItems.map((dbItem) => {
    const matchedEstimateItem = estimateItems.find(
      (item) => item.id === dbItem.id,
    );

    return {
      ...dbItem,
      quantity: matchedEstimateItem?.quantity ?? 0,
      subTotal: matchedEstimateItem?.subTotal ?? 0,
    };
  });

  return {
    ...estimate,
    items: finalItems,
  };
};

const updateEstimateStatus = async (
  estimateId: string,
  status: EstimateStatus,
) => {
  const existingEstimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
    select: {
      id: true,
    },
  });

  if (!existingEstimate)
    throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");

  // Update the status
  const updatedEstimate = await prisma.estimate.update({
    where: { id: estimateId },
    data: { status },
    select: {
      id: true,
      estimateName: true,
      status: true,
    },
  });

  return updatedEstimate;
};

const updateEstimateEmailAndSign = async (
  estimateId: string,
  emailStatus?: "READ",
  signedName?: string,
  mySignName?: string,
  mySignAt?: string,
) => {
  // Check if estimate exists
  const existingEstimate = await prisma.estimate.count({
    where: { id: estimateId },
  });

  if (!existingEstimate) {
    throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");
  }

  // Build update data
  const updateData: Prisma.EstimateUpdateInput = {};

  if (emailStatus) {
    updateData.emailStatus = emailStatus;
  }

  if (signedName) {
    updateData.isSigned = true;
    updateData.signedAt = new Date();
    updateData.signedName = signedName;
    updateData.status = "Approved";
  }

  if (mySignName) {
    updateData.mySignName = mySignName;
    updateData.mySignAt = mySignAt;
  }

  // If no fields to update, throw error
  if (Object.keys(updateData).length === 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, "No valid fields to update");
  }

  const updatedEstimate = await prisma.estimate.update({
    where: { id: estimateId },
    data: updateData,
    select: {
      id: true,
      estimateName: true,
      emailStatus: true,
      isSigned: true,
    },
  });

  return updatedEstimate;
};

// Add to estimate.service.ts
import sendEmailAdvanced from "../../../helpers/sendEmailAdvanced";
import { estimateEmailWithReview } from "../../../shared/emailTemplate";
import {
  TCreateEstimate,
  TEstimateImageAction,
  TUpdateEstimateItemImages,
} from "./estimate.validation";
import { invoiceService } from "../invoice/invoice.service";

const sendEstimateEmailFlexible = async (
  estimateId: string,
  payload: {
    to: string[];
    cc?: string[];
    bcc?: string[];
    subject?: string;
    message?: string;
    sendMeCopy?: boolean;
  },
) => {
  // Fetch estimate with client and estimator details
  const estimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
    include: {
      client: { select: { clientName: true } },
      estimator: { select: { fullName: true } },
    },
  });

  if (!estimate) {
    throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");
  }

  // Prepare recipients
  let to = [...payload.to];
  let cc = payload.cc ? [...payload.cc] : [];
  const bcc = payload.bcc ? [...payload.bcc] : [];

  // Add "send me a copy" to CC if requested
  if (payload.sendMeCopy) {
    cc.push("shahjalal.backend@gmail.com");
  }

  // Default subject if not provided
  const defaultSubject = `Your Estimate #${estimate.estimateName || estimateId.slice(-6)} from Geo Paving and Sealcoating`;
  const subject = payload.subject || defaultSubject;

  // Generate review link
  const frontendUrl = process.env.FRONTEND_URL || "https://yourfrontend.com";
  const reviewLink = `${frontendUrl}/estimate/${estimateId}`;

  // Generate HTML
  const html = estimateEmailWithReview({
    clientName: estimate.client.clientName,
    estimateName: estimate.estimateName || estimateId.slice(-6),
    grandTotal: estimate.grandTotal,
    date: estimate.date,
    endDate: estimate.endDate,
    customMessage: payload.message,
    reviewLink,
  });

  // Send email
  await sendEmailAdvanced({
    to,
    cc: cc.length ? cc : undefined,
    bcc: bcc.length ? bcc : undefined,
    subject,
    html,
  });

  // Update email status (optional)
  await prisma.estimate.update({
    where: { id: estimateId },
    data: { emailStatus: EmailStatus.SENT },
  });

  return { success: true, to, cc, bcc };
};

const deleteEstimate = async (estimateId: string) => {
  const estimateExist = await prisma.estimate.count({
    where: {
      id: estimateId,
    },
  });

  if (!estimateExist)
    throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");

  return prisma.estimate.delete({
    where: {
      id: estimateId,
    },
    select: {
      id: true,
      estimateName: true,
    },
  });
};

const getEstimateNumber = async () => {
  return prisma.estimate.count();
};

const updateEstimateImages = async (
  estimateId: string,
  payload: TEstimateImageAction,
  files?: {
    sideMap?: Express.Multer.File[];
    fileUrls?: Express.Multer.File[];
  },
) => {
  // 1. Fetch existing estimate
  const estimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
    select: { id: true, sideMap: true, fileUrls: true },
  });
  if (!estimate) throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");

  let updatedSideMap = estimate.sideMap;
  let updatedFileUrls = estimate.fileUrls ?? [];

  // 2. Handle sideMap (single image)
  if (payload.sideMapAction === "replace") {
    if (!files?.sideMap || files.sideMap.length === 0) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "No image provided to replace sideMap",
      );
    }
    const uploaded = await uploadInSpace(files.sideMap[0], "estimates/sideMap");
    updatedSideMap = uploaded;
  } else if (payload.sideMapAction === "remove") {
    updatedSideMap = null;
  }

  // 3. Handle fileUrls (multiple)
  if (payload.fileUrlsAction) {
    switch (payload.fileUrlsAction) {
      case "add": {
        if (!files?.fileUrls || files.fileUrls.length === 0) {
          throw new ApiError(
            httpStatus.BAD_REQUEST,
            "No files provided to add",
          );
        }
        const uploadedUrls = await Promise.all(
          files.fileUrls.map((f) => uploadInSpace(f, "estimates/fileUrls")),
        );
        updatedFileUrls = [...updatedFileUrls, ...uploadedUrls];
        break;
      }
      case "remove": {
        if (!payload.fileUrls || payload.fileUrls.length === 0) {
          throw new ApiError(
            httpStatus.BAD_REQUEST,
            "No URLs provided to remove",
          );
        }
        const toRemove = new Set(payload.fileUrls);
        updatedFileUrls = updatedFileUrls.filter((url) => !toRemove.has(url));
        break;
      }
      case "replace": {
        if (!payload.fileUrls || payload.fileUrls.length === 0) {
          throw new ApiError(
            httpStatus.BAD_REQUEST,
            "No URLs provided to replace",
          );
        }
        if (
          !files?.fileUrls ||
          files.fileUrls.length !== payload.fileUrls.length
        ) {
          throw new ApiError(
            httpStatus.BAD_REQUEST,
            "Number of uploaded files must match number of URLs to replace",
          );
        }
        const uploadedUrls = await Promise.all(
          files.fileUrls.map((f) => uploadInSpace(f, "estimates/fileUrls")),
        );
        const replaceMap = new Map<string, string>();
        payload.fileUrls.forEach((oldUrl, idx) => {
          replaceMap.set(oldUrl, uploadedUrls[idx]);
        });
        updatedFileUrls = updatedFileUrls.map((url) =>
          replaceMap.has(url) ? replaceMap.get(url)! : url,
        );
        break;
      }
      default:
        throw new ApiError(httpStatus.BAD_REQUEST, "Invalid fileUrlsAction");
    }
  }

  // 4. Update database
  const updatedEstimate = await prisma.estimate.update({
    where: { id: estimateId },
    data: {
      sideMap: updatedSideMap,
      fileUrls: updatedFileUrls,
    },
    select: {
      id: true,
      estimateName: true,
      sideMap: true,
      fileUrls: true,
    },
  });

  return updatedEstimate;
};

// update estimate item images

const updateEstimateItemImages = async (
  estimateId: string,
  payload: TUpdateEstimateItemImages,
  files?: Express.Multer.File[],
) => {
  // 1. Fetch estimate
  const estimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
    select: { itemImages: true, items: true },
  });
  if (!estimate) throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");

  // 2. Verify item exists in the estimate's items array
  const itemExists = estimate.items.some(
    (item: any) => item.id === payload.itemId,
  );
  if (!itemExists)
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Item ${payload.itemId} not found in estimate`,
    );

  // 3. Get current itemImages array
  let itemImages: { itemId: string; images: string[] }[] =
    (estimate.itemImages as any) || [];
  let itemIndex = itemImages.findIndex((i) => i.itemId === payload.itemId);
  let currentImages: string[] =
    itemIndex !== -1 ? itemImages[itemIndex].images : [];

  // 4. Handle actions
  if (payload.action === "add") {
    if (!files || files.length === 0)
      throw new ApiError(400, "No images provided");
    if (files.length > 20) throw new ApiError(400, "Max 20 images per request");
    const uploadedUrls = await Promise.all(
      files.map((f) => uploadInSpace(f, "estimates/itemImages")),
    );
    if (itemIndex === -1) {
      itemImages.push({ itemId: payload.itemId, images: uploadedUrls });
    } else {
      itemImages[itemIndex].images.push(...uploadedUrls);
    }
  } else if (payload.action === "remove") {
    if (!payload.imageUrls || payload.imageUrls.length === 0)
      throw new ApiError(400, "No URLs to remove");
    if (itemIndex === -1)
      throw new ApiError(404, "No images found for this item");
    const newImages = currentImages.filter(
      (url) => !payload.imageUrls!.includes(url),
    );
    if (newImages.length === currentImages.length)
      throw new ApiError(400, "None of the URLs were found");
    if (newImages.length === 0) {
      itemImages.splice(itemIndex, 1);
    } else {
      itemImages[itemIndex].images = newImages;
    }
  } else if (payload.action === "replace") {
    if (!files || files.length === 0)
      throw new ApiError(400, "No new images provided");
    if (!payload.imageUrls || payload.imageUrls.length === 0)
      throw new ApiError(400, "No URLs to replace");
    if (files.length !== payload.imageUrls.length)
      throw new ApiError(400, "Number of files must match number of URLs");
    if (files.length > 20) throw new ApiError(400, "Max 20 images");
    if (itemIndex === -1)
      throw new ApiError(404, "No images found for this item");
    const oldUrlsSet = new Set(payload.imageUrls);
    const toReplace = currentImages.filter((url) => oldUrlsSet.has(url));
    if (toReplace.length !== payload.imageUrls.length)
      throw new ApiError(400, "One or more URLs not found");
    const uploadedUrls = await Promise.all(
      files.map((f) => uploadInSpace(f, "estimates/itemImages")),
    );
    const remainingImages = currentImages.filter((url) => !oldUrlsSet.has(url));
    itemImages[itemIndex].images = [...remainingImages, ...uploadedUrls];
  }

  // 5. Save back to database
  await prisma.estimate.update({
    where: { id: estimateId },
    data: { itemImages: itemImages as any },
  });

  return { success: true, itemId: payload.itemId, action: payload.action };
};

export const estimateService = {
  createClientInDB,
  getEstimateByIdFromDB,
  getMyClientsFromDB,
  createNewMarkUpInDB,
  getAllMarkUpsFromDB,
  createNewItemInDB,
  updateItemInDb,
  createNewTaxInDB,
  getItemListFromDB,
  getAllTaxesFromDB,
  createEstimateInDB,
  editEstimateInDB,
  getAllEstimate,
  getEstimateDetails,
  updateEstimateStatus,
  updateEstimateEmailAndSign,
  sendEstimateEmailFlexible,
  deleteEstimate,
  getEstimateNumber,
  updateEstimateImages,
  updateEstimateItemImages,
};

// contract
