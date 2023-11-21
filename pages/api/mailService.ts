import type { SentMessageInfo } from "nodemailer/lib/smtp-transport";
import type { NextApiRequest, NextApiResponse } from "next";
import { ThanksEmail } from "../../emails/thanksEmail";
import { render } from "@react-email/render";
import { handleEmailFire, Payload } from "../../lib/email-helper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result: SentMessageInfo = await sendEmail({
    recipient: "mw.devdesign@gmail.com",
    subject: "Thanks for your request",
    html: render(ThanksEmail()),
  });

  const status = result.accepted.length > 0 ? 200 : 500;

  res.status(status).json(result);
}

function sendEmail(params: Payload ) {
  return handleEmailFire(params);
}
