'use client';

import PaperSeparator from '@/components/PaperSeparator';
import { Parallax } from 'react-parallax';
import HeroImage from '@/assets/best-coffee.jpg';
import { submitForm } from '@/serverActions/ContactActions';

export default function Contact() {

  return (
    <section id="contact" className="relative w-full h-[900px] text-grayLight">
      <div className="w-full absolute top-0 left-0 z-10 rotate-180">
        <PaperSeparator />
      </div>
      <Parallax bgImage={ HeroImage.src } bgImageAlt="hero image" bgImageStyle={ { objectFit: 'cover' } } strength={ 700 } className="w-full h-full" />
      <div className="absolute top-0 left-0 z-20 w-full h-[900px] flex justify-center items-stretch gap-10">
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-xl text-accent font-serif italic tracking-wider font-[500]">Φόρμα Επικοινωνίας</h1>
          <h1 className="text-5xl font-[500] tracking-wider uppercase">Επικοινωνηστε μαζι μας</h1>
          <div className="w-full h-[2px] mt-2 bg-accent opacity-50" />
          <form
            action={ submitForm }
            className="w-full flex flex-col gap-10 mt-3">
            <div className="flex justify-between items-center gap-5">
              <input
                name="name"
                type="text"
                placeholder="Ονοματεπώνυμο"
                className="w-full h-10 px-3 py-2 text-black bg-white bg-opacity-90 border-2 border-grayLight rounded-md focus:outline-none focus:border-accent"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full h-10 px-3 py-2 text-black bg-white bg-opacity-90 border-2 border-grayLight rounded-md focus:outline-none focus:border-accent"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Μήνυμα"
              className="w-full h-40 px-3 py-2 text-black bg-white bg-opacity-90 border-2 border-grayLight rounded-md focus:outline-none focus:border-accent"
              required
              minLength={ 20 }
            />
            <button type="submit" className="w-full h-10 bg-accent text-grayLight rounded-md mt-5 hover:bg-brownLight hover:text-white transition-all duration-300 ease-in-out">
              Αποστολή
            </button>
          </form>
        </div>
      </div>
      {/* Black overlay */ }
      <div className="w-full h-[900px] absolute top-0 left-0 z-0 bg-black opacity-50" />
      <div className="w-full absolute bottom-0 left-0 z-10 h-2 bg-brownLight" />
    </section>
  );
}
