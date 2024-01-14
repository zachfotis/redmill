'use client';

import MenuItem from '@/components/MenuItem';
import { useState } from 'react';
import Image from 'next/image';

function Menu() {
  const [activeMenu, setActiveMenu] = useState('coffee');

  const drinkMenuItems = [
    { itemName: 'Ελληνικός μονός', itemPrice: '1,50' },
    { itemName: 'Espresso μονό', itemPrice: '1,50' },
    { itemName: 'Ελληνικός διπλός', itemPrice: '2,00' },
    { itemName: 'Espresso διπλό', itemPrice: '1,70' },
    { itemName: 'Espresso Lungo μονό', itemPrice: '1,50' },
    { itemName: 'Cappuccino (Freddo) μονό', itemPrice: '1,90' },
    { itemName: 'Espresso Lungo διπλό', itemPrice: '1,70' },
    { itemName: 'Cappuccino (Freddo) διπλό', itemPrice: '2,10' },
    { itemName: 'Latte', itemPrice: '2,20' },
    { itemName: 'Americano μονό', itemPrice: '1,50' },
    { itemName: 'Σοκολάτα', itemPrice: '2,10' },
    { itemName: 'Americano διπλό', itemPrice: '1,70' },
    { itemName: 'Σοκολάτα Γεύση', itemPrice: '2,40' },
    { itemName: 'Φίλτρου κλασσικός', itemPrice: '1,70' },
    { itemName: 'Τσάι (Κλασσικό-Γεύση)', itemPrice: '1,70' },
    { itemName: 'Φίλτρου Γεύση', itemPrice: '2,20' },
    { itemName: 'Nescafe-frappe', itemPrice: '1,70' },
    { itemName: 'Φίλτρου decaf', itemPrice: '2,20' },
    { itemName: 'Σαλέπι', itemPrice: '2,40' },
  ];

  const coffeeMenuItems = [
    { itemName: 'Ελληνικός Ξανθός', itemPrice: '19,00' },
    { itemName: 'Espresso Κόκκινος Μύλος', itemPrice: '25,00' },
    { itemName: 'Ελληνικός Σκούρος', itemPrice: '19,50' },
    { itemName: 'Espresso Βραζιλίας (Brazilian)', itemPrice: '25,00' },
    { itemName: 'Ελληνικός Χωρίς Καφεΐνη', itemPrice: '23,00' },
    { itemName: 'Espresso Κολομβίας (Colombian)', itemPrice: '25,00' },
    { itemName: 'Φίλτρου', itemPrice: '25,00' },
    { itemName: 'Espresso Γουατεμάλας (Guatemala)', itemPrice: '28,00' },
    { itemName: 'Φίλτρου Κλασσικός', itemPrice: '23,00' },
    { itemName: 'Espresso Αιθιοπίας (Ethiopian)', itemPrice: '25,00' },
    { itemName: 'Φίλτρου Φουντούκι', itemPrice: '28,00' },
    { itemName: 'Espresso Domenico', itemPrice: '24,00' },
    { itemName: 'Φίλτρου Βανίλια', itemPrice: '28,00' },
    { itemName: 'Espresso Arabica', itemPrice: '25,00' },
    { itemName: 'Φίλτρου Μπισκότο', itemPrice: '28,00' },
    { itemName: 'Espresso Robusta', itemPrice: '20,00' },
    { itemName: 'Φίλτρου Καραμέλα', itemPrice: '28,00' },
    { itemName: 'Espresso 80% 20%', itemPrice: '23,00' },
    { itemName: 'Φίλτρου Irish', itemPrice: '28,00' },
    { itemName: 'Espresso Nicaragua', itemPrice: '30,00' },
  ];
  return (
    <section id="menu" className="relative w-full h-full flex flex-col justify-start items-center gap-5 mx-auto my-20 px-10">
      <Image src="/images/beans.png" alt="beans" width={ 300 } height={ 900 } className="absolute w-full h-full top-0 left-0 -z-20 opacity-5" />
      <p className="text-xl text-brownLight font-serif italic tracking-wider font-[500]">Τιμοκατάλογος</p>
      <h1 className="text-4xl font-[600] uppercase">Εξερευνηστε τα προϊοντα μας</h1>
      <div className="w-full max-w-[150px] h-[2px] mt-2 bg-brownLight opacity-50" />
      <div className="w-full mt-10 flex justify-center items-center">
        <button onClick={ () => setActiveMenu('coffee') }
          className={ `min-w-[170px] border border-brownLight px-5 py-3 font-serif tracking-wider font-[400] text-lg ${ activeMenu === 'coffee' ? 'text-white bg-brownLight' : 'text-brownLight bg-grayLight border' }` }>
          Ροφήματα
        </button>
        <button onClick={ () => setActiveMenu('drinks') }
          className={ `min-w-[170px] border border-brownLight px-5 py-3 font-serif tracking-wider font-[400] text-lg ${ activeMenu === 'drinks' ? 'text-white bg-brownLight' : 'text-brownLight bg-grayLight border' }` }>
          Καφεκοπτείο
        </button>
      </div>
      <div className="w-full max-w-[1600px] mt-7 grid grid-cols-2 gap-x-20 gap-y-7 p-7">
        { activeMenu === 'coffee' && drinkMenuItems.map((item, index) => <MenuItem key={ index } itemName={ item.itemName } itemPrice={ item.itemPrice } />) }
        { activeMenu === 'drinks' && coffeeMenuItems.map((item, index) => <MenuItem key={ index } itemName={ item.itemName } itemPrice={ item.itemPrice } perKilo />) }
      </div>
      <div className="absolute bottom-0 right-[10%] -z-10 opacity-10">
        { activeMenu === 'coffee' && <Image src="/images/coffee-cup.png" alt="store" width={ 300 } height={ 900 } className="object-cover" /> }
        { activeMenu === 'drinks' && <Image src="/images/coffee-bag.png" alt="store" width={ 300 } height={ 900 } /> }
      </div>
    </section>
  );
}

export default Menu;
