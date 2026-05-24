import { Prisma } from "@prisma/client";
import { randomUUID } from "crypto";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiErrors";
import prisma from "../../../shared/prisma";

// Helper to get invoice and validate existence
const getInvoiceOrThrow = async (invoiceId: string) => {
  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    select: { id: true, items: true, subItems: true },
  });
  if (!invoice) throw new ApiError(httpStatus.NOT_FOUND, "Invoice not found");
  return invoice;
};

// Validate that all itemId values exist in invoice.items
const validateItemIds = (itemsArray: any[], subItems: { itemId: string }[]) => {
  const existingItemIds = new Set(itemsArray.map((item: any) => item.id));
  for (const sub of subItems) {
    if (!existingItemIds.has(sub.itemId)) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        `Item with id ${sub.itemId} not found in this invoice`,
      );
    }
  }
};

export const invoiceSubItemService = {
  // Add multiple subitems to an existing invoice
  async addSubItems(invoiceId: string, newSubItems: any[]) {
    const invoice = await getInvoiceOrThrow(invoiceId);
    const currentSubItems = (invoice.subItems as any[]) || [];

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
    validateItemIds(invoice.items, subItemsToAdd);

    const updatedSubItems = [...currentSubItems, ...subItemsToAdd];

    await prisma.invoice.update({
      where: { id: invoiceId },
      data: { subItems: updatedSubItems as Prisma.JsonArray },
    });

    return subItemsToAdd; // return newly added subitems with their UUIDs
  },

  // Update a single subitem (by its UUID)
  async updateSubItem(invoiceId: string, subItemId: string, updateData: any) {
    const invoice = await getInvoiceOrThrow(invoiceId);
    const subItems = (invoice.subItems as any[]) || [];

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

    await prisma.invoice.update({
      where: { id: invoiceId },
      data: { subItems: subItems },
    });

    return updatedSubItem;
  },

  // Delete a single subitem by its UUID
  async deleteSubItem(invoiceId: string, subItemId: string) {
    const invoice = await getInvoiceOrThrow(invoiceId);
    const subItems = (invoice.subItems as any[]) || [];

    const newSubItems = subItems.filter((sub) => sub.id !== subItemId);
    if (newSubItems.length === subItems.length) {
      throw new ApiError(httpStatus.NOT_FOUND, "Subitem not found");
    }

    await prisma.invoice.update({
      where: { id: invoiceId },
      data: { subItems: newSubItems },
    });

    return { deleted: true, id: subItemId };
  },
};
