import { InfiniteMovingCards } from "@/components/features/infinite-moving-cards";
import Hero from "@/components/global/hero";
import Navbar from "@/components/global/navbar";
import { clients, products } from "@/lib/constant";
import { HeroParallax } from "@/components/features/connect-parallax";
import Pricing from "@/components/global/pricing";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InfiniteMovingCards
        className="md:mt-[5rem] mt-[-80px] mx-auto"
        items={clients}
        direction="right"
        speed="slow"
      />
      <HeroParallax products={products}></HeroParallax>
      <Pricing />
    </main>
  );
}
