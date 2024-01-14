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
      className={ `fixed w-full bottom-0 right-1/2 transform translate-x-1/2 ${ isMinimized ? 'translate-y-full' : 'translate-y-0' } z-50 bg-white flex justify-center items-center gap-10 p-5 transition-all duration-300 ease-in-out` }>
      <button
        className="absolute w-20 flex justify-center py-1 rounded-t-md top-0 left-10 transform -translate-y-full z-10 bg-accent"
        onClick={ () => setIsMinimized(!isMinimized) }
      >
        <FaAngleDoubleDown className={ `text-xl text-white transition-all duration-300 ease-in-out transform ${ isMinimized ? 'rotate-180' : '' }` } />
      </button>
      <div className="w-full absolute top-0 left-0 z-10 h-1 bg-accent" />
      <Image src="/images/eu1.png" alt="EU program logos" width={ 200 } height={ 200 } className="hover:scale-105 transition-all duration-300 ease-in-out" />
      <Image src="/images/eu2.png" alt="EU program logos" width={ 100 } height={ 100 } className="hover:scale-105 transition-all duration-300 ease-in-out" />
      <Image src="/images/eu3.png" alt="EU program logos" width={ 65 } height={ 100 } className="ml-7 hover:scale-105 transition-all duration-300 ease-in-out" />
      <Image src="/images/eu4.png" alt="EU program logos" width={ 75 } height={ 100 } className="ml-7 hover:scale-105 transition-all duration-300 ease-in-out" />
      <Image src="/images/eu5.png" alt="EU program logos" width={ 110 } height={ 100 } className="ml-5 hover:scale-105 transition-all duration-300 ease-in-out" />
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="w-full flex justify-start items-center gap-2">
          <FaLink className="text-lg text-accent" />
          <Link href="http://www.agrotikianaptixi.gr/" target="_blank" rel="noopener noreferrer" className="text-xs text-accent font-[500]">Προγράμματος Αγροτικής Ανάπτυξης</Link>
        </div>
        <div className="w-full flex justify-start items-center gap-2">
          <FaLink className="text-lg text-accent" />
          <Link href="https://ec.europa.eu/agriculture/index_el" target="_blank" rel="noopener noreferrer" className="text-xs text-accent font-[500]">
            Διεύθυνσης Γεωργίας και Αγροτικής Ανάπτυξης
          </Link>
        </div>
      </div>
    </section>
  );
}
