'use client';
import { SyntheticEvent } from 'react';

function Navbar() {
  const liClasses = 'px-5 py-2 cursor-pointer hover:text-white hover:bg-brown hover:bg-opacity-50 transition-all duration-300 ease-in-out rounded-md';

  const handleClick = (event: SyntheticEvent, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="absolute top-0 left-0 w-full h-20 z-10 text-grayLight flex justify-between items-center px-10">
      <div className="text-3xl font-[700] tracking-wider uppercase">
        <h1><span className="text-brownLight">The</span>RedMill</h1>
      </div>
      <nav className="text-lg font-[400] tracking-wider font-serif italic">
        <ul className="flex">
          <li className={ liClasses } onClick={ (e) => handleClick(e, 'home') }>Αρχική</li>
          <li className={ liClasses } onClick={ (e) => handleClick(e, 'services') }>Οι Παροχές μας</li>
          <li className={ liClasses } onClick={ (e) => handleClick(e, 'shop') }>Το κατάστημα μας</li>
          <li className={ liClasses } onClick={ (e) => handleClick(e, 'process') }>Η διαδικασία</li>
          <li className={ liClasses } onClick={ (e) => handleClick(e, 'priceList') }>Τιμοκατάλογος</li>
          <li className={ liClasses } onClick={ (e) => handleClick(e, 'contact') }>Επικοινωνία</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
