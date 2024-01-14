'use server';

import nodemailer from 'nodemailer';
import { EmailData } from '../../typings';

export const sendEmail = async (data: EmailData) => {
  try {

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    } as any);

    const info = await transporter.sendMail({
      from: `"RedMill Contact" <${ process.env.MAIL_USERNAME }>`,
      to: process.env.MAIL_USERNAME,
      subject: `Message from ${ data.name }`,
      text: data.message,
      html: `
      <article>
        <h3>Message from ${ data.name } (${ data.email })</h3>
        <p>${ data.message }</p>
      </article>
    `,
    });

    console.log(info);
  } catch (error) {
    console.log(error);
  }
};
