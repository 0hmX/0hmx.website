import React from 'react';
import en from '../locales/en.json';

const HeroSection = () => {
  return (
    <section className="w-full px-8 mb-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[12rem] md:text-[16rem] lg:text-[14rem] whitespace-nowrap text-nowrap font-black text-gray-900 leading-none tracking-tighter text-center">
          {en.hero_section.title}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
