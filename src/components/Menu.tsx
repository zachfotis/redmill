'use client';

import MenuItem from '@/components/MenuItem';
import Image from 'next/image';
import { useState } from 'react';

function Menu() {
  const [activeMenu, setActiveMenu] = useState('coffee');

  const drinkMenuItemsCol1 = [
    { itemName: 'Ελληνικός μονός', itemPrice: '1,60' },
    { itemName: 'Ελληνικός διπλός', itemPrice: '2,00' },
    { itemName: 'Espresso Lungo μονό', itemPrice: '1,90' },
    { itemName: 'Espresso Lungo διπλό', itemPrice: '1,90' },
    { itemName: 'Latte', itemPrice: '2,50' },
    { itemName: 'Σοκολάτα', itemPrice: '2,50' },
    { itemName: 'Σοκολάτα Γεύση', itemPrice: '2,50' },
    { itemName: 'Τσάι (Κλασσικό-Γεύση)', itemPrice: '2,00' },
    { itemName: 'Nescafe-frappe', itemPrice: '2,00' },
    { itemName: 'Nescafe-frappe decaf', itemPrice: '2,00' },
  ];

  const drinkMenuItemsCol2 = [
    { itemName: 'Espresso μονό', itemPrice: '1,90' },
    { itemName: 'Espresso διπλό', itemPrice: '1,90' },
    { itemName: 'Cappuccino (Freddo) μονό', itemPrice: '2,20' },
    { itemName: 'Cappuccino (Freddo) διπλό', itemPrice: '2,40' },
    { itemName: 'Americano μονό', itemPrice: '1,90' },
    { itemName: 'Americano διπλό', itemPrice: '1,90' },
    { itemName: 'Φίλτρου κλασσικός', itemPrice: '1,90' },
    { itemName: 'Φίλτρου Γεύση', itemPrice: '2,20' },
    { itemName: 'Φίλτρου decaf', itemPrice: '2,20' },
    { itemName: 'Σαλέπι', itemPrice: '2,40' },
  ];

  const coffeeMenuItemsCol1 = [
    { itemName: 'Ελληνικός Ξανθός', itemPrice: '22,00' },
    { itemName: 'Ελληνικός Σκούρος', itemPrice: '23,00' },
    { itemName: 'Ελληνικός Χωρίς Καφεΐνη', itemPrice: '26,00' },
    { itemName: 'Φίλτρου Κλασσικός', itemPrice: '26,00' },
    { itemName: 'Φίλτρου Φουντούκι', itemPrice: '30,00' },
    { itemName: 'Φίλτρου Βανίλια', itemPrice: '30,00' },
    { itemName: 'Φίλτρου Μπισκότο', itemPrice: '30,00' },
    { itemName: 'Φίλτρου Καραμέλα', itemPrice: '30,00' },
    { itemName: 'Φίλτρου Irish', itemPrice: '30,00' },
    { itemName: 'Φίλτρου Amaretto', itemPrice: '30,00' },
  ];

  const coffeeMenuItemsCol2 = [
    { itemName: 'Espresso Κόκκινος Μύλος', itemPrice: '30,00' },
    { itemName: 'Espresso Βραζιλίας (Brazilian)', itemPrice: '30,00' },
    { itemName: 'Espresso Κολομβίας (Colombian)', itemPrice: '30,00' },
    { itemName: 'Espresso Γουατεμάλας (Guatemala)', itemPrice: '30,00' },
    { itemName: 'Espresso Αιθιοπίας (Ethiopian)', itemPrice: '32,00' },
    { itemName: 'Espresso Domenico', itemPrice: '30,00' },
    { itemName: 'Espresso Arabica', itemPrice: '33,00' },
    { itemName: 'Espresso Robusta', itemPrice: '27,00' },
    { itemName: 'Espresso 80% 20%', itemPrice: '29,00' },
    { itemName: 'Espresso Nicaragua', itemPrice: '32,00' },
    { itemName: 'Espresso Kenya', itemPrice: '34,00' },
  ];
  return (
    <section
      id="menu"
      className="relative w-full h-full flex flex-col justify-start items-center gap-5 mx-auto my-10 lg:my-20 px-5 lg:px-10"
    >
      <Image
        src="/images/beans.png"
        alt="Coffee beans"
        width={300}
        height={900}
        className="absolute w-full h-full top-0 left-0 -z-20 object-cover opacity-5"
      />
      <h2 className="text-lg lg:text-xl text-brownLight font-serif italic tracking-wider font-[500]">Τιμοκατάλογος</h2>
      <h1 className="text-2xl lg:text-4xl text-center font-[600] uppercase">Εξερευνηστε τα προϊοντα μας</h1>
      <div className="w-full max-w-[150px] h-[2px] mt-2 bg-brownLight opacity-50" />
      <div className="w-full mt-10 flex justify-center items-center">
        <button
          onClick={() => setActiveMenu('coffee')}
          aria-pressed={activeMenu === 'coffee'}
          className={`min-w-[170px] border border-brownLight px-5 py-3 font-serif tracking-wider font-[400] text:base lg:text-lg ${
            activeMenu === 'coffee' ? 'text-white bg-brownLight' : 'text-brownLight bg-grayLight border'
          }`}
        >
          Ροφήματα
        </button>
        <button
          onClick={() => setActiveMenu('drinks')}
          aria-pressed={activeMenu === 'drinks'}
          className={`min-w-[170px] border border-brownLight px-5 py-3 font-serif tracking-wider font-[400] text:base lg:text-lg ${
            activeMenu === 'drinks' ? 'text-white bg-brownLight' : 'text-brownLight bg-grayLight border'
          }`}
        >
          Καφεκοπτείο
        </button>
      </div>
      {activeMenu === 'coffee' && (
        <div className="w-full max-w-[1600px] mt-7 grid grid-cols lg:grid-cols-2 gap-x-20 gap-y-7 p-3 lg:p-7">
          <div className="w-full flex flex-col gap-7">
            {drinkMenuItemsCol1.map((item, index) => (
              <MenuItem key={index} itemName={item.itemName} itemPrice={item.itemPrice} />
            ))}
          </div>
          <div className="w-full flex flex-col gap-7">
            {drinkMenuItemsCol2.map((item, index) => (
              <MenuItem key={index} itemName={item.itemName} itemPrice={item.itemPrice} />
            ))}
          </div>
        </div>
      )}
      {activeMenu === 'drinks' && (
        <div className="w-full max-w-[1600px] mt-7 grid grid-cols lg:grid-cols-2 gap-x-20 gap-y-7 p-3 lg:p-7">
          <div className="w-full flex flex-col gap-7">
            {coffeeMenuItemsCol1.map((item, index) => (
              <MenuItem key={index} itemName={item.itemName} itemPrice={item.itemPrice} perKilo />
            ))}
          </div>
          <div className="w-full flex flex-col gap-7">
            {coffeeMenuItemsCol2.map((item, index) => (
              <MenuItem key={index} itemName={item.itemName} itemPrice={item.itemPrice} perKilo />
            ))}
          </div>
        </div>
      )}
      <div className="absolute bottom-0 right-[10%] -z-10 opacity-10">
        {activeMenu === 'coffee' && (
          <Image src="/images/coffee-cup.png" alt="Coffee cup" width={300} height={900} className="object-cover" />
        )}
        {activeMenu === 'drinks' && <Image src="/images/coffee-bag.png" alt="Coffee bag" width={300} height={900} />}
      </div>
    </section>
  );
}

export default Menu;
