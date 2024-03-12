import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, subject, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    // subject: `Message from ${name} (${email})`,
    subject: `${subject}`,
    text: message,
    html: `
    <h1 style="text-align: center; font-weight: bold; font-size: 24px;">Contact Information From Maritime Shipping Company Website</h1>
    <br />
    <table border="1" style="border: 1px solid #ddd; width: 100%; margin-top: 5%; border-collapse:collapse;">
      <thead>
        <tr>
          <th style="text-align: left; padding: 5px 10px; color: #0284c7; font-size: 18px; font-weight: 800;">Field</th>
          <th style="text-align: left; padding: 5px 10px; color: #0284c7; font-size: 18px; font-weight: 800;">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Name</td>
          <td style="padding: 5px 10px;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Email</td>
          <td style="padding: 5px 10px;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Subject</td>
          <td style="padding: 5px 10px;">${subject}</td>
        </tr>
        <tr>
          <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Message</td>
          <td style="padding: 5px 10px;">${message}</td>
        </tr>
      </tbody>
    </table>
  `,

  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}