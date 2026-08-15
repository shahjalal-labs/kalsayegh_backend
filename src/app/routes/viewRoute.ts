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
export const supportPage = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Support — Geo Paving</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Get help with the Geo Paving app — account approval, time tracking, invoicing, messaging, and how to reach us.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --asphalt: #1b1d1f;
    --concrete: #eef0ef;
    --concrete-line: #d8dbd9;
    --ink: #24272b;
    --ink-soft: #5b6066;
    --road-yellow: #f6c445;
    --steel-blue: #3a6ea5;
    --white: #ffffff;
  }

  * { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: 'Inter', Arial, sans-serif;
    color: var(--ink);
    background: var(--concrete);
  }

  h1, h2, .eyebrow {
    font-family: 'Oswald', Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  .road-divider {
    height: 4px;
    width: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      var(--road-yellow) 0px,
      var(--road-yellow) 28px,
      transparent 28px,
      transparent 52px
    );
  }

  header {
    background: var(--asphalt);
    color: var(--white);
    padding: 64px 24px 48px;
    text-align: center;
  }

  .eyebrow {
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    color: var(--road-yellow);
    background: rgba(246, 196, 69, 0.12);
    border: 1px solid rgba(246, 196, 69, 0.35);
    padding: 6px 14px;
    border-radius: 999px;
    margin-bottom: 20px;
    letter-spacing: 0.12em;
  }

  header h1 {
    font-size: clamp(28px, 5vw, 40px);
    margin: 0 0 12px;
  }

  header p {
    color: #c7cbce;
    font-size: 15px;
    max-width: 460px;
    margin: 0 auto;
  }

  .wrap {
    max-width: 760px;
    margin: 0 auto;
    padding: 56px 24px 80px;
  }

  .contact-card {
    background: var(--white);
    border: 1px solid var(--concrete-line);
    border-radius: 12px;
    padding: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 56px;
  }

  .contact-card h2 {
    font-size: 16px;
    margin: 0 0 6px;
  }

  .contact-card p {
    margin: 0;
    font-size: 13.5px;
    color: var(--ink-soft);
  }

  .btn {
    display: inline-block;
    padding: 12px 22px;
    background: var(--road-yellow);
    color: var(--asphalt);
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
  }

  .section-title {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.12em;
    color: var(--steel-blue);
    margin: 0 0 20px;
  }

  details {
    background: var(--white);
    border: 1px solid var(--concrete-line);
    border-radius: 10px;
    padding: 4px 20px;
    margin-bottom: 12px;
  }

  summary {
    cursor: pointer;
    font-weight: 600;
    font-size: 14.5px;
    padding: 16px 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  summary::-webkit-details-marker { display: none; }

  summary::after {
    content: '+';
    font-size: 18px;
    color: var(--steel-blue);
    font-weight: 400;
  }

  details[open] summary::after { content: '\\2212'; }

  details p {
    font-size: 13.5px;
    line-height: 1.6;
    color: var(--ink-soft);
    margin: 0 0 18px;
  }

  .faq-group { margin-bottom: 44px; }

  footer {
    border-top: 1px solid var(--concrete-line);
    padding: 28px 24px;
    text-align: center;
    font-size: 13px;
    color: var(--ink-soft);
  }

  footer a {
    color: var(--steel-blue);
    text-decoration: none;
    margin: 0 10px;
  }
</style>
</head>
<body>

<header>
  <span class="eyebrow">Support</span>
  <h1>How can we help?</h1>
  <p>Answers for Workers, Project Managers, and Office Administrators using Geo Paving.</p>
</header>

<div class="road-divider"></div>

<div class="wrap">

  <div class="contact-card">
    <div>
      <h2>Still stuck?</h2>
      <p>Email us and we'll get back to you, usually within 1-2 business days.</p>
    </div>
    <a class="btn" href="mailto:support@example.com">Email Support</a>
  </div>

  <div class="faq-group">
    <p class="section-title">Getting Started</p>

    <details open>
      <summary>Why can't I log in after signing up?</summary>
      <p>Every new account needs to be approved by your organization's admin before you can log in. If it's been a while, reach out to your Office Administrator directly, or contact us if you're not sure who that is.</p>
    </details>

    <details>
      <summary>How do I know which role I have?</summary>
      <p>Your role — Worker, Project Manager, Office Administrator, or Owner — is set by your admin when your account is approved. You can check your current role from your profile screen.</p>
    </details>

    <details>
      <summary>I forgot my password. What do I do?</summary>
      <p>Use "Forgot password" on the login screen to reset it by email. If you don't receive the reset email within a few minutes, check your spam folder or contact support.</p>
    </details>
  </div>

  <div class="faq-group">
    <p class="section-title">Time Tracking & Jobs</p>

    <details>
      <summary>How do I log my working hours?</summary>
      <p>Workers can log hours from the Time Tracking section of the app. Entries are visible to your Project Manager and Office Administrator.</p>
    </details>

    <details>
      <summary>How do I create a job or to-do list?</summary>
      <p>Project Managers can create a job under the relevant office, then add a to-do list to break the work into tasks.</p>
    </details>
  </div>

  <div class="faq-group">
    <p class="section-title">Invoices & Payments</p>

    <details>
      <summary>How do I send an estimate or invoice to a client?</summary>
      <p>From a job, Project Managers can build an itemized estimate or invoice and send it to the client. Payment reminders can be sent from the same screen.</p>
    </details>

    <details>
      <summary>Does Geo Paving process payments?</summary>
      <p>No. Geo Paving doesn't include a payment processor. Project Managers record payment values and can attach a photo of a checkbook or payment record to keep an internal log for the business owner.</p>
    </details>
  </div>

  <div class="faq-group">
    <p class="section-title">Messaging</p>

    <details>
      <summary>Who can start a group chat?</summary>
      <p>Only Office Administrators can create group chats. Everyone can send direct messages and participate in group chats they've been added to.</p>
    </details>
  </div>

  <div class="faq-group">
    <p class="section-title">Account & Data</p>

    <details>
      <summary>How do I delete my account or data?</summary>
      <p>Contact us at the email above with your account details, or ask your Office Administrator to remove your account. We'll confirm once your data has been deleted, in line with our Privacy Policy.</p>
    </details>
  </div>

</div>

<footer>
  &copy; ${new Date().getFullYear()} Geo Paving. All rights reserved.
  <a href="/privacy">Privacy Policy</a>
  <a href="/">Home</a>
</footer>

</body>
</html>`;
};

export const marketPage = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Geo Paving — Run your crew from one app</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Geo Paving is the job-to-invoice management app for paving and contracting crews — approvals, time tracking, messaging, estimates, and payment records in one place.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --asphalt: #1b1d1f;
    --asphalt-soft: #26292c;
    --concrete: #eef0ef;
    --concrete-line: #d8dbd9;
    --ink: #24272b;
    --ink-soft: #5b6066;
    --road-yellow: #f6c445;
    --steel-blue: #3a6ea5;
    --white: #ffffff;
  }

  * { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: 'Inter', Arial, sans-serif;
    color: var(--ink);
    background: var(--concrete);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, .eyebrow {
    font-family: 'Oswald', Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  a { color: inherit; }

  /* --- Signature: dashed road-stripe divider --- */
  .road-divider {
    height: 4px;
    width: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      var(--road-yellow) 0px,
      var(--road-yellow) 28px,
      transparent 28px,
      transparent 52px
    );
  }

  /* --- Hero --- */
  .hero {
    background: var(--asphalt);
    color: var(--white);
    padding: 96px 24px 72px;
    text-align: center;
  }

  .eyebrow {
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    color: var(--road-yellow);
    background: rgba(246, 196, 69, 0.12);
    border: 1px solid rgba(246, 196, 69, 0.35);
    padding: 6px 14px;
    border-radius: 999px;
    margin-bottom: 24px;
    letter-spacing: 0.12em;
  }

  .hero h1 {
    font-size: clamp(34px, 6vw, 56px);
    font-weight: 700;
    line-height: 1.08;
    margin: 0 auto 20px;
    max-width: 720px;
  }

  .hero p {
    font-family: 'Inter', Arial, sans-serif;
    font-size: 17px;
    line-height: 1.6;
    color: #c7cbce;
    max-width: 540px;
    margin: 0 auto 36px;
  }

  .cta-row {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 26px;
    border-radius: 8px;
    font-family: 'Inter', Arial, sans-serif;
    font-weight: 600;
    font-size: 14px;
    text-decoration: none;
    border: 1px solid transparent;
  }

  .btn-primary {
    background: var(--road-yellow);
    color: var(--asphalt);
  }

  .btn-secondary {
    background: transparent;
    color: var(--white);
    border-color: rgba(255,255,255,0.35);
  }

  /* --- Roles section --- */
  .section {
    max-width: 1040px;
    margin: 0 auto;
    padding: 72px 24px;
  }

  .section-head {
    text-align: center;
    max-width: 620px;
    margin: 0 auto 48px;
  }

  .section-head .eyebrow {
    background: rgba(58, 110, 165, 0.1);
    border-color: rgba(58, 110, 165, 0.3);
    color: var(--steel-blue);
  }

  .section-head h2 {
    font-size: clamp(26px, 4vw, 34px);
    margin: 0 0 12px;
  }

  .section-head p {
    color: var(--ink-soft);
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
  }

  .role-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--concrete-line);
    border: 1px solid var(--concrete-line);
    border-radius: 12px;
    overflow: hidden;
  }

  .role-card {
    background: var(--white);
    padding: 28px 22px;
  }

  .role-card .role-tag {
    font-family: 'Oswald', Arial, sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--steel-blue);
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .role-card h3 {
    font-size: 17px;
    margin: 0 0 10px;
    text-transform: none;
    letter-spacing: normal;
  }

  .role-card p {
    font-size: 13.5px;
    line-height: 1.55;
    color: var(--ink-soft);
    margin: 0;
  }

  /* --- Feature strip --- */
  .feature-strip {
    background: var(--asphalt-soft);
    color: var(--white);
  }

  .feature-strip .section-head p { color: #b9bdc0; }
  .feature-strip .section-head .eyebrow {
    background: rgba(246, 196, 69, 0.12);
    border-color: rgba(246, 196, 69, 0.35);
    color: var(--road-yellow);
  }

  .feature-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }

  .feature-item {
    display: flex;
    gap: 14px;
    padding: 4px 0;
  }

  .feature-mark {
    flex-shrink: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--road-yellow);
    margin-top: 7px;
  }

  .feature-item h3 {
    font-size: 15px;
    text-transform: none;
    letter-spacing: normal;
    margin: 0 0 6px;
  }

  .feature-item p {
    font-size: 13.5px;
    line-height: 1.55;
    color: #b9bdc0;
    margin: 0;
  }

  /* --- Closing CTA --- */
  .closing {
    text-align: center;
    padding: 80px 24px 96px;
  }

  .closing h2 {
    font-size: clamp(24px, 4vw, 32px);
    margin: 0 0 14px;
  }

  .closing p {
    color: var(--ink-soft);
    font-size: 15px;
    margin: 0 0 32px;
  }

  footer {
    border-top: 1px solid var(--concrete-line);
    padding: 28px 24px;
    text-align: center;
    font-size: 13px;
    color: var(--ink-soft);
  }

  footer a {
    color: var(--steel-blue);
    text-decoration: none;
    margin: 0 10px;
  }

  @media (max-width: 720px) {
    .role-grid { grid-template-columns: repeat(2, 1fr); }
    .feature-list { grid-template-columns: 1fr; }
  }

  @media (max-width: 480px) {
    .role-grid { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>

<section class="hero">
  <span class="eyebrow">Contractor Management</span>
  <h1>Built like the jobs you run.</h1>
  <p>Geo Paving keeps crews, hours, invoices, and messages in one place — from the first approved login to the last paid invoice.</p>
  <div class="cta-row">
    <a class="btn btn-primary" href="#">Download on the App Store</a>
    <a class="btn btn-secondary" href="#">Get it on Google Play</a>
  </div>
</section>

<div class="road-divider"></div>

<section class="section">
  <div class="section-head">
    <span class="eyebrow">Four roles, one crew</span>
    <h2>Everyone gets the view they need</h2>
    <p>Access starts with admin approval, so the owner always controls who's on the job before they're in the app.</p>
  </div>
  <div class="role-grid">
    <div class="role-card">
      <div class="role-tag">Worker</div>
      <h3>Log hours, stay in the loop</h3>
      <p>Track working hours, message the team, check the shared calendar, and keep a profile up to date.</p>
    </div>
    <div class="role-card">
      <div class="role-tag">Project Manager</div>
      <h3>Run jobs start to finish</h3>
      <p>Create jobs under offices, build to-do lists, send estimates and invoices, and track payments with checkbook photos.</p>
    </div>
    <div class="role-card">
      <div class="role-tag">Office Administrator</div>
      <h3>Keep the office organized</h3>
      <p>Approve new accounts, start group chats, and coordinate schedules across every office.</p>
    </div>
    <div class="role-card">
      <div class="role-tag">Owner</div>
      <h3>See the whole business</h3>
      <p>A clear line of sight into jobs, hours, invoices, and payments — without a separate payment processor.</p>
    </div>
  </div>
</section>

<section class="feature-strip">
  <div class="section">
    <div class="section-head">
      <span class="eyebrow">What's inside</span>
      <h2>From clock-in to paid invoice</h2>
      <p>The everyday tools a paving crew actually needs, without the bloat of a generic project tool.</p>
    </div>
    <div class="feature-list">
      <div class="feature-item">
        <span class="feature-mark"></span>
        <div>
          <h3>Admin-approved access</h3>
          <p>Every new signup waits for admin sign-off before they can log in — no unverified accounts on your jobsite.</p>
        </div>
      </div>
      <div class="feature-item">
        <span class="feature-mark"></span>
        <div>
          <h3>Time tracking</h3>
          <p>Workers log their own hours, giving the office an accurate record without paper timesheets.</p>
        </div>
      </div>
      <div class="feature-item">
        <span class="feature-mark"></span>
        <div>
          <h3>Jobs & to-do lists</h3>
          <p>Project Managers create jobs under the right office and break them into trackable to-do lists.</p>
        </div>
      </div>
      <div class="feature-item">
        <span class="feature-mark"></span>
        <div>
          <h3>Estimates & invoices</h3>
          <p>Build itemized estimates and invoices, send them to clients, and follow up automatically with reminders.</p>
        </div>
      </div>
      <div class="feature-item">
        <span class="feature-mark"></span>
        <div>
          <h3>Messaging & group chat</h3>
          <p>Direct messaging for every role, plus admin-created group chats for team-wide updates.</p>
        </div>
      </div>
      <div class="feature-item">
        <span class="feature-mark"></span>
        <div>
          <h3>Payment records</h3>
          <p>Log payment values and attach checkbook images to keep a clear internal record — no payment processing built in.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="road-divider"></div>

<section class="closing">
  <h2>Run your crew the way you run your jobs.</h2>
  <p>Geo Paving is built for a single contracting business and the people who work for it.</p>
  <div class="cta-row">
    <a class="btn btn-primary" style="color:#1b1d1f;" href="#">Download on the App Store</a>
    <a class="btn btn-secondary" style="color:#1b1d1f;border-color:#d8dbd9;" href="#">Get it on Google Play</a>
  </div>
</section>

<footer>
  &copy; ${new Date().getFullYear()} Geo Paving. All rights reserved.
  <a href="/privacy">Privacy Policy</a>
  <a href="/support">Support</a>
</footer>

</body>
</html>`;
};