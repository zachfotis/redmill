'use client';

import Map from '@/components/Map';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ImFacebook2 } from 'react-icons/im';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-black bg-opacity-90 flex flex-col items-center justify-start gap-10 lg:gap-20 lg:p-20 pb-40 lg:pb-32">
      <section className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center flex-wrap gap-5 lg:gap-20">
        <section className="w-full lg:w-auto flex flex-col justify-start items-start gap-1 p-5">
          <h2 className="w-full text-center text-xl lg:text-2xl font-[500] tracking-wider uppercase text-grayLight px-5">Ωραριο Λειτουργιας</h2>
          <div className="w-full h-[2px] bg-accent opacity-50" />
          <div className="w-full grid grid-cols-[auto_1fr] gap-5 mt-5">
            <div className="flex flex-col justify-start text-base items-start lg:text-lg gap-3">
              <p className="font-[400] text-grayLight">Δευτέρα</p>
              <p className="font-[400] text-grayLight">Τρίτη</p>
              <p className="font-[400] text-grayLight">Τετάρτη</p>
              <p className="font-[400] text-grayLight">Πέμπτη</p>
              <p className="font-[400] text-grayLight">Παρασκευή</p>
              <p className="font-[400] text-grayLight">Σάββατο</p>
              <p className="font-[400] text-grayLight">Κυριακή</p>
            </div>
            <div className="flex flex-col justify-start items-end text-base lg:text-lg gap-3">
              <p className="font-[400] text-accent">07:00 π.μ. - 03:00 μ.μ.</p>
              <p className="font-[400] text-accent">07:00 π.μ. - 03:00 μ.μ.</p>
              <p className="font-[400] text-accent">07:00 π.μ. - 03:00 μ.μ.</p>
              <p className="font-[400] text-accent">07:00 π.μ. - 03:00 μ.μ.</p>
              <p className="font-[400] text-accent">07:00 π.μ. - 03:00 μ.μ.</p>
              <p className="font-[400] text-accent">07:00 π.μ. - 03:00 μ.μ.</p>
              <p className="font-[400] text-accent">09:00 π.μ. - 02:00 μ.μ.</p>
            </div>
          </div>
        </section>
        <section className="w-full lg:w-auto flex flex-col justify-start items-start gap-1 p-5">
          <h2 className="w-full text-center text-xl lg:text-2xl font-[500] tracking-wider uppercase text-grayLight px-5">Επικοινωνια</h2>
          <div className="w-full h-[2px] bg-accent opacity-50" />
          <div className="w-full grid grid-cols-[auto_1fr] gap-10 mt-5">
            <div className="flex flex-col justify-start items-start gap-3 text-base lg:text-lg">
              <p className="font-[400] text-grayLight">Διεύθυνση</p>
              <p className="font-[400] text-grayLight">Τηλέφωνο</p>
              <p className="font-[400] text-grayLight">Email</p>
              <p className="font-[400] text-grayLight">Facebook</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-3 text-base lg:text-lg">
              <Link href="https://maps.app.goo.gl/jht4LQ8MG67FzwfW9" className="font-[400] text-accent">
                Νίκης 62, Νέα Πέραμος
              </Link>
              <Link href="tel:00306908922561" className="font-[400] text-accent">
                +30 6908922561
              </Link>
              <Link href="mailto:Kokkinosmylosroasters@gmail.com" className="font-[400] text-accent">
                Kokkinosmylosroasters@gmail.com
              </Link>
              <Link
                href="https://www.facebook.com/KokkinosMylos.KafekopteioKafe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-start items-center gap-2"
              >
                <ImFacebook2 className="text-2xl text-blue-400 hover:text-blue-500 transition-all duration-300 ease-in-out" aria-label="Facebook link" />
                <p className="font-[400] text-accent">Κόκκινος Μύλος</p>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full lg:w-auto flex flex-col justify-start items-start gap-1 p-5">
          <h2 className="w-full text-center text-xl lg:text-2xl font-[500] tracking-wider uppercase text-grayLight px-5">Τοποθεσια</h2>
          <div className="w-full h-[2px] bg-accent opacity-50" />
          <div className="w-[350px] max-w-full h-[300px] mt-5 rounded-md overflow-hidden">
            <Map />
          </div>
        </section>
      </section>

      <section className="w-full flex flex-col justify-center items-center gap-2">
        <Image src="/images/logo.png" alt="Red Mill logo" className="spring-image rotate-[8deg]" width={120} height={120} />
        <p className="text-base lg:text-lg font-[400] text-grayLight">© {currentYear} The Red Mill. All rights reserved.</p>
      </section>
    </footer>
  );
}
