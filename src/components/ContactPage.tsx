import React from 'react';
import en from '../locales/en.json';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{en.contact_page.get_in_touch}</h1>
      <p className="text-lg text-gray-700 mb-4 text-center">
        {en.contact_page.intro_text}
      </p>
      <p className="text-xl font-semibold text-blue-600 mb-6">
        {en.contact_page.email_label} <a href="mailto:fake.email@example.com" className="underline">fake.email@example.com</a>
      </p>
      <p className="text-lg text-gray-700 mb-8 text-center">
        {en.contact_page.resume_intro}
      </p>
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          alert(en.contact_page.resume_alert);
        }}
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        {en.contact_page.view_resume}
      </a>
    </div>
  );
};

export default ContactPage;
