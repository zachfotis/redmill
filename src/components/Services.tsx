import Image from 'next/image';
import { IoCafeOutline, IoStorefrontOutline } from 'react-icons/io5';
import { CiCoffeeCup } from 'react-icons/ci';
import { BiSolidCoffeeBean } from 'react-icons/bi';
import { IoMdHappy } from 'react-icons/io';
import { FaAccessibleIcon } from 'react-icons/fa6';

function Services() {
  return (
    <section id="services" className="relative w-full max-w-[1600px] h-full flex flex-col justify-start items-center gap-5 mx-auto my-20 px-10">
      <p className="text-xl text-brownLight font-serif italic tracking-wider font-[500]">Οι παροχές μας</p>
      <h1 className="text-4xl font-[600] uppercase">Απολαυστε τον καφε σας</h1>
      <p className="text-lg text-brownLight font-serif italic tracking-wider font-[500] -mt-3">όπως εσείς τον θέλετε!</p>
      <div className="w-full max-w-[150px] h-[2px] mt-2 bg-brownLight opacity-50" />
      <div className="w-full mt-14 grid grid-cols-[1fr_auto_1fr] gap-20">
        <div className="grid grid-cols-[1fr_100px] gap-10">
          <div className="w-full flex flex-col justify-start items-end gap-2">
            <h1 className="text-xl font-[600] uppercase">Take away</h1>
            <p className="text-xl text-right font-serif tracking-wider font-[400]">Παραλάβετε τον καφέ σας απο το κατάστημα μας</p>
          </div>
          <CiCoffeeCup className="text-6xl text-accent" />
          <div className="w-full flex flex-col justify-start items-end gap-2">
            <h1 className="text-xl font-[600] uppercase">Ροφηματα</h1>
            <p className="text-xl text-right font-serif tracking-wider font-[400]">Επιλέξτε ή δημιουργήστε το καφέ σας όπως εσείς τον θέλετε</p>
          </div>
          <IoCafeOutline className="text-6xl text-accent" />
          <div className="w-full flex flex-col justify-start items-end gap-2">
            <h1 className="text-xl font-[600] uppercase">Φιλικο περιβαλλον</h1>
            <p className="text-xl text-right font-serif tracking-wider font-[400]">Απολαύστε τον καφέ σας σε ενα φιλικό περιβάλλον</p>
          </div>
          <IoMdHappy className="text-6xl text-accent" />
        </div>
        <div className="w-full relative">
          <Image src="/images/coffee-bag.png" alt="store" width={ 300 } height={ 900 }
            className="hover:scale-105 transition-all duration-300 ease-in-out" />
          <Image src="/images/coffee-cup.png" alt="store" width={ 300 } height={ 900 }
            className="absolute -bottom-10 -right-14 w-1/2 h-auto hover:scale-110 transition-all duration-300 ease-in-out" />
        </div>
        <div className="grid grid-cols-[100px_1fr] gap-10 justify-items-end">
          <IoStorefrontOutline className="text-6xl text-accent" />
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h1 className="text-xl font-[600] uppercase">Καταστημα</h1>
            <p className="text-xl text-left font-serif tracking-wider font-[400]">Απολαύστε τον καφέ σας στο κατάστημά μας</p>
          </div>
          <BiSolidCoffeeBean className="text-6xl text-accent" />
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h1 className="text-xl font-[600] uppercase">Προϊοντα Καφεκοπτείου</h1>
            <p className="text-xl text-left font-serif tracking-wider font-[400]">Επιλέξτε την ποικιλία καφέ που σας αρέσει</p>
          </div>
          <FaAccessibleIcon className="text-6xl text-accent" />
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h1 className="text-xl font-[600] uppercase">Προσβασιμοτητα</h1>
            <p className="text-xl text-left font-serif tracking-wider font-[400]">Το κατάστημά μας είναι προσβάσιμο σε άτομα με ειδικές ανάγκες</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
