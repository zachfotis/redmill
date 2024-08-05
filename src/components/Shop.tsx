import Image from 'next/image';

export default function Shop() {
  return (
    <section className="w-full mt-20 flex flex-col justify-center items-center">
      <div
        id="shop"
        className="relative w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-6 sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-2 gap-y-5 sm:gap-y-0"
      >
        <div className="w-full absolute top-0 left-0 z-10 h-2 bg-accent" />
        <div className="w-full h-full lg:col-start-1 lg:row-start-1 lg:row-span-2 overflow-hidden border-2 border-grayLight">
          <Image
            src="/images/shop/IMG_2839.jpg"
            alt="Interior view of the shop showing various products on display"
            width={500}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full h-full lg:col-start-2 lg:row-start-1 overflow-hidden border-2 border-grayLight">
          <Image
            src="/images/shop/IMG_2748.jpg"
            alt="Another angle of the shop interior with a focus on the seating area"
            width={500}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full h-full lg:col-start-3 lg:row-start-1 overflow-hidden border-2 border-grayLight">
          <Image
            src="/images/shop/IMG_2944.jpg"
            alt="Close-up view of the coffee brewing equipment in the shop"
            width={500}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full h-full lg:col-start-4 lg:row-start-1 lg:row-span-2 overflow-hidden border-2 border-grayLight">
          <Image
            src="/images/shop/IMG_2925.jpg"
            alt="View of the shop's exterior with its signage"
            width={500}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full h-full lg:col-start-2 lg:row-start-2 overflow-hidden border-2 border-grayLight">
          <Image
            src="/images/shop/IMG_2890.jpg"
            alt="Interior view focusing on the shop's decor and lighting"
            width={500}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full h-full lg:col-start-3 lg:row-start-2 overflow-hidden border-2 border-grayLight">
          <Image
            src="/images/shop/IMG_2789.jpg"
            alt="Close-up view of some products on display in the shop"
            width={500}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full absolute bottom-0 left-0 z-10 h-2 bg-grayLight hidden sm:block" />
      </div>
      <div
        id="shop"
        className="relative w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-6 
        sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-2 gap-y-5 sm:gap-y-0 mt-5 sm:mt-0"
      >
        <div className="w-full h-full lg:col-start-1 lg:row-start-1 overflow-hidden border-2 border-grayLight">
          <Image
            src="/images/shop/IMG_9186.jpg"
            alt="Interior view of the shop showing various products on display"
            width={500}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full h-full lg:col-start-2 lg:row-start-1 lg:row-span-2 overflow-hidden border-2 border-grayLight">
          <Image
            src="/images/shop/IMG_9170.jpg"
            alt="Another angle of the shop interior with a focus on the seating area"
            width={500}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full h-full lg:col-start-3 lg:row-start-1 lg:row-span-2 overflow-hidden border-2 border-grayLight">
          <Image
            src="/images/shop/IMG_2772.jpg"
            alt="Close-up view of the coffee brewing equipment in the shop"
            width={500}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full h-full lg:col-start-4 lg:row-start-1 overflow-hidden border-2 border-grayLight">
          <Image
            src="/images/shop/DJI_1111.jpg"
            alt="View of the shop's exterior with its signage"
            width={500}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full h-full lg:col-start-1 lg:row-start-2 overflow-hidden border-2 border-grayLight">
          <Image
            src="/images/shop/IMG_9160.jpg"
            alt="Interior view focusing on the shop's decor and lighting"
            width={500}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full h-full lg:col-start-4 lg:row-start-2 overflow-hidden border-2 border-grayLight">
          <Image
            src="/images/shop/IMG_2809.jpg"
            alt="Close-up view of some products on display in the shop"
            width={500}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full absolute bottom-0 left-0 z-10 h-2 bg-accent" />
      </div>
    </section>
  );
}
