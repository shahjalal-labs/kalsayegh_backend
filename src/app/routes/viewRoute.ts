export const userDelete = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Delete Account</title>
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


export const deleteData = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Delete Account</title>
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


export const privacyPolicy = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Privacy Policy - Geo Paving</title>
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
    max-width: 700px;
    margin: 60px auto;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  h3 {
    margin-top: 25px;
    margin-bottom: 10px;
    color: #444;
    font-size: 16px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 12px;
  }

  ul {
    padding-left: 18px;
    margin-bottom: 15px;
  }

  ul li {
    font-size: 14px;
    color: #555;
    margin-bottom: 8px;
  }

  .footer-note {
    margin-top: 25px;
    font-size: 13px;
    color: #777;
    text-align: center;
  }
</style>
</head>
<body>

<div class="container">
  <h2>Privacy Policy - Geo Paving</h2>

  <p>
    Your privacy is important to us. This Privacy Policy explains how Geo Paving
    ("we", "our", "us") collects, uses, and protects information when you use our
    contractor management application, including the Worker, Project Manager, and
    Office Administrator experiences and the connected admin dashboard.
  </p>

  <h3>1. Information We Collect</h3>
  <p>We may collect the following information depending on your role in the app:</p>
  <ul>
    <li>Personal details such as name, email address, and phone number used during signup</li>
    <li>Account and login credentials, including your account approval status</li>
    <li>Profile information you choose to add</li>
    <li>Working hours and time-tracking records (Worker role)</li>
    <li>Job, office, and to-do list data created by Project Managers</li>
    <li>Estimates, invoices, and line-item billing details, including client names and reminder schedules</li>
    <li>Payment values entered by Project Managers and images of checkbooks or payment records that you choose to upload</li>
    <li>Messages sent through direct messaging and group chat features</li>
    <li>Calendar and event details</li>
    <li>Usage data and device information to help us maintain and improve the app</li>
  </ul>

  <h3>2. How We Use Your Information</h3>
  <p>Your information is used to:</p>
  <ul>
    <li>Create and manage your account, including the admin approval process</li>
    <li>Provide role-based access to jobs, invoices, messaging, and scheduling features</li>
    <li>Track working hours and job progress</li>
    <li>Generate and send estimates, invoices, and payment reminders to clients</li>
    <li>Enable messaging and group chat between team members</li>
    <li>Maintain a record of payments and checkbook images for the business owner's internal bookkeeping</li>
    <li>Improve the performance, security, and usability of the app</li>
  </ul>

  <h3>3. Data Sharing</h3>
  <p>
    We do not sell your personal data. Information is shared only within your
    organization's account — for example, between the Office Administrator,
    Project Managers, and Workers connected to the same business — or with
    service providers who help us operate the app (such as cloud hosting and
    messaging infrastructure), and only as needed to provide the service. We
    may also disclose information if required by law.
  </p>

  <h3>4. Data Security</h3>
  <p>
    We implement reasonable technical and organizational measures to protect
    account information, messages, invoices, and uploaded images (including
    checkbook photos) from unauthorized access, alteration, or disclosure.
    No method of transmission or storage is 100% secure, and we cannot
    guarantee absolute security.
  </p>

  <h3>5. Data Retention</h3>
  <p>
    We retain your information for as long as your account is active or as
    needed to provide the app's features, such as historical time records,
    invoices, and messages. You may request deletion of your data as
    described below.
  </p>

  <h3>6. Your Rights</h3>
  <p>
    You have the right to access, update, or request deletion of your
    personal data at any time. Requests can be made by contacting us using
    the information below. Office Administrators may also manage or remove
    user accounts within their organization.
  </p>

  <h3>7. Children's Privacy</h3>
  <p>
    Geo Paving is intended for business use by contractors and their staff
    and is not directed to children under 13. We do not knowingly collect
    personal information from children.
  </p>

  <h3>8. Changes to This Policy</h3>
  <p>
    We may update this Privacy Policy from time to time. Any changes will be
    posted on this page with an updated revision date.
  </p>

  <h3>9. Contact Us</h3>
  <p>
    If you have questions about this Privacy Policy or your data, please
    contact us at support@geopaving.com.
  </p>

  <div class="footer-note">
    Last updated: ${new Date().toLocaleDateString()}
  </div>
</div>

</body>
</html>`;
};