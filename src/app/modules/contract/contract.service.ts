import httpStatus from "http-status";
import ApiError from "../../../errors/ApiErrors";
import { paginationHelper, TOptions } from "../../../shared/pagination";
import prisma from "../../../shared/prisma";
import { TCreateContract, TUpdateContract } from "./contract.validation";

const createContract = async (payload: TCreateContract) => {
  return prisma.contract.create({
    data: payload,
    select: {
      id: true,
      title: true,
      description: true,
    },
  });
};

const getAllContracts = async (paginations: TOptions) => {
  const { page, limit, skip } = paginationHelper(paginations);

  const [contracts, total] = await Promise.all([
    prisma.contract.findMany({
      orderBy: {
        id: "asc",
      },
      skip,
      take: limit,
    }),

    prisma.contract.count(),
  ]);

  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data: contracts,
  };
};

const updateContract = async (contractId: string, payload: TUpdateContract) => {
  try {
    return await prisma.contract.update({
      where: {
        id: contractId,
      },
      data: payload,
      select: {
        id: true,
        title: true,
        description: true,
      },
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      throw new ApiError(httpStatus.NOT_FOUND, "Contract not found");
    }
    throw error;
  }
};

const getSingleContract = async (contractId: string) => {
  const contract = await prisma.contract.findUnique({
    where: {
      id: contractId,
    },
  });

  if (!contract) throw new ApiError(httpStatus.NOT_FOUND, "Contract not found");
  return contract;
};

const deleteContract = async (contractId: string) => {
  try {
    return await prisma.contract.delete({
      where: {
        id: contractId,
      },
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      throw new ApiError(httpStatus.NOT_FOUND, "Contract not found");
    }
    throw error;
  }
};

export const contractService = {
  createContract,
  getAllContracts,
  updateContract,
  getSingleContract,
  deleteContract,
};
