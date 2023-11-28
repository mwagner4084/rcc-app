import type { SentMessageInfo } from "nodemailer/lib/smtp-transport";
import type { NextApiRequest, NextApiResponse } from "next";
import { ThanksEmail, ContactEmail, type ContactEmailProps } from "../../emails/main";
import { render } from "@react-email/render";
import { handleEmailFire, Payload } from "../../lib/email-helper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const formFields: ContactEmailProps = {
    name: stripHtml(req.body.name),
    phone: stripHtml(req.body.phone),
    email: stripHtml(req.body.email),
    servicesRequested: stripHtml(req.body.services),
    comments: stripHtml(req.body.comments),
  };

  if (!isValidEmail(formFields.email)) {
    return res.status(400).json({ success: false, message: "Invalid email" });
  }

  const result1: SentMessageInfo = await handleEmailFire({
    to: formFields.email,
    subject: "Thanks for your request",
    html: render(ThanksEmail()),
  });

  const status1 = result1.accepted.length > 0;

  const result2: SentMessageInfo = await handleEmailFire({
    to: "rsccs120@gmail.com",
    subject: "New Services Request",
    html: render(ContactEmail(formFields)),
  });

  const status2 = result2.accepted.length > 0;

  if (status1 && status2) {
    return res.status(200).json({ success: true, message: "Email sent" });
  }

  return res.status(500).json({ success: false, message: "Email failed to send" });
}

function isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>?/gim, "").trim();
}
