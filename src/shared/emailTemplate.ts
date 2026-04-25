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

// Add to emailTemplate.ts

export const estimateEmailWithReview = ({
  clientName,
  estimateName,
  grandTotal,
  date,
  endDate,
  customMessage,
  reviewLink,
}: {
  clientName: string;
  estimateName: string;
  grandTotal: number;
  date: string;
  endDate: string;
  customMessage?: string;
  reviewLink: string;
}) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <div style="background-color: #1a3e2f; padding: 20px; text-align: center;">
      <h1 style="color: white; margin: 0;">Geo Paving and Sealcoating</h1>
    </div>
    
    <div style="padding: 20px; border: 1px solid #ddd; border-top: none;">
      <h2 style="color: #1a3e2f;">Estimate #${estimateName}</h2>
      
      <p style="font-size: 16px;">Hi ${clientName},</p>
      
      <p style="font-size: 16px; line-height: 1.5;">
        ${customMessage || "We are pleased for the opportunity to work with you. If you have any questions or comments, please feel free to contact me at anytime."}
      </p>
      
      <p style="font-size: 16px;">Thank you,</p>
      <p style="font-size: 16px; font-weight: bold;">
        Kal Sayegh<br/>
        Geo Paving and Sealcoating<br/>
        T: (951) 271-1482<br/>
        <a href="mailto:kal@geopaving.com">kal@geopaving.com</a><br/>
        <a href="http://www.geopaving.com">www.geopaving.com</a><br/>
        License #1041655
      </p>
      
      <div style="margin: 30px 0; text-align: center;">
        <a href="${reviewLink}" style="background-color: #1a3e2f; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">Review Estimate</a>
      </div>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr><th style="text-align: left; padding: 8px; background: #f5f5f5;">Estimate Name</th><td style="padding: 8px;">${estimateName}</td></tr>
        <tr><th style="text-align: left; padding: 8px; background: #f5f5f5;">Date</th><td style="padding: 8px;">${date}</td></tr>
        <tr><th style="text-align: left; padding: 8px; background: #f5f5f5;">Valid Until</th><td style="padding: 8px;">${endDate}</td></tr>
        <tr><th style="text-align: left; padding: 8px; background: #f5f5f5;">Total</th><td style="padding: 8px;">$${grandTotal.toFixed(2)}</td></tr>
      </table>
      
      <p style="font-size: 14px; color: #666; text-align: center; margin-top: 30px;">
        You can review your Estimate on a secure webpage by following the link above.
      </p>
    </div>
  </div>
`;

// Add to emailTemplate.ts

export const invoiceEmailWithPayment = ({
  clientName,
  invoiceName,
  grandTotal,
  date,
  dueDate,
  customMessage,
  paymentLink,
}: {
  clientName: string;
  invoiceName: string;
  grandTotal: number;
  date: string;
  dueDate: string;
  customMessage?: string;
  paymentLink: string;
}) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <div style="background-color: #1a3e2f; padding: 20px; text-align: center;">
      <h1 style="color: white; margin: 0;">Geo Paving and Sealcoating</h1>
    </div>
    
    <div style="padding: 20px; border: 1px solid #ddd; border-top: none;">
      <h2 style="color: #1a3e2f;">Invoice #${invoiceName}</h2>
      
      <p style="font-size: 16px;">Hi ${clientName},</p>
      
      <p style="font-size: 16px; line-height: 1.5;">
        ${customMessage || "Thanks for your business!"}
      </p>
      
      <p style="font-size: 16px;">You can review your Invoice and make a secure online payment by following the link below.</p>
      
      <div style="margin: 20px 0; text-align: center; background: #f5f5f5; padding: 15px; border-radius: 8px;">
        <p style="font-size: 20px; font-weight: bold; margin: 0;">Amount Due $${grandTotal.toFixed(2)}</p>
      </div>
      
      <div style="margin: 30px 0; text-align: center;">
        <a href="${paymentLink}" style="background-color: #1a3e2f; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">Review and Pay</a>
      </div>
      
      <div style="margin-top: 30px;">
        <p style="font-size: 14px; color: #666;">We accept:</p>
        <div style="display: flex; gap: 15px; flex-wrap: wrap;">
          <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 4px;">Visa</span>
          <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 4px;">AMEX</span>
          <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 4px;">Discover</span>
          <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 4px;">Debit</span>
          <span style="background: #f0f0f0; padding: 5px 10px; border-radius: 4px;">PayPal</span>
        </div>
      </div>
      
      <p style="font-size: 16px; margin-top: 30px;">Thank you,</p>
      <p style="font-size: 16px; font-weight: bold;">
        Kal Sayegh<br/>
        Geo Paving and Sealcoating<br/>
        T: (951) 271-1482<br/>
        <a href="mailto:kal@geopaving.com">kal@geopaving.com</a><br/>
        <a href="http://www.geopaving.com">www.geopaving.com</a><br/>
        License #1041655
      </p>
    </div>
  </div>
`;
