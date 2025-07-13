import React from 'react';
import en from '../locales/en.json';

const CallToAction = () => {
  return (
    <section className="w-full px-8 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{en.call_to_action.title}</h2>
          <p className="text-lg text-gray-700 mb-6">{en.call_to_action.description}</p>
          <button className="group inline-flex items-center text-gray-800 hover:text-gray-600 transition-colors duration-200">
            <span className="text-sm font-medium tracking-wide uppercase border-b border-gray-800 group-hover:border-gray-600 pb-1">
              {en.call_to_action.button_text}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
