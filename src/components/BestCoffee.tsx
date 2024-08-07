'use client';

import PaperSeparator from '@/components/PaperSeparator';
import Image from 'next/image';
import { Parallax } from 'react-parallax';

function BestCoffee() {
  return (
    <section className="relative w-full h-[800px] text-grayLight overflow-hidden bg-black">
      <div className="w-full absolute -top-1 left-0 z-10 rotate-180">
        <PaperSeparator />
      </div>
      <Parallax
        bgImage="/images/best-coffee/IMG_2908.jpg"
        bgImageAlt="A picture of the best coffee"
        bgImageStyle={ { height: '1000px', objectFit: 'cover' } }
        strength={ 700 }
        className="w-full h-full" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-[1600px] h-[800px] flex justify-center items-stretch gap-10 px-10">
        <div className="flex-1 flex-col justify-center items-center gap-10 hidden lg:flex">
          <Image src="/images/logo.png" alt="Company logo" width={ 400 } height={ 400 } className="rotate-[8deg]" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start gap-5">
          <h1 className="text-lg lg:text-xl text-accent font-serif italic tracking-wider font-[500]">Δέσμευση ποιότητας</h1>
          <h1 className="text-3xl lg:text-5xl font-[600] tracking-widest uppercase">Μοναδικη γευση και αρωμα</h1>
          <div className="w-full max-w-[170px] h-[2px] mt-2 bg-accent opacity-50" />
          <p className="text-base lg:text-lg max-w-[700px] mt-3 font-serif tracking-wider font-[300]">Στον Κόκκινο Μύλο θα βρείτε τον καλύτερο καφέ στην πόλη. Δευσμευόμαστε για την
            ποιότητα και
            αυθεντικότητα του καφέ μας. Επιλέξτε την ποικιλία καφέ που σας αρέσει και απολαύστε τον καφέ σας στο κατάστημά μας ή παραλάβετε τον για take away.</p>
        </div>
      </div>
      {/* Black overlay */ }
      <div className="w-full h-[800px] absolute top-0 left-0 z-0 bg-black opacity-70" />
      <div className="w-full absolute -bottom-1 left-0 z-10">
        <PaperSeparator />
      </div>
    </section>
  );
}

export default BestCoffee;
