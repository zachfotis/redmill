import Image from 'next/image';

function Services() {
  return (
    <section id="services" className="relative w-full max-w-[1600px] h-full flex flex-col justify-start items-center gap-5 mx-auto my-20 px-10">
      <p className="text-xl text-brownLight font-serif italic tracking-wider font-[500]">Οι Παροχές μας</p>
      <h1 className="text-4xl font-[600] uppercase">Απολαυστε τον καφε σας</h1>
      <p className="text-lg text-brownLight font-serif italic tracking-wider font-[500] -mt-3">όπως εσείς τον θέλετε!</p>
      <div className="w-full max-w-[150px] h-[2px] mt-2 bg-brownLight opacity-50" />
      <div className="w-full mt-14 grid grid-cols-[1fr_auto_1fr] gap-20">
        <div className="grid grid-cols-[1fr_100px] gap-10">
          <div className="w-full flex flex-col justify-start items-end gap-2">
            <h1 className="text-xl font-[600] uppercase">Take away</h1>
            <p className="text-xl text-right font-serif tracking-wider font-[400]">Παραλάβετε τον καφέ σας απο το κατάστημα μας</p>
          </div>
          <Image src="/images/take-away.png" alt="store" width={ 100 } height={ 100 } className="h-[80px] w-auto" />
          <div className="w-full flex flex-col justify-start items-end gap-2">
            <h1 className="text-xl font-[600] uppercase">Take away</h1>
            <p className="text-xl text-right font-serif tracking-wider font-[400]">Παραλάβετε τον καφέ σας απο το κατάστημα μας</p>
          </div>
          <Image src="/images/take-away.png" alt="store" width={ 100 } height={ 100 } className="h-[80px] w-auto" />
          <div className="w-full flex flex-col justify-start items-end gap-2">
            <h1 className="text-xl font-[600] uppercase">Take away</h1>
            <p className="text-xl text-right font-serif tracking-wider font-[400]">Παραλάβετε τον καφέ σας απο το κατάστημα μας</p>
          </div>
          <Image src="/images/take-away.png" alt="store" width={ 100 } height={ 100 } className="h-[80px] w-auto" />
        </div>
        <div className="w-full relative">
          <Image src="/images/coffee-bag.png" alt="store" width={ 300 } height={ 900 }
            className="hover:scale-105 transition-all duration-300 ease-in-out" />
          <Image src="/images/coffee-cup.png" alt="store" width={ 300 } height={ 900 }
            className="absolute -bottom-10 -right-14 w-1/2 h-auto hover:scale-110 transition-all duration-300 ease-in-out" />
        </div>
        <div className="grid grid-cols-[100px_1fr] gap-10 justify-items-end">
          <Image src="/images/take-away.png" alt="store" width={ 100 } height={ 100 } className="h-[80px] w-auto" />
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h1 className="text-xl font-[600] uppercase">Take away</h1>
            <p className="text-xl text-left font-serif tracking-wider font-[400]">Παραλάβετε τον καφέ σας απο το κατάστημα μας</p>
          </div>
          <Image src="/images/take-away.png" alt="store" width={ 100 } height={ 100 } className="h-[80px] w-auto" />
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h1 className="text-xl font-[600] uppercase">Take away</h1>
            <p className="text-xl text-left font-serif tracking-wider font-[400]">Παραλάβετε τον καφέ σας απο το κατάστημα μας</p>
          </div>
          <Image src="/images/take-away.png" alt="store" width={ 100 } height={ 100 } className="h-[80px] w-auto" />
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h1 className="text-xl font-[600] uppercase">Take away</h1>
            <p className="text-xl text-left font-serif tracking-wider font-[400]">Παραλάβετε τον καφέ σας απο το κατάστημα μας</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
