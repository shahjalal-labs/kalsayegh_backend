import { randomUUID } from "crypto";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiErrors";
import prisma from "../../../shared/prisma";

// Helper to get estimate and validate existence
const getEstimateOrThrow = async (estimateId: string) => {
  const estimate = await prisma.estimate.findUnique({
    where: { id: estimateId },
    select: { id: true, items: true, subItems: true },
  });
  if (!estimate) throw new ApiError(httpStatus.NOT_FOUND, "Estimate not found");
  return estimate;
};

// Validate that all itemId values exist in estimate.items
const validateItemIds = (itemsArray: any[], subItems: { itemId: string }[]) => {
  const existingItemIds = new Set(itemsArray.map((item: any) => item.id));
  for (const sub of subItems) {
    if (!existingItemIds.has(sub.itemId)) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        `Item with id ${sub.itemId} not found in this estimate`,
      );
    }
  }
};

export const subItemService = {
  // Add multiple subitems to an existing estimate
  async addSubItems(estimateId: string, newSubItems: any[]) {
    const estimate = await getEstimateOrThrow(estimateId);
    const currentSubItems = (estimate.subItems as any[]) || [];

    // Generate UUIDs for each new subitem (client never sends id)
    const subItemsToAdd = newSubItems.map((sub) => ({
      id: randomUUID(),
      itemId: sub.itemId,
      title: sub.title,
      quantity: sub.quantity ?? null,
      unitCost: sub.unitCost ?? null,
      price: sub.price ?? null,
    }));

    // Validate parent item IDs
    validateItemIds(estimate.items, subItemsToAdd);

    const updatedSubItems = [...currentSubItems, ...subItemsToAdd];

    await prisma.estimate.update({
      where: { id: estimateId },
      data: { subItems: updatedSubItems },
    });

    return subItemsToAdd; // return newly added subitems with their UUIDs
  },

  // Update a single subitem (by its UUID)
  async updateSubItem(estimateId: string, subItemId: string, updateData: any) {
    const estimate = await getEstimateOrThrow(estimateId);
    const subItems = (estimate.subItems as any[]) || [];

    const index = subItems.findIndex((sub) => sub.id === subItemId);
    if (index === -1) {
      throw new ApiError(httpStatus.NOT_FOUND, "Subitem not found");
    }

    // Apply updates (only fields provided)
    const updatedSubItem = {
      ...subItems[index],
      ...updateData,
    };

    subItems[index] = updatedSubItem;

    await prisma.estimate.update({
      where: { id: estimateId },
      data: { subItems: subItems },
    });

    return updatedSubItem;
  },

  // Delete a single subitem by its UUID
  async deleteSubItem(estimateId: string, subItemId: string) {
    const estimate = await getEstimateOrThrow(estimateId);
    const subItems = (estimate.subItems as any[]) || [];

    const newSubItems = subItems.filter((sub) => sub.id !== subItemId);
    if (newSubItems.length === subItems.length) {
      throw new ApiError(httpStatus.NOT_FOUND, "Subitem not found");
    }

    await prisma.estimate.update({
      where: { id: estimateId },
      data: { subItems: newSubItems },
    });

    return { deleted: true, id: subItemId };
  },
};
