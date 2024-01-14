'use client';

import PaperSeparator from '@/components/PaperSeparator';
import { Parallax } from 'react-parallax';
import HeroImage from '@/assets/contact.png';
import { submitForm } from '@/serverActions/ContactActions';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState('');

  return (
    <section id="contact" className="relative w-full h-[900px] text-grayLight overflow-hidden">
      <div className="w-full absolute -top-1 left-0 z-10 rotate-180">
        <PaperSeparator />
      </div>
      <Parallax
        bgImage={ HeroImage.src }
        bgImageAlt="hero image"
        bgImageStyle={ {
          height: '1100px',
          objectFit: 'cover',
        } }
        strength={ 500 }
        className="w-full h-[900px]" />
      <div className="absolute top-0 left-0 z-20 w-full h-[900px] flex justify-center items-stretch gap-10">
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="w-full lg:w-auto text-lg lg:text-xl text-center lg:text-left text-accent font-serif italic tracking-wider font-[500]">Φόρμα Επικοινωνίας</h1>
          <h1 className="w-full lg:w-auto text-3xl lg:text-5xl text-center lg:text-left font-[500] tracking-wider uppercase">Επικοινωνηστε μαζι μας</h1>
          <div className="w-full h-[2px] mt-2 bg-accent opacity-50" />
          <form
            action={ async (formData: FormData) => {
              try {
                await submitForm(formData);
                setName('');
                setEmail('');
                setMessage('');
                setIsSubmitted('true');
              } catch (error) {
                setIsSubmitted('false');
              }
            } }
            className="w-full flex flex-col gap-10 mt-3 p-5 lg:p-0">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
              <input
                name="name"
                type="text"
                placeholder="Ονοματεπώνυμο"
                className="w-full h-10 px-3 py-2 text-black bg-white bg-opacity-90 border-2 border-grayLight rounded-md focus:outline-none focus:border-accent disabled:opacity-50 disabled:cursor-not-allowed"
                value={ name }
                onChange={ (event) => setName(event.target.value) }
                disabled={ isSubmitted === 'true' }
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full h-10 px-3 py-2 text-black bg-white bg-opacity-90 border-2 border-grayLight rounded-md focus:outline-none focus:border-accent disabled:opacity-50 disabled:cursor-not-allowed"
                value={ email }
                onChange={ (event) => setEmail(event.target.value) }
                disabled={ isSubmitted === 'true' }
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Μήνυμα"
              className="w-full h-40 px-3 py-2 text-black bg-white bg-opacity-90 border-2 border-grayLight rounded-md focus:outline-none focus:border-accent disabled:opacity-50 disabled:cursor-not-allowed"
              value={ message }
              onChange={ (event) => setMessage(event.target.value) }
              disabled={ isSubmitted === 'true' }
              minLength={ 20 }
              required
            />
            <button
              type="submit"
              className="w-full h-10 bg-accent text-grayLight rounded-md mt-5 hover:bg-brownLight hover:text-white transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={ isSubmitted === 'true' }
            >
              Αποστολή
            </button>
          </form>

          { isSubmitted === 'true' ? (
            <div className="w-full flex justify-center items-center gap-5">
              <h1 className="text-xl text-accent font-serif italic tracking-wider font-[500]">Το μήνυμα σας στάλθηκε επιτυχώς!</h1>
            </div>
          ) : isSubmitted === 'false' ? (
            <div className="w-full flex flex-col justify-center items-center gap-5">
              <h1 className="text-xl text-accent font-serif italic tracking-wider font-[500]">Σφάλμα κατά την αποστολή του μηνύματος!</h1>
              <h1 className="text-xl text-accent font-serif italic tracking-wider font-[500]">Παρακαλώ προσπαθήστε ξανά!</h1>
            </div>
          ) : null }
        </div>
      </div>
      {/* Black overlay */ }
      <div className="w-full h-[900px] absolute top-0 left-0 z-0 bg-black opacity-50" />
      <div className="w-full absolute bottom-0 left-0 z-10 h-2 bg-brownLight" />
    </section>
  );
}
