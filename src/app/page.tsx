import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Shop from '@/components/Shop';
import Procedure from '@/components/Procedure';
import BestCoffee from '@/components/BestCoffee';
import Menu from '@/components/Menu';

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1">
      <Navbar />
      <Hero />
      <Services />
      <Shop />
      <Procedure />
      <BestCoffee />
      <Menu />
    </main>
  );
}
