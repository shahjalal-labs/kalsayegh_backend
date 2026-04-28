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
  amountDue,
  date,
  dueDate,
  customMessage,
  paymentLink,
}: {
  clientName: string;
  invoiceName: string;
  amountDue: number;
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
        <p style="font-size: 20px; font-weight: bold; margin: 0;">Amount Due $${amountDue.toFixed(2)}</p>
      </div>
      
      <div style="margin: 30px 0; text-align: center;">
        <a href="${paymentLink}" style="background-color: #1a3e2f; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">Review and Pay</a>
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
