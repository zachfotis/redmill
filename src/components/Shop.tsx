import Image from 'next/image';

function Shop() {
  return (
    <section id="shop" className="relative w-full mt-20 grid grid-cols-[40%_1fr_1fr_1fr] grid-rows-2">
      <Image src="/images/shop-1.jpg" alt="shop 1" width={ 500 } height={ 500 } className="col-start-1 row-start-1 row-span-2 w-full h-full object-cover" />
      <Image src="/images/shop-2.jpg" alt="shop 2" width={ 500 } height={ 500 } className="col-start-2 row-start-1 w-full h-full object-cover" />
      <Image src="/images/shop-3.jpg" alt="shop 3" width={ 500 } height={ 500 } className="col-start-3 row-start-1 w-full h-full object-cover" />
      <Image src="/images/shop-4.jpg" alt="shop 6" width={ 500 } height={ 500 } className="col-start-4 row-start-1 row-span-2 w-full h-full object-cover" />
      <Image src="/images/shop-5.jpg" alt="shop 4" width={ 500 } height={ 500 } className="col-start-2 row-start-2 w-full h-full object-cover" />
      <Image src="/images/shop-6.jpg" alt="shop 5" width={ 500 } height={ 500 } className="col-start-3 row-start-2 w-full h-full object-cover" />
    </section>
  );
}

export default Shop;
