import React from 'react';
import { Play } from 'lucide-react';
import en from '../locales/en.json';

const HeroImage = () => {
  return (
    <section className="w-full px-8 mb-16">
      <div className="max-w-4xl mx-auto relative">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt={en.hero_image.alt_text}
            className="w-full h-[600px] object-cover"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="group relative">
              <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 group-hover:scale-110">
                <div className="text-white text-xs font-medium text-center leading-tight">
                  <div>{en.hero_image.play_button_text_line1}</div>
                  <div>{en.hero_image.play_button_text_line2}</div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-primary-foreground opacity-50 animate-ping"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
