'use server';

export const submitForm = (data: FormData) => {
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');

  console.log(name, email, message);
};
