'use client';

import { Parallax } from 'react-parallax';
import HeroImage from '@/assets/hero-test.jpg';
import Image from 'next/image';
import PaperSeparator from '@/components/PaperSeparator';
import './Hero.scss';

function Hero() {
  return (
    <section id="home" className="relative w-full h-screen text-grayLight bg-black">
      <Parallax bgImage={ HeroImage.src } bgImageAlt="Coffee shop wallapaper" bgImageStyle={ { height: '100vh', objectFit: 'cover', scale: 1.1 } } strength={ 500 }
        className="w-full h-full" />
      <div className="absolute top-0 left-0 z-20 w-full h-full flex flex-col justify-center items-center gap-5">
        <Image src="/images/logo.png" alt="Coffee shop logo" className="spring-image w-[150px] lg:w-[300px]" width={ 300 } height={ 300 } />
        <h2 className="text-xl lg:text-2xl font-[400] font-serif italic tracking-wider ">Καλώς ήλθατε, στον</h2>
        <h1 className="text-5xl lg:text-7xl text-center font-[600] leading-snug md:leading-none tracking-widest uppercase">Κοκκινο Μυλο</h1>
        <h2 className="text-xl lg:text-2xl font-serif tracking-wider font-[400]">Καφεκοπτείο - Καφέ</h2>
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
