import type { NextApiRequest, NextApiResponse } from "next";
import { ThanksEmail } from "../../emails/thanksEmail";
import { render } from "@react-email/render";
import { handleEmailFire } from "../../lib/email-helper";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await sendEmail({
    to: "mw.devdesign@gmail.com",
    subject: "Thanks for your request",
    html: render(ThanksEmail()),
  });

  return res.status(200).json({ message: "Success" });
}

function sendEmail(arg0: { to: string; subject: string; html: string; }) {
  throw new Error("Function not implemented.");
}
