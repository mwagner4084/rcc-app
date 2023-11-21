import nodemailer from "nodemailer";

export type Payload = {
  recipient: string;
  subject: string;
  html: string;
};

const smtpConfig = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '0'),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
};

export const handleEmailFire = async (data: Payload) => {
  const transporter = nodemailer.createTransport({
    ...smtpConfig,
  });

  return await transporter.sendMail({
    from: process.env.SMTP_FROM,
    ...data,
  });
};