import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  let data = request.body

  if (data.captcha.length > 0) {
    response.status(400).json({
      body: request.body,
      query: request.query,
      cookies: request.cookies,
    });
  }
  let messageText;
  let toEmail;
  if (data.type === "Signup") {
    toEmail = process.env.EMAIL_SIGNUP;
    messageText = `
Type: ${data.type}
Name: ${data.fullName}
Phone: ${data.phone}
Email: ${data.email}
Address 1: ${data.address1}
Address 2: ${data.address2}
City: ${data.city}
Start date: ${data.startDate}
Frequency: ${data.frequency}
Promo code: ${data.promoCode}
	`;
  } else {
    // type is substitution
    toEmail = process.env.EMAIL_SUBS;
    messageText = `
Type: ${data.type}
Name: ${data.fullName}
Phone: ${data.phone}
Email: ${data.email}
Address 1: ${data.address1}
Address 2: ${data.address2}
City: ${data.city}
Delivery day: ${data.deliveryDay}
Box type: ${data.boxType}

Items to remove: 
${data.itemsToRemove}

Items to add: 
${data.itemsToAdd}

Comments: ${data.comments}
	`;
  }

  const msg = {
    to: toEmail,
    from: process.env.FROM_EMAIL,
    subject: `[FORM] ${data.type}: ${data.fullName}`,
    text: messageText,
  };

  try {
    console.log("sending message");
    await sgMail.send(msg);
    console.log("message sent");
    response.status(200).json({
      body: "message sent"
    });
  } catch (error) {
    response.status(500).json({
      body: error
    });
  }
}
