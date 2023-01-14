import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: process.env.SMTP_HOST,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
  secure: true,
});

export default async function handleFeedback(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.body);
    
    // const { method } = req;
    // if (method === "OPTIONS") {
    //   return res.status(200).send("ok");
    // }
    // const mailData = {
    //   from: "minimalist.ic@gmail.com", // sender address
    //   to: `prtk.app.dev@gmail.com`, // list of receivers
    //   subject: "Message from KanjiCards User!",
    //  html: `<b>From: ${req.body.username}</b><br> <b>Email: ${req.body.email}</b><br/><p>Message: ${req.body.message}</p>`,
    // };
    // await transporter.sendMail(mailData, (err: any, info: any) => {
    //   if (err) throw new Error("Error in sending verification email!");
    //   console.log("Verification email sent successfully!");
    // });
  } catch (error) {
    console.log(`Err at POST /sendFeedback`);
    res.status(400).json({ success: false, message: `${error}` });
  }
}