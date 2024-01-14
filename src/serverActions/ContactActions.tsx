'use server';

import { EmailData } from '../../typings';
import { sendEmail } from '@/serverActions/MailActions';

export const submitForm = async (data: FormData) => {
  const name = data.get('name') as string;
  const email = data.get('email') as string;
  const message = data.get('message') as string;

  const emailData: EmailData = {
    name,
    email,
    message,
  };

  await sendEmail(emailData);
};
