import nodemailer from "nodemailer";
import config from "../config";

export type EmailOptions = {
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  html: string;
  text?: string;
};

const sendEmailAdvanced = async (options: EmailOptions) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: config.emailSender.email,
      pass: config.emailSender.app_pass,
    },
  });

  const mailOptions = {
    from: config.emailSender.email,
    to: options.to.join(", "),
    cc: options.cc?.join(", "),
    bcc: options.bcc?.join(", "),
    subject: options.subject,
    html: options.html,
    text: options.text,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmailAdvanced;
