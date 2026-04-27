import { Router } from "express";

// payment pages
const paymentSuccess = (sessionId?: string) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Payment Successful - Geo Paving</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  * { box-sizing: border-box; }
  body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 600px;
    margin: 60px auto;
    background: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.1);
    text-align: center;
  }
  h1 {
    color: #2e7d32;
    font-size: 28px;
    margin-bottom: 20px;
  }
  .checkmark {
    font-size: 70px;
    color: #2e7d32;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    color: #333;
    line-height: 1.5;
    margin: 20px 0;
  }
  .button {
    display: inline-block;
    background-color: #1a3e2f;
    color: white;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-weight: bold;
    margin-top: 20px;
  }
  .button:hover {
    background-color: #0e2b1f;
  }
  .footer {
    margin-top: 30px;
    font-size: 14px;
    color: #777;
  }
</style>
</head>
<body>
<div class="container">
  <div class="checkmark">✓</div>
  <h1>Payment Successful!</h1>
  <p>Thank you for your payment. Your transaction has been processed successfully.</p>
  <p>You will receive a confirmation email shortly.</p>
  <a href="/" class="button">Return to Homepage</a>
  <div class="footer">
    <p>Geo Paving and Sealcoating<br>License #1041655</p>
  </div>
</div>
</body>
</html>`;
};

const paymentCancel = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Payment Canceled - Geo Paving</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  * { box-sizing: border-box; }
  body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 600px;
    margin: 60px auto;
    background: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.1);
    text-align: center;
  }
  h1 {
    color: #c62828;
    font-size: 28px;
    margin-bottom: 20px;
  }
  .cancel-icon {
    font-size: 70px;
    color: #c62828;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    color: #333;
    line-height: 1.5;
    margin: 20px 0;
  }
  .button {
    display: inline-block;
    background-color: #1a3e2f;
    color: white;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-weight: bold;
    margin-top: 20px;
  }
  .button:hover {
    background-color: #0e2b1f;
  }
  .footer {
    margin-top: 30px;
    font-size: 14px;
    color: #777;
  }
</style>
</head>
<body>
<div class="container">
  <div class="cancel-icon">✗</div>
  <h1>Payment Canceled</h1>
  <p>Your payment was not completed. You have not been charged.</p>
  <p>If you encountered any issues, please contact us or try again.</p>
  <a href="/" class="button">Go Back to Homepage</a>
  <div class="footer">
    <p>Geo Paving and Sealcoating<br>License #1041655</p>
  </div>
</div>
</body>
</html>`;
};

export const configRoutes = Router();

configRoutes.get("/payment-success", (req, res) => {
  const sessionId = req.query.session_id as string;
  res.type("html").send(paymentSuccess(sessionId));
});

configRoutes.get("/payment-cancel", (_req, res) => {
  res.type("html").send(paymentCancel());
});
