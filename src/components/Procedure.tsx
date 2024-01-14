import Image from 'next/image';

function Procedure() {
  return (
    <section id="process" className="w-full max-w-[1600px] h-full flex flex-col justify-start items-center gap-5 mx-auto my-10 lg:my-20 px-5 lg:px-10">
      <p className="text-lg lg:text-xl text-brownLight font-serif italic tracking-wider font-[500]">Η διαδικασία</p>
      <h1 className="text-2xl lg:text-4xl text-center font-[600] uppercase">Δημιουργηστε τον δικο σας καφε</h1>
      <p className="text-base lg:text-lg text-brownLight font-serif italic tracking-wider font-[500] -mt-3">όπως εσείς τον θέλετε!</p>
      <div className="w-full max-w-[150px] h-[2px] mt-2 bg-brownLight opacity-50" />
      <div className="w-full mt-5 lg:mt-14 flex flex-col lg:flex-row justify-between items-stretch gap-10">
        <div className="flex-1 flex flex-col justify-start items-center gap-2 lg:gap-5">
          <Image src="/images/procedure1.jpeg" alt="choose coffee" width={ 300 } height={ 300 }
            className="h-[350px] w-full object-cover rounded-md shadow-md" />
          <div className="w-full flex justify-start items-center gap-5">
            <h1 className="text-3xl lg:text-5xl font-[600] font-serif italic text-brownLight">01</h1>
            <p className="text-lg lg:text-xl text-center lg:text-left font-serif tracking-wider font-[700]">Επιλογή καφέ</p>
          </div>
          <p className="w-full text-base lg:text-lg font-serif tracking-wider font-[400]">Επιλέξτε και αναμείξτε τις ποικιλίες καφέ που σας αρέσουν περισσότερο. Κάθε ποικιλία έχει
            τη δική της
            γεύση και άρωμα.</p>
        </div>
        <div className="flex-1 flex flex-col justify-start items-center gap-2 lg:gap-5">
          <Image src="/images/procedure2.jpg" alt="choose coffee" width={ 300 } height={ 300 }
            className="h-[350px] w-full object-cover rounded-md shadow-md" />
          <div className="w-full flex justify-start items-center gap-5">
            <h1 className="text-3xl lg:text-5xl font-[600] font-serif italic text-brownLight">02</h1>
            <p className="text-lg lg:text-xl text-center lg:text-left font-serif tracking-wider font-[700]">Καβούρδισμα</p>
          </div>
          <p className="w-full text-base lg:text-lg font-serif tracking-wider font-[400]">Οι κόκκοι του καφέ ψήνονται για να αναπτύξουν τη γεύση τους. Τα επίπεδα καβουρδίσματος
            μπορούν να
            κυμαίνονται από ανοιχτό έως σκούρο, με κάθε ένα να προσδίδει διαφορετική γεύση.</p>
        </div>
        <div className="flex-1 flex flex-col justify-start items-center gap-2 lg:gap-5">
          <Image src="/images/procedure3.webp" alt="choose coffee" width={ 300 } height={ 300 }
            className="h-[350px] w-full object-cover rounded-md shadow-md" />
          <div className="w-full flex justify-start items-center gap-5">
            <h1 className="text-3xl lg:text-5xl font-[600] font-serif italic text-brownLight">03</h1>
            <p className="text-lg lg:text-xl text-center lg:text-left font-serif tracking-wider font-[700]">Άλεση (προαιρετικά)</p>
          </div>
          <p className="w-full text-base lg:text-lg font-serif tracking-wider font-[400]">Η διαδικασία άλεσης πραγματοποιείται ακριβώς πριν την συσκευασία του καφέ για να
            διατηρηθεί το άρωμα
            και η γεύση του. </p>
        </div>
        <div className="flex-1 flex flex-col justify-start items-center gap-2 lg:gap-5">
          <Image src="/images/procedure4.jpg" alt="choose coffee" width={ 300 } height={ 300 }
            className="h-[350px] w-full object-cover rounded-md shadow-md" />
          <div className="w-full flex justify-start items-center gap-5">
            <h1 className="text-3xl lg:text-5xl font-[600] font-serif italic text-brownLight">04</h1>
            <p className="text-lg lg:text-xl text-center lg:text-left font-serif tracking-wider font-[700]">Απολαύστε τον καφέ σας</p>
          </div>
          <p className="w-full text-base lg:text-lg font-serif tracking-wider font-[400]">
            Ο καφές είναι έτοιμος! Απολαύστε τον στο κατάστημα μας ή παραλάβετε τον για take away.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Procedure;
