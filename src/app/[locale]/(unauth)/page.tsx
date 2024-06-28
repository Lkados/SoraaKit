import { HeroParallax } from '@/components/features/landing/connect-parallax';
import { InfiniteMovingCards } from '@/components/features/landing/infinite-moving-cards';
import { clients, products } from '@/lib/constant';
import { CTA } from '@/templates/CTA';
import { Footer } from '@/templates/Footer';
import Hero from '@/templates/hero';
import Navbar from '@/templates/navbar';
import Pricing from '@/templates/pricing';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InfiniteMovingCards
        className="mx-auto mt-[-80px] md:mt-20"
        items={clients}
        direction="right"
        speed="slow"
      />
      <HeroParallax products={products} />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
