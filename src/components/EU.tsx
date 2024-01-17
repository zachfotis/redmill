'use client';

import Image from 'next/image';
import { FaLink } from 'react-icons/fa6';
import Link from 'next/link';
import { useState } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';

export default function EU() {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <section
      className={ `fixed w-full bottom-0 right-1/2 transform translate-x-1/2 ${ isMinimized ? 'translate-y-full' : 'translate-y-0' } z-50 bg-white flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 p-5 transition-all duration-300 ease-in-out` }
      aria-label="EU Programs"
    >
      <button
        className="absolute w-20 flex justify-center py-1 rounded-t-md top-0 left-10 transform -translate-y-full z-10 bg-accent"
        onClick={ () => setIsMinimized(!isMinimized) }
        aria-label={ isMinimized ? 'Expand EU Programs' : 'Minimize EU Programs' }
      >
        <FaAngleDoubleDown className={ `text-xl text-white transition-all duration-300 ease-in-out transform ${ isMinimized ? 'rotate-180' : '' }` } />
      </button>
      <div className="w-full absolute top-0 left-0 z-10 h-1 bg-accent" />

      <div className="flex justify-center items-center gap-0 sm:gap-10">
        <Image src="/images/eu1.png" alt="EU program logo 1" width={ 200 } height={ 200 }
          className="w-[100px] lg:w-[200px] hover:scale-105 transition-all duration-300 ease-in-out" />
        <Image src="/images/eu2.png" alt="EU program logo 2" width={ 100 } height={ 100 }
          className="w-[50px] lg:w-[100px] hover:scale-105 transition-all duration-300 ease-in-out" />
        <Image src="/images/eu3.png" alt="EU program logo 3" width={ 65 } height={ 100 }
          className="w-[33px] lg:w-[65px] ml-7 hover:scale-105 transition-all duration-300 ease-in-out" />
        <Image src="/images/eu4.png" alt="EU program logo 4" width={ 75 } height={ 100 }
          className="w-[37px] lg:w-[75px] ml-7 hover:scale-105 transition-all duration-300 ease-in-out" />
        <Image src="/images/eu5.png" alt="EU program logo 5" width={ 110 } height={ 100 }
          className="w-[55px] lg:w-[110px] ml-5 hover:scale-105 transition-all duration-300 ease-in-out" />
      </div>
      <div className="flex flex-col justify-center items-center gap-1 md:gap-3">
        <div className="w-full flex justify-center md:justify-start items-center gap-2">
          <FaLink className="text-lg text-brown" />
          <Link href="http://www.agrotikianaptixi.gr/" target="_blank" rel="noopener noreferrer" className="text-xs text-brown font-[500]">Πρόγραμμα Αγροτικής Ανάπτυξης</Link>
        </div>
        <div className="w-full flex justify-center md:justify-start items-center gap-2">
          <FaLink className="text-lg text-brown" />
          <Link href="https://ec.europa.eu/agriculture/index_el" target="_blank" rel="noopener noreferrer" className="text-xs text-brown font-[500]">
            Διεύθυνση Γεωργίας και Αγροτικής Ανάπτυξης
          </Link>
        </div>
      </div>
    </section>
  );
}
