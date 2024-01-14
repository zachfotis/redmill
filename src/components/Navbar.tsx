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
    <nav
      className="absolute top-0 left-0 w-full z-30 text-grayLight bg-black bg-opacity-50 flex flex-col md:flex-row justify-between items-center gap-2 px-10 py-2 lg:py-5 overflow-hidden">
      <div className="text-2xl lg:text-4xl font-[700] tracking-wider uppercase">
        <h1><span className="text-brownLight">The</span>RedMill</h1>
      </div>
      <div className="text-sm lg:text-base text-grayLight uppercase font-[400] md:tracking-wider whitespace-nowrap">
        <ul className="flex flex-wrap justify-center">
          <li className={ liClasses } onClick={ (e) => handleClick(e, 'services') }>Οι παροχες μας</li>
          {/*<li className={ liClasses } onClick={ (e) => handleClick(e, 'shop') }>Το καταστημα μας</li>*/ }
          <li className={ liClasses } onClick={ (e) => handleClick(e, 'process') }>Η διαδικασια</li>
          <li className={ liClasses } onClick={ (e) => handleClick(e, 'menu') }>Τιμοκαταλογος</li>
          <li className={ liClasses } onClick={ (e) => handleClick(e, 'contact') }>Επικοινωνια</li>
        </ul>
      </div>
      <div className="w-full absolute bottom-0 left-0 z-10 h-1 bg-accent" />

    </nav>
  );
}

export default Navbar;
