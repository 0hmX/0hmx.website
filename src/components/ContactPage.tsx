import React from 'react';
import en from '../locales/en.json';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-background p-8 font-mono">
      <h1 className="text-heading-1 font-bold text-foreground mb-6">{en.contact_page.get_in_touch}</h1>
      <p className="text-body-base text-muted-foreground mb-4 text-center">{en.contact_page.intro_text}</p>
      <p className="text-body-lg font-semibold text-foreground mb-6 font-sans">
        <a href={`mailto:${en.contact_page.email_label.split(': ')[1]}`} className="underline">
          {en.contact_page.email_label}
        </a>
      </p>
      <p className="text-body-base text-muted-foreground mb-8 text-center">{en.contact_page.resume_intro}</p>
      <a
        href={en.contact_page.resume_link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg shadow-md hover:bg-primary/90 transition duration-300"
      >
        {en.contact_page.view_resume}
      </a>
    </div>
  );
};

export default ContactPage;
