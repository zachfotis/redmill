'use client';
import { SyntheticEvent } from 'react';

function Navbar() {
  const liClasses = 'px-3 py-2 cursor-pointer text-grayLight rounded-md hover:text-white hover:bg-brownLight transition-all duration-300 ease-in-out';

  const handleClick = (event: SyntheticEvent, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <nav className="absolute top-0 left-0 w-full h-20 z-30 text-grayLight flex justify-between items-center px-10">
      <div className="text-4xl font-[700] tracking-wider uppercase">
        <h1><span className="text-brownLight">The</span>RedMill</h1>
      </div>
      <div className="text-lg font-[600] font-serif">
        <ul className="flex">
          <li className={ liClasses } onClick={ (e) => handleClick(e, 'services') }>Οι παροχές μας</li>
          <li className={ liClasses } onClick={ (e) => handleClick(e, 'shop') }>Το κατάστημα μας</li>
          <li className={ liClasses } onClick={ (e) => handleClick(e, 'process') }>Η διαδικασία</li>
          <li className={ liClasses } onClick={ (e) => handleClick(e, 'menu') }>Τιμοκατάλογος</li>
          <li className={ liClasses } onClick={ (e) => handleClick(e, 'contact') }>Επικοινωνία</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
