'use client';

import Image from 'next/image';
import Map from '@/components/Map';
import { ImFacebook2 } from 'react-icons/im';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-black bg-opacity-90 flex flex-col items-center justify-start gap-10 lg:gap-20 lg:p-20 pb-40 lg:pb-32">

      <section className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center flex-wrap gap-5 lg:gap-20">
        <section className="w-full lg:w-auto flex flex-col justify-start items-start gap-1 p-5">
          <h1 className="w-full text-center text-xl lg:text-2xl font-[500] tracking-wider uppercase text-grayLight px-5">Ωραριο Λειτουργιας</h1>
          <div className="w-full h-[2px] bg-accent opacity-50" />
          <div className="w-full grid grid-cols-[auto_1fr] gap-5 mt-5">
            <div className="flex flex-col justify-start text-base items-start lg:text-lg gap-3">
              <h1 className="font-[400] text-grayLight">Δευτέρα</h1>
              <h1 className="font-[400] text-grayLight">Τρίτη</h1>
              <h1 className="font-[400] text-grayLight">Τετάρτη</h1>
              <h1 className="font-[400] text-grayLight">Πέμπτη</h1>
              <h1 className="font-[400] text-grayLight">Παρασκευή</h1>
              <h1 className="font-[400] text-grayLight">Σάββατο</h1>
              <h1 className="font-[400] text-grayLight">Κυριακή</h1>
            </div>
            <div className="flex flex-col justify-start items-end text-base lg:text-lg gap-3">
              <h1 className="font-[400] text-accent">07:00 π.μ. - 03:00 μ.μ.</h1>
              <h1 className="font-[400] text-accent">07:00 π.μ. - 03:00 μ.μ.</h1>
              <h1 className="font-[400] text-accent">07:00 π.μ. - 03:00 μ.μ.</h1>
              <h1 className="font-[400] text-accent">07:00 π.μ. - 03:00 μ.μ.</h1>
              <h1 className="font-[400] text-accent">07:00 π.μ. - 03:00 μ.μ.</h1>
              <h1 className="font-[400] text-accent">07:00 π.μ. - 03:00 μ.μ.</h1>
              <h1 className="font-[400] text-accent">08:00 π.μ. - 03:00 μ.μ.</h1>
            </div>
          </div>
        </section>
        <section className="w-full lg:w-auto flex flex-col justify-start items-start gap-1 p-5">
          <h1 className="w-full text-center text-xl lg:text-2xl font-[500] tracking-wider uppercase text-grayLight px-5">Επικοινωνια</h1>
          <div className="w-full h-[2px] bg-accent opacity-50" />
          <div className="w-full grid grid-cols-[auto_1fr] gap-10 mt-5">
            <div className="flex flex-col justify-start items-start gap-3 text-base lg:text-lg">
              <h1 className="font-[400] text-grayLight">Διεύθυνση</h1>
              <h1 className="font-[400] text-grayLight">Τηλέφωνο</h1>
              <h1 className="font-[400] text-grayLight">Email</h1>
              <h1 className="font-[400] text-grayLight">Facebook</h1>
            </div>
            <div className="flex flex-col justify-start items-start gap-3 text-base lg:text-lg">
              <h1 className="font-[400] text-accent">Νίκης 62, Νέα Πέραμος</h1>
              <h1 className="font-[400] text-accent">+30 2594 023259</h1>
              <Link href="mailto:kokkinosmylos@yahoo.com" className="font-[400] text-accent">kokkinosmylos@yahoo.com</Link>
              <Link href="https://www.facebook.com/KokkinosMylos.KafekopteioKafe" target="_blank" rel="noopener noreferrer">
                <ImFacebook2 className="text-2xl text-blue-400 hover:text-blue-500 transition-all duration-300 ease-in-out" />
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full lg:w-auto flex flex-col justify-start items-start gap-1 p-5">
          <h1 className="w-full text-center text-xl lg:text-2xl font-[500] tracking-wider uppercase text-grayLight px-5">Τοποθεσια</h1>
          <div className="w-full h-[2px] bg-accent opacity-50" />
          <div className="w-[350px] max-w-full h-[300px] mt-5 rounded-md overflow-hidden">
            <Map />
          </div>
        </section>
      </section>

      <section className="w-full flex flex-col justify-center items-center gap-2">
        <Image src="/images/logo.png" alt="logo" className="spring-image rotate-[8deg]" width={ 120 } height={ 120 } />
        <h1 className="text-base lg:text-lg font-[400] text-grayLight">© { currentYear } The Red Mill. All rights reserved.</h1>
      </section>

    </footer>
  );
}
