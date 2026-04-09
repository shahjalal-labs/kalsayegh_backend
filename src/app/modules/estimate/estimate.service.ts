import { Client } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";

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
    where: {
      estimatorId: user.role === "ESTIMATOR" ? userId : undefined,
    },
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

export const estimateService = {
  createClientInDB,
  getMyClientsFromDB,
};
