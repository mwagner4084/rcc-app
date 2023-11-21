import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import * as React from "react";

// after user fills out contact form, send them to this page
export function ThanksEmail() {
  return (
    <Html>
      <>
        <h1>Thank you!</h1>
        <p>Your request has been received and I will be in touch with you as soon as possible!</p>
        <p>Best,</p>
        <p>Robb Connell</p>
        <Button href="https://rscconstructionservices.com">Return to Website</Button>
      </>
    </Html>
  );
}

export type ContactEmailProps = {
  name: string;
  email: string;
  phone: string;
  servicesRequested: string;
  comments: string;
};


// after user fills out contact form, send admin this email
export function ContactEmail({ name, email, phone, servicesRequested, comments }: ContactEmailProps) {
  return (
    <Html>
      <>
        <h1>New Contact Request</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Service(s) Requested: {servicesRequested}</p>
        <p>Comments: {comments}</p>
      </>
    </Html>
  );
}
