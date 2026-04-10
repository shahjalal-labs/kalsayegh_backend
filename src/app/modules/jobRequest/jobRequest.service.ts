import { Prisma } from "@prisma/client";
import ApiError from "../../../errors/ApiErrors";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import prisma from "../../../shared/prisma";
import {
  TCreateJobRequest,
  TCreateOffice,
  TUpdateJobRequest,
} from "./jobRequest.validation";
import httpStatus from "http-status";
import { paginationHelper, TOptions } from "../../../shared/pagination";

const createOffice = async (userId: string, payload: TCreateOffice) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
    },
  });
  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  await prisma.office.create({
    data: {
      ...payload,
      creatorId: userId,
    },
  });
};

const getOffice = async () => {
  const result = await prisma.office.findMany({
    where: {},
    select: {
      id: true,
      name: true,
      address: true,
    },
  });
  return result;
};

const createJobRequest = async (
  userId: string,
  payload: TCreateJobRequest,
  files?: Express.Multer.File[],
) => {
  const [user, office] = await Promise.all([
    prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
      },
    }),

    prisma.office.findUnique({
      where: {
        id: payload.officeId,
      },
      select: {
        id: true,
      },
    }),
  ]);

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  if (!office) throw new ApiError(httpStatus.NOT_FOUND, "Office not found.");

  let imageUrls: string[] = [];

  if (files?.length)
    imageUrls = await Promise.all(
      files.map((file) => uploadInSpace(file, "job-rquests")),
    );

  return prisma.jobRequest.create({
    data: {
      ...payload,
      creatorId: userId,
      images: imageUrls,
    },
    select: {
      id: true,
      title: true,
    },
  });
};

const getAllJobRequests = async () => {
  const offices = await prisma.office.findMany({
    select: {
      id: true,
      name: true,
      address: true,
      jobRequests: {
        select: {
          id: true,
          title: true,
          date: true,
          status: true,
        },
        take: 10,
        orderBy: {
          date: "desc", // Show newest first, adjust as needed
        },
      },
    },
    orderBy: {
      name: "asc", // Sort offices alphabetically
    },
  });

  return offices;
};

const getJobRequestDetails = async (jobReqId: string) => {
  const result = await prisma.jobRequest.findUnique({
    where: {
      id: jobReqId,
    },
    select: {
      id: true,
      title: true,
      date: true,
      images: true,
      note: true,
      officeLatitude: true,
      officeLongitude: true,
      address: true,
      contact: true,
      email: true,
      status: true,
      createdAt: true,
      office: {
        select: {
          id: true,
          name: true,
          address: true,
        },
      },
    },
  });

  if (!result)
    throw new ApiError(httpStatus.NOT_FOUND, "Job request not found");
  return result;
};

const updateJobRequest = async (
  jobReqId: string,
  payload: TUpdateJobRequest,
  files?: Express.Multer.File[],
) => {
  let imageUrls: string[] = [];

  if (files?.length)
    imageUrls = await Promise.all(
      files.map((file) => uploadInSpace(file, "job-rquests")),
    );

  const updated = await prisma.jobRequest.update({
    where: {
      id: jobReqId,
    },
    data: {
      ...payload,
      ...(imageUrls.length
        ? {
            images: imageUrls,
          }
        : {}),
    },
    select: {
      id: true,
      title: true,
    },
  });

  if (!updated)
    throw new ApiError(httpStatus.NOT_FOUND, "Job request not found");
  return updated;
};

const getAllJobRequetsForAOffice = async (
  officeId: string,
  paginations: TOptions,
) => {
  const { page, skip, limit } = paginationHelper(paginations);

  const whereClause: Prisma.JobRequestWhereInput = {
    officeId,
  };

  const [jobRequests, total] = await Promise.all([
    prisma.jobRequest.findMany({
      where: whereClause,
      select: {
        id: true,
        title: true,
        date: true,
        status: true,
      },
      skip,
      take: limit,
      orderBy: {
        id: "desc",
      },
    }),

    prisma.jobRequest.count({
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
    data: jobRequests,
  };
};

export const jobRequestService = {
  createOffice,
  getOffice,
  createJobRequest,
  getAllJobRequests,
  getJobRequestDetails,
  updateJobRequest,
  getAllJobRequetsForAOffice,
};
