'use client';

import { Parallax } from 'react-parallax';
import HeroImage from '@/assets/best-coffee.jpg';
import Image from 'next/image';
import PaperSeparator from '@/components/PaperSeparator';

function BestCoffee() {
  return (
    <section className="relative w-full h-[600px] text-grayLight">
      <div className="w-full absolute top-0 left-0 z-10 rotate-180">
        <PaperSeparator />
      </div>
      <Parallax bgImage={ HeroImage.src } bgImageAlt="hero image" bgImageStyle={ { objectFit: 'cover' } } strength={ 700 } className="w-full h-full" />
      <div className="absolute top-0 left-0 z-20 w-full h-[600px] flex justify-center items-stretch gap-10">
        <div className="flex-1 flex flex-col justify-center items-center gap-10">
          <Image src="/images/logo-test.png" alt="logo" width={ 350 } height={ 350 } className="-rotate-12" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start gap-5">
          <h1 className="text-xl text-accent font-serif italic tracking-wider font-[500]">Δέσμευση ποιότητας</h1>
          <h1 className="text-5xl font-[600] tracking-widest uppercase">Μοναδικη γευση και αρωμα</h1>
          <div className="w-full max-w-[170px] h-[2px] mt-2 bg-accent opacity-50" />
          <p className="text-lg max-w-[700px] mt-3 font-serif tracking-wider font-[300]">Στον Κόκκινο Μύλο θα βρείτε τον καλύτερο καφέ στην πόλη. Δευσμευόμαστε στην ποιότητα και
            την αυθεντικότητα του καφέ μας. Επιλέξτε τις ποικιλίες καφέ που σας αρέσουν και απολαύστε τον στο κατάστημά μας ή παραλάβετε τον για take away.</p>
        </div>
      </div>
      {/* Black overlay */ }
      <div className="w-full h-[600px] absolute top-0 left-0 z-0 bg-black opacity-50" />
      <div className="w-full absolute bottom-0 left-0 z-10">
        <PaperSeparator />
      </div>
    </section>
  );
}

export default BestCoffee;
