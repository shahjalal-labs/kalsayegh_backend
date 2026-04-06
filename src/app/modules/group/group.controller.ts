import { groupServices } from "./group.service";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";

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

export const groupControllers = {
  createGroup,
  inviteGroup,
};
