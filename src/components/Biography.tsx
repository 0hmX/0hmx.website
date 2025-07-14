import React from 'react';
import en from '../locales/en.json';

const Biography = () => {
  return (
    <section className="w-full px-8 mb-16 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          <p className="text-foreground leading-relaxed">{en.biography.paragraph}</p>

          {/* Signature */}
          <div className="pt-8 text-right">
            <div className="text-display-md font-handwritten italic text-foreground">
              {en.biography.signature}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
