import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Shop from '@/components/Shop';

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1">
      <Navbar />
      <Hero />
      <Services />
      <Shop />
    </main>
  );
}
