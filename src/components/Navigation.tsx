import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Home, BookOpen, Mail } from 'lucide-react';
import en from '../locales/en.json';

interface NavItem {
  label: string;
  path: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: en.navigation.about_me, path: '/', icon: Home },
  { label: en.navigation.blogs, path: '/blogs', icon: BookOpen },
  { label: en.navigation.contact, path: '/contact', icon: Mail },
];

const DesktopNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="w-full py-6 px-8 bg-gray-50">
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

const MobileNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-fit max-w-[90%] bg-blue-500/20 backdrop-blur-md rounded-full shadow-xl p-3 z-50 md:hidden">
      <ul className="flex justify-around items-center gap-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`flex flex-col items-center text-xs font-medium p-2 rounded-lg 
                ${
                  (
                    item.path === '/blogs'
                      ? location.pathname.startsWith(item.path)
                      : location.pathname === item.path
                  )
                    ? 'text-white scale-110'
                    : 'text-gray-600 hover:text-white'
                }`}
            >
              <item.icon className="w-6 h-6 mb-1" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Navigation: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Tailwind's 'md' breakpoint is 768px

  return (
    <>
      {!isMobile && <DesktopNavigation />}
      {isMobile && <MobileNavigation />}
    </>
  );
};

export default Navigation;
