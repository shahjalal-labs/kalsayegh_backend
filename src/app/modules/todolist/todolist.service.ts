import { Prisma } from "@prisma/client";
import { paginationHelper, TOptions } from "../../../shared/pagination";
import prisma from "../../../shared/prisma";
import { uploadInSpace } from "../../../helpers/uploadInSpace";
import ApiError from "../../../errors/ApiErrors";
import httpStatus from "http-status";
import {
  TCreateTodolist,
  TUpdateImageSchema,
  TupdateTodo,
} from "./todolist.validation";

const getOfficeAdministrator = async (
  paginations: TOptions,
  filter?: {
    searchTerm?: string;
  },
) => {
  const { page, skip, limit } = paginationHelper(paginations);

  const whereClause: Prisma.UserWhereInput = {
    role: "OFFICE_ADMINISTRATOR",
    status: "ACTIVE",
  };

  const andClause: Prisma.UserWhereInput[] = [];

  if (filter?.searchTerm?.trim()) {
    andClause.push({
      OR: [
        {
          fullName: {
            contains: filter.searchTerm,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: filter.searchTerm,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  if (andClause.length) {
    whereClause.AND = andClause;
  }

  const [administrator, total] = await Promise.all([
    prisma.user.findMany({
      where: whereClause,
      select: {
        id: true,
        fullName: true,
        email: true,
        profileImage: true,
      },
      skip,
      // take: limit,
      orderBy: {
        id: "desc", // same as createdAt:"desc"
      },
    }),

    prisma.user.count({
      where: whereClause,
    }),
  ]);

  return administrator;

  /* return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data: administrator,
  }; */
};

const createTodolist = async (
  userId: string,
  payload: TCreateTodolist,
  files?: Express.Multer.File[],
) => {
  const [user, assingedUser] = await Promise.all([
    prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
      },
    }),

    prisma.user.findUnique({
      where: {
        id: payload.assignedId,
        role: "OFFICE_ADMINISTRATOR",
      },
      select: {
        id: true,
      },
    }),
  ]);

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  if (!assingedUser)
    throw new ApiError(httpStatus.NOT_FOUND, "AssignedTo user not found");

  let todolistImages: string[] = [];

  if (files?.length) {
    todolistImages = await Promise.all(
      files.map(async (f) => await uploadInSpace(f, "users/todolistImage")),
    );
  }

  return prisma.todolist.create({
    data: {
      ...payload,
      creatorId: userId,
      image: todolistImages,
    },
    select: {
      id: true,
      title: true,
    },
  });
};

const getAllTodolist = async (paginations: TOptions) => {
  const { page, skip, limit } = paginationHelper(paginations);

  const [todos, total] = await Promise.all([
    prisma.todolist.findMany({
      select: {
        id: true,
        title: true,
        description: true,

        isComplete: true,
        assignedTo: {
          select: {
            fullName: true,
            profileImage: true,
          },
        },
      },
      skip,
      take: limit,
      orderBy: {
        id: "desc",
      },
    }),

    prisma.todolist.count(),
  ]);

  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data: todos,
  };
};

const getTodoDetails = async (todoId: string) => {
  const todo = await prisma.todolist.findUnique({
    where: {
      id: todoId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      image: true,
      isComplete: true,
      createdAt: true,
      assignedTo: {
        select: {
          id: true,
          fullName: true,
          profileImage: true,
          profession: true,
        },
      },
    },
  });

  if (!todo) throw new ApiError(httpStatus.NOT_FOUND, "Todo not found");
  return todo;
};

const updateTodo = async (todoId: string, payload: TupdateTodo) => {
  const updated = await prisma.todolist.update({
    where: {
      id: todoId,
    },
    data: payload,
    select: {
      id: true,
      title: true,
    },
  });

  if (!updated) throw new ApiError(httpStatus.NOT_FOUND, "Todo not found");
  return updated;
};

const updateTodoImage = async (
  todoId: string,
  payload: TUpdateImageSchema,
  files?: Express.Multer.File[],
) => {
  const todo = await prisma.todolist.findUnique({
    where: { id: todoId },
    select: { id: true, image: true },
  });

  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, "Todo not found");
  }

  const currentImages = todo.image ?? [];
  const imgUrls = payload.imgUrls ?? [];
  let urls: string[] = [];

  switch (payload.action) {
    case "remove": {
      urls = currentImages.filter((image) => !imgUrls.includes(image));
      break;
    }

    case "add": {
      if (!files?.length) {
        throw new ApiError(httpStatus.BAD_REQUEST, "No image provided");
      }

      const uploadedUrls = await Promise.all(
        files.map((f) => uploadInSpace(f, "todolist-image")),
      );

      urls = [...currentImages, ...uploadedUrls];
      break;
    }

    case "replace": {
      if (!files?.length) {
        throw new ApiError(
          httpStatus.BAD_REQUEST,
          "No image provided to replace",
        );
      }

      if (imgUrls.length !== files.length) {
        throw new ApiError(
          httpStatus.BAD_REQUEST,
          "Mismatch between images and uploads",
        );
      }

      const uploadedUrls = await Promise.all(
        files.map((f) => uploadInSpace(f, "todolist-image")),
      );

      const map = new Map<string, string>();
      imgUrls.forEach((oldUrl, i) => {
        map.set(oldUrl, uploadedUrls[i]);
      });

      urls = currentImages.map((img) => (map.has(img) ? map.get(img)! : img));

      break;
    }

    default: {
      throw new ApiError(httpStatus.BAD_REQUEST, "Invalid action");
    }
  }

  return prisma.todolist.update({
    where: { id: todoId },
    data: { image: urls },
    select: {
      id: true,
      title: true,
      image: true,
    },
  });
};

export const todolistService = {
  getOfficeAdministrator,
  createTodolist,
  getAllTodolist,
  getTodoDetails,
  updateTodo,

  updateTodoImage,
};
