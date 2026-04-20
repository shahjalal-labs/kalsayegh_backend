export const estimateEmail = ({
  clientName,
  estimateName,
  total,
  date,
  endDate,
}: {
  clientName: string;
  estimateName: string;
  total: number;
  date: string;
  endDate: string;
}) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h2>Estimate for ${clientName}</h2>
    
    <p>You have received a new estimate.</p>

    <table style="border-collapse: collapse;">
      <tr>
        <td><strong>Estimate Name:</strong></td>
        <td>${estimateName}</td>
      </tr>
      <tr>
        <td><strong>Date:</strong></td>
        <td>${date}</td>
      </tr>
      <tr>
        <td><strong>Valid Until:</strong></td>
        <td>${endDate}</td>
      </tr>
      <tr>
        <td><strong>Total:</strong></td>
        <td>$${total.toFixed(2)}</td>
      </tr>
    </table>

    <p>Please review the estimate and let us know if you approve it.</p>

    <br/>
    <p>Thank you.</p>
  </div>
`;

export const invoiceEmail = ({
  clientName,
  invoiceName,
  total,
  date,
  endDate,
}: {
  clientName: string;
  invoiceName: string;
  total: number;
  date: string;
  endDate: string;
}) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h2>Invoice for ${clientName}</h2>

    <p>Your invoice is ready.</p>

    <table style="border-collapse: collapse;">
      <tr>
        <td><strong>Invoice Name:</strong></td>
        <td>${invoiceName}</td>
      </tr>
      <tr>
        <td><strong>Date:</strong></td>
        <td>${date}</td>
      </tr>
      <tr>
        <td><strong>Due Date:</strong></td>
        <td>${endDate}</td>
      </tr>
      <tr>
        <td><strong>Total:</strong></td>
        <td>$${total.toFixed(2)}</td>
      </tr>
    </table>

    <p>Please make the payment before the due date.</p>

    <br/>
    <p>Thank you.</p>
  </div>
`;
