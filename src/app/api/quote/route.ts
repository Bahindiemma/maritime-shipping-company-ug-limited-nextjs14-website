import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name,company, whatsappNumber,commodity, terms, cargoReadyDate, deliveryDate,shipFrom,shipTo,factoryAddress,containerLoad, containerType,containerQty, commodityWeight, serviceRequirements } = await request.json();

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
    subject: `Requate For Quotation`,
    html: `
    <h1 style="text-align: center; font-weight: bold; font-size: 24px; margin-bottom: 20px; color: #0284c7;">Request For Quotation</h1>
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
                    <td>${name}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Email</td>
                    <td>${email}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Company</td>
                    <td>${company}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">WhatsApp Number</td>
                    <td>${whatsappNumber}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Commodity</td>
                    <td>${commodity}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Type of Terms</td>
                    <td>${terms}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Cargo Ready Date</td>
                    <td>${cargoReadyDate}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Cargo Delivery Date</td>
                    <td>${deliveryDate}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Ship From - City</td>
                    <td>${shipFrom.city}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Ship From - Country</td>
                    <td>${shipFrom.country}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Ship To - City</td>
                    <td>${shipTo.city}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Ship To - Country</td>
                    <td>${shipTo.country}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Factory Address</td>
                    <td>${factoryAddress}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Container Load</td>
                    <td>${containerLoad}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Container Type</td>
                    <td>${containerType}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Container Quantity</td>
                    <td>${containerQty}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Commodity Weight</td>
                    <td>${commodityWeight}</td>
                </tr>
                <tr>
                    <td style="padding: 5px 10px; color: #0ea5e9; font-size: 16px;">Other Service Requirements</td>
                    <td>${serviceRequirements}</td>
                </tr>
            </tbody>
        </table>
`
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