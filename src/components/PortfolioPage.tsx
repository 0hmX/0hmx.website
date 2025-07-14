import React from 'react';
import en from '../locales/en.json';

interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  layoutType?: string; // Use layoutType for custom CSS classes
}

const PortfolioPage: React.FC = () => {
  const { header_title, header_description, projects } = en.portfolio_page;

  return (
    <section className="w-full px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-display-lg font-black text-foreground leading-none tracking-tighter mb-6">
            {header_title}
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {header_description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className={`bg-secondary rounded-lg p-6 shadow-lg relative pb-12 ${project.layoutType || ''}`}>
              <h2 className="text-heading-2 font-semibold text-foreground mb-2">{project.title}</h2>
              <p className="text-body-base text-muted-foreground mb-4">{project.description}</p>
              <a
                href={project.link}
                className="absolute bottom-6 right-6 text-primary hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
