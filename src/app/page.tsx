'use client';

import Image from 'next/image';
import { Parallax } from 'react-parallax';
import HeroImage from '@/assets/hero-test.jpg';

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1 gap-4">
      <section className="w-full h-screen text-grayLight">
        <Parallax bgImage={ HeroImage.src } bgImageAlt="hero image" bgImageStyle={ { objectFit: 'cover' } } strength={ 500 } className="w-full h-full">
          <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
            <Image src="/images/logo-test.png" alt="logo" width={ 200 } height={ 200 } />
            <h1 className="text-7xl font-[600] tracking-wider uppercase">Κοκκινος Μηλος</h1>
            <p className="font-serif tracking-wider font-[500]">Κόκκινος Μήλος</p>
          </div>
        </Parallax>
      </section>
      <section className="w-full h-screen bg-orange-500">
        <h1 className="text-5xl font-[500] tracking-wider uppercase">Κοκκινος Μηλος</h1>
        <p className="font-serif font-[800]">Κόκκινος Μήλος</p>
      </section>
    </main>
  );
}
