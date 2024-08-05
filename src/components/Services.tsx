import Image from 'next/image';
import { BiSolidCoffeeBean } from 'react-icons/bi';
import { CiCoffeeCup } from 'react-icons/ci';
import { FaAccessibleIcon } from 'react-icons/fa6';
import { IoMdHappy } from 'react-icons/io';
import { IoCafeOutline, IoStorefrontOutline } from 'react-icons/io5';

function Services() {
  return (
    <section
      id="services"
      className="relative w-full h-full flex flex-col justify-start items-center gap-5 mx-auto my-10 lg:my-20 px-10"
    >
      <Image
        src="/images/beans.png"
        alt="beans"
        width={300}
        height={900}
        className="absolute w-full h-full object-cover top-0 left-0 -z-10 opacity-5"
      />
      <h2 className="text-lg lg:text-xl text-brownLight font-serif italic tracking-wider font-[500]">Οι παροχές μας</h2>
      <h1 className="text-2xl lg:text-4xl font-[600] text-center uppercase">Απολαυστε τον καφε σας</h1>
      <h2 className="text-base lg:text-lg text-brownLight font-serif italic tracking-wider font-[500] -mt-3">
        όπως εσείς τον θέλετε!
      </h2>
      <div className="w-full max-w-[150px] h-[2px] mt-2 bg-brownLight opacity-50" />
      <div className="w-full max-w-[1600px] mt-5 lg:mt-14 grid grid-cols-[1fr] lg:grid-cols-[1fr_auto_1fr] gap-20">
        <div className="grid grid-cols-[1fr_100px] gap-10">
          <div className="w-full flex flex-col justify-start items-end gap-2">
            <h1 className="text-lg lg:text-xl text-right font-[600] uppercase">Take away</h1>
            <h2 className="text-lg lg:text-xl text-right font-serif tracking-wider font-[400]">
              Παραλάβετε τον καφέ σας απο το κατάστημα μας
            </h2>
          </div>
          <CiCoffeeCup
            className="text-6xl text-accent hover:scale-110 transition-all duration-300 ease-in-out"
            aria-label="coffee cup icon"
          />
          <div className="w-full flex flex-col justify-start items-end gap-2">
            <h1 className="text-lg lg:text-xl text-right font-[600] uppercase">Ροφηματα</h1>
            <h2 className="text-lg lg:text-xl text-right font-serif tracking-wider font-[400]">
              Επιλέξτε ή δημιουργήστε το καφέ σας όπως εσείς τον θέλετε
            </h2>
          </div>
          <IoCafeOutline
            className="text-6xl text-accent hover:scale-110 transition-all duration-300 ease-in-out"
            aria-label="cafe icon"
          />
          <div className="w-full flex flex-col justify-start items-end gap-2">
            <h1 className="text-lg lg:text-xl text-right font-[600] uppercase">Φιλικο περιβαλλον</h1>
            <h2 className="text-lg lg:text-xl text-right font-serif tracking-wider font-[400]">
              Απολαύστε τον καφέ σας σε ενα φιλικό περιβάλλον
            </h2>
          </div>
          <IoMdHappy
            className="text-6xl text-accent hover:scale-110 transition-all duration-300 ease-in-out"
            aria-label="happy face icon"
          />
        </div>
        <div className="w-full h-1 bg-accent xl:hidden" />
        <div className="w-full relative hidden xl:block">
          <Image
            src="/images/coffee-bag.png"
            alt="bag of coffee"
            width={300}
            height={900}
            className="hover:scale-105 transition-all duration-300 ease-in-out"
          />
          <Image
            src="/images/coffee-cup.png"
            alt="cup of coffee"
            width={300}
            height={900}
            className="absolute -bottom-10 -right-14 w-1/2 h-auto hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="grid grid-cols-[100px_1fr] gap-10 justify-items-end">
          <IoStorefrontOutline
            className="text-6xl text-accent hover:scale-110 transition-all duration-300 ease-in-out"
            aria-label="storefront icon"
          />
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h1 className="text-lg lg:text-xl font-[600] uppercase">Καταστημα</h1>
            <h2 className="text-lg lg:text-xl text-left font-serif tracking-wider font-[400]">
              Απολαύστε τον καφέ σας στο κατάστημά μας
            </h2>
          </div>
          <BiSolidCoffeeBean
            className="text-6xl text-accent hover:scale-110 transition-all duration-300 ease-in-out"
            aria-label="coffee bean icon"
          />
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h1 className="text-lg lg:text-xl font-[600] uppercase">Προϊοντα Καφεκοπτείου</h1>
            <h2 className="text-lg lg:text-xl text-left font-serif tracking-wider font-[400]">
              Επιλέξτε την ποικιλία καφέ που σας αρέσει
            </h2>
          </div>
          <FaAccessibleIcon
            className="text-6xl text-accent hover:scale-110 transition-all duration-300 ease-in-out"
            aria-label="accessibility icon"
          />
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h1 className="text-lg lg:text-xl font-[600] uppercase">Προσβασιμοτητα</h1>
            <h2 className="text-lg lg:text-xl text-left font-serif tracking-wider font-[400]">
              Το κατάστημά μας είναι προσβάσιμο σε άτομα με ειδικές ανάγκες
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
