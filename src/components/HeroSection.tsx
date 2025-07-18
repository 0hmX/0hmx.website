import React from 'react';
import en from '../locales/en.json';

const HeroSection = () => {
  return (
    <section className="w-full px-4 md:px-8 mt-12 mb-8 md:mt-0 md:mb-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[7rem] md:text-[10rem] lg:text-[14rem] whitespace-nowrap text-nowrap font-black text-foreground leading-none tracking-tighter text-center">
          {en.hero_section.title}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
