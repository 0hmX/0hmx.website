import React from 'react';
import en from '../locales/en.json';

const Biography = () => {
  return (
    <section className="w-full px-8 mb-16 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <p className="text-gray-800 leading-relaxed">
              <strong>{en.biography.intro}</strong>
            </p>

            <p className="text-gray-700 leading-relaxed">{en.biography.paragraph1}</p>
          </div>

          {/* Right Column - Quote */}
          <div className="space-y-8">
            <blockquote className="text-gray-700 leading-relaxed italic">
              {en.biography.quote}
            </blockquote>

            <p className="text-gray-700 leading-relaxed">
              <strong>{en.biography.paragraph2}</strong>
            </p>

            {/* Signature */}
            <div className="pt-8">
              <div
                className="text-5xl font-serif italic text-gray-800"
                style={{ fontFamily: 'cursive' }}
              >
                {en.biography.signature}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
