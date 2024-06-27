import { useTranslations } from 'next-intl';
import React from 'react';

import { ContainerScroll } from '../features/container-scroll-animation';
import { Button } from '../ui/button';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative flex  h-screen w-full  flex-col items-center !overflow-visible rounded-md bg-neutral-950  antialiased">
      <div className="absolute inset-0  size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]" />
      <div className="mt-[-100px] flex flex-col md:mt-[-50px]">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center">
              <Button
                size="lg"
                className="group mb-8 flex w-full items-center justify-center gap-4 rounded-full border-t-2 border-[#4D4D4D] bg-[#1F1F1F] p-8 text-2xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-neutral-500 sm:w-fit md:mb-0"
              >
                <span className="bg-gradient-to-r from-neutral-500 to-neutral-600 bg-clip-text font-sans  text-transparent group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black md:text-center">
                  {t('button')}
                </span>
              </Button>
              <h1 className="bg-gradient-to-b from-white  to-neutral-600 bg-clip-text font-sans text-5xl font-bold text-transparent md:text-8xl">
                {t('title')}
              </h1>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default Hero;
