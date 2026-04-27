import prisma from "../../../shared/prisma";

export const getFinancialMetrics = async (
  startDate: string,
  endDate: string,
) => {
  // Convert to Date objects for payments filtering (needs time component)
  const start = new Date(startDate);
  const end = new Date(endDate);
  end.setHours(23, 59, 59, 999);

  // 1. Revenue = net payments received within the period (excluding refunded amounts)
  const payments = await prisma.payment.findMany({
    where: {
      paymentDate: { gte: start, lte: end },
      status: { not: "REFUNDED" },
    },
    include: { refunds: true },
  });

  let totalRevenue = 0;
  for (const payment of payments) {
    let netPaid = payment.amount;
    const refunded = payment.refunds.reduce((sum, r) => sum + r.amount, 0);
    netPaid -= refunded;
    if (netPaid > 0) totalRevenue += netPaid;
  }

  // 2. Grand total of invoices issued in the period (date field is string YYYY-MM-DD)
  const invoicesAgg = await prisma.invoice.aggregate({
    where: { date: { gte: startDate, lte: endDate } },
    _sum: { grandTotal: true },
  });
  const totalInvoiceGrandTotal = invoicesAgg._sum.grandTotal || 0;

  // 3. Grand total of estimates issued in the period
  const estimatesAgg = await prisma.estimate.aggregate({
    where: { date: { gte: startDate, lte: endDate } },
    _sum: { grandTotal: true },
  });
  const totalEstimateGrandTotal = estimatesAgg._sum.grandTotal || 0;

  return {
    totalRevenue, // in cents
    totalInvoiceGrandTotal, // in cents
    totalEstimateGrandTotal, // in cents
  };
};

export const reportService = { getFinancialMetrics };
