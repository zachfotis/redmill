'use client';

import { Parallax } from 'react-parallax';
import HeroImage from '@/assets/hero-test.jpg';
import Image from 'next/image';
import PaperSeparator from '@/components/PaperSeparator';
import './Hero.scss';

function Hero() {
  return (
    <section id="home" className="relative w-full h-screen text-grayLight">
      <Parallax bgImage={ HeroImage.src } bgImageAlt="hero image" bgImageStyle={ { objectFit: 'cover', scale: 1.1 } } strength={ 500 } className="w-full h-full" />
      <div className="absolute top-0 left-0 z-20 w-full h-full flex flex-col justify-center items-center gap-10">
        <Image src="/images/logo.png" alt="logo" className="spring-image" width={ 300 } height={ 300 } />
        <h1 className="text-2xl font-[400] font-serif italic tracking-wider ">Καλώς ήλθατε, στον</h1>
        <h1 className="text-7xl font-[600] tracking-widest uppercase">Κοκκινο Μυλο</h1>
        <p className="text-2xl font-serif tracking-wider font-[400]">Καφεκοπτείο - Καφέ</p>
      </div>
      {/* Black overlay */ }
      <div className="w-full h-full absolute top-0 left-0 z-0 bg-black opacity-40" />
      <div className="w-full absolute bottom-0 left-0 z-10">
        <PaperSeparator />
      </div>
    </section>
  );
}

export default Hero;
