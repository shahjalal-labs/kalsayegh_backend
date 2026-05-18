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

const privacyPolicy = () => {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Geo Paving — Privacy Policy</title>
<meta name="description" content="Privacy Policy for geo paving application"/>
<style>
:root{
--bg:#f7f8fb;
--card:#ffffff;
--text:#0f172a;
--muted:#6b7280;
--accent:#2563eb;
font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}
body{margin:0;background:var(--bg);padding:32px;color:var(--text);}
.wrap{max-width:1000px;margin:0 auto;}
.card{background:var(--card);border-radius:12px;padding:28px;
box-shadow:0 6px 18px rgba(0,0,0,0.05);margin-bottom:20px;}
h1{font-size:24px;margin:0 0 8px;color:var(--accent);}
h2{font-size:18px;margin-top:32px;margin-bottom:12px;}
h3{font-size:16px;margin-top:24px;margin-bottom:8px;}
p,li{font-size:15px;line-height:1.7;}
ul{margin-left:22px;margin-bottom:16px;}
table{width:100%;border-collapse:collapse;margin-top:12px;font-size:14px;}
th,td{border:1px solid #e5e7eb;padding:10px 12px;text-align:left;vertical-align:top;}
th{background:#f1f5f9;font-weight:600;}
.muted{color:var(--muted);}
footer{text-align:center;margin-top:40px;font-size:13px;color:var(--muted);}
strong{font-weight:600;}
</style>
</head>
<body>
<div class="wrap">

<header class="card">
<h1>Geo Paving Privacy Policy</h1>
<p class="muted"><strong>Effective Date:</strong> April 19, 2026</p>
</header>

<section class="card">

<h2>1. INTRODUCTION</h2>
<p>Geo Paving (“we,” “our,” or “us”) operates the Bridge app (the “Service”). This Privacy Policy explains how we collect, use, and protect your information when you use our app and website.</p>

<h2>2. INFORMATION WE COLLECT</h2>

<h3>Personal Information</h3>
<ul>
<li>Name, email address</li>
<li>Profile details (such as interests, job title, preferences)</li>
<li>Optional user-provided information</li>
</ul>

<h3>Usage Data</h3>
<ul>
<li>App activity and features used</li>
<li>Device information for analytics and performance</li>
</ul>

<h3>Communications</h3>
<ul>
<li>Messages exchanged between mentors and mentees</li>
<li>Encrypted during transmission</li>
<li>May be securely stored for delivery and legal compliance</li>
</ul>

<h2>3. HOW WE USE YOUR INFORMATION</h2>
<ul>
<li>Provide and personalize the mentorship experience</li>
<li>Facilitate communication between users</li>
<li>Maintain and improve functionality, security, and performance</li>
<li>Send updates, service notifications, and announcements</li>
<li>Comply with legal obligations</li>
</ul>

<h3>Example Data Usage</h3>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Data Used</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td>Account</td>
<td>Name, Email</td>
<td>User identification</td>
</tr>
<tr>
<td>Matching</td>
<td>Profile details</td>
<td>Mentor-mentee pairing</td>
</tr>
<tr>
<td>Messaging</td>
<td>Messages</td>
<td>Communication between users</td>
</tr>
</tbody>
</table>

<h2>4. DATA SHARING</h2>
<p>We do not sell your personal data. We may share information with trusted service providers (such as hosting and analytics providers) who assist in operating the Service. These providers are bound by confidentiality obligations.</p>

<h2>5. SECURITY</h2>
<p>We use encryption and modern data management practices to protect your information. However, no digital system is completely secure, and users share data at their own discretion.</p>

<h2>6. YOUR RIGHTS</h2>
<ul>
<li>Access your information</li>
<li>Update your data</li>
<li>Delete your account</li>
</ul>

<h3>Example Requests</h3>
<table>
<thead>
<tr>
<th>Request Type</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Access</td>
<td>"Send me my data"</td>
</tr>
<tr>
<td>Deletion</td>
<td>"Delete my account"</td>
</tr>
<tr>
<td>Update</td>
<td>"Change my profile details"</td>
</tr>
</tbody>
</table>

<h2>7. CHILDREN'S PRIVACY</h2>
<p>The Service is intended for users aged 18 and older. We do not knowingly collect data from minors.</p>

<h2>8. CHANGES TO THIS POLICY</h2>
<p>We may update this Privacy Policy periodically. The latest version will always be available on our website.</p>

<h2>9. CONTACT US</h2>
<p>For questions about this Privacy Policy:</p>

<p><strong>Company:</strong> Bridge System LLC</p>
<p><strong>Email:</strong> customersupport@bridgesystemllc.com</p>
<p><strong>Website:</strong> https://www.bridgesystemllc.com</p>

</section>

<footer>
© 2026 Bridge System LLC — Privacy Policy
</footer>

</div>
</body>
</html>`;
};

const dataDelete = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Delete Data</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
    * {
      box-sizing: border-box;
    }
 
    body {
      font-family: Arial, sans-serif;
      background-color: #f6f6f6;
      padding: 0;
      margin: 0;
    }
 
    .container {
      max-width: 400px;
      margin: 80px auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
 
    h2 {
      color: #d32f2f;
      text-align: center;
      margin-bottom: 20px;
    }
 
    label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
    }
 
    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 14px;
    }
 
    button {
      width: 100%;
      padding: 12px;
      background-color: #d32f2f;
      color: #ffffff;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
 
    }
 
    button:hover {
      background-color: #b71c1c;
    }
 
    .note {
      font-size: 13px;
      color: #555;
      text-align: center;
      margin-top: 15px;
    }
</style>
</head>
<body>
 
<div class="container">
<h2>Delete Your Data</h2>
  <form onsubmit="handleDelete(event)">
<label for="email">Email</label>
<input type="email" id="email" name="email" required>
    <label for="password">Password</label>
<input type="password" id="password" name="password" required>
    <button type="submit">Confirm</button>
</form>
 
  <div class="note">
    This action is irreversible. Please confirm carefully.
</div>
</div>
 
<script>
 
  function handleDelete(e) {
 
    e.preventDefault();
 
    const email = document.getElementById("email").value.trim();
 
    const password = document.getElementById("password").value.trim();
 
    if (!email || !password) {
 
      alert("Please fill in both fields.");
 
      return;
 
    }
 
    const confirmed = confirm(Are you sure you want to delete the account?);
 
    if (confirmed) {
 
      // TODO: Send deletion request to server here
 
      alert("Your account has been marked for deletion.");
 
    }
 
  }
</script>
 
</body>
</html>
 
 `;
};

const accountDelete = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Account Delete</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
    * {
      box-sizing: border-box;
    }
 
    body {
      font-family: Arial, sans-serif;
      background-color: #f6f6f6;
      padding: 0;
      margin: 0;
    }
 
    .container {
      max-width: 400px;
      margin: 80px auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
 
    h2 {
      color: #d32f2f;
      text-align: center;
      margin-bottom: 20px;
    }
 
    label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
    }
 
    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 14px;
    }
 
    button {
      width: 100%;
      padding: 12px;
      background-color: #d32f2f;
      color: #ffffff;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
 
    }
 
    button:hover {
      background-color: #b71c1c;
    }
 
    .note {
      font-size: 13px;
      color: #555;
      text-align: center;
      margin-top: 15px;
    }
</style>
</head>
<body>
 
<div class="container">
<h2>Delete Your Account</h2>
  <form onsubmit="handleDelete(event)">
<label for="email">Email</label>
<input type="email" id="email" name="email" required>
    <label for="password">Password</label>
<input type="password" id="password" name="password" required>
    <button type="submit">Confirm</button>
</form>
 
  <div class="note">
    This action is irreversible. Please confirm carefully.
</div>
</div>
 
<script>
 
  function handleDelete(e) {
 
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }
 
    const confirmed = confirm(Are you sure you want to delete the account?);
    if (confirmed) {
      // TODO: Send deletion request to server here
      alert("Your account has been marked for deletion.");
    }
  }
</script>
</body>
</html>
 `;
};

export const configRoutes = Router();

configRoutes.get("/payment-success", (req, res) => {
  const sessionId = req.query.session_id as string;
  res.type("html").send(paymentSuccess(sessionId));
});

configRoutes.get("/payment-cancel", (_req, res) => {
  res.type("html").send(paymentCancel());
});

configRoutes.get("/privacy-policy", (_req, res) => {
  res.type("html").send(privacyPolicy());
});

configRoutes.get("/data-delete", (_req, res) => {
  res.type("html").send(dataDelete());
});

configRoutes.get("/account-delete", (_req, res) => {
  res.type("html").send(accountDelete());
});
