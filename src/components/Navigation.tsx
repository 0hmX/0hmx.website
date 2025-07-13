import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import en from '../locales/en.json';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: en.navigation.about_me, path: '/' },
    { label: en.navigation.blogs, path: '/blogs' },
    { label: en.navigation.contact, path: '/contact' }
  ];

  return (
    <nav className="w-full py-6 px-8">
      <div className="max-w-7xl mx-auto">
        <ul className="flex justify-center space-x-12">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  location.pathname === item.path 
                    ? 'text-gray-900 border-b border-gray-900 pb-1' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;