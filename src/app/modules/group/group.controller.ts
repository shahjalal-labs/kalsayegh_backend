import { groupServices } from "./group.service";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import httpStatus from "http-status";

const createGroup = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const file = req.file as Express.Multer.File;
  await groupServices.createGroup(userId, file, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "The group has been created successfully",
  });
});

const inviteGroup = catchAsync(async (req, res) => {
  const { groupId } = req.params;
  const userId = req.user.id;
  await groupServices.inviteGroup(req.body.memberIds, groupId, userId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Invited successfully",
  });
});

const removeMember = catchAsync(async (req, res) => {
  const { groupId, memberId } = req.params;

  const result = await groupServices.removeMember(groupId, memberId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Member removed successfully",
    data: result,
  });
});

export const groupControllers = {
  createGroup,
  inviteGroup,
  removeMember,
};
