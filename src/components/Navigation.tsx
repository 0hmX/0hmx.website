import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Home, BookOpen, Mail, Palette } from 'lucide-react';
import en from '../locales/en.json';
import ThemeToggle from './ThemeToggle';

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
    <nav className="w-full py-6 px-8 bg-background">
      <div className="max-w-7xl mx-auto relative">
        <ul className="flex justify-center space-x-12">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`text-body-sm font-medium transition-colors duration-200 tracking-wide ${
                  location.pathname === item.path
                    ? 'text-foreground border-b border-foreground pb-1'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute top-1/2 right-0 -translate-y-1/2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

const MobileNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-fit max-w-[90%] bg-secondary/80 backdrop-blur-md rounded-full shadow-xl p-3 z-50 md:hidden">
      <ul className="flex justify-around items-center gap-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`flex flex-col items-center text-body-xs font-medium p-2 rounded-lg 
                ${
                  (
                    item.path === '/blogs'
                      ? location.pathname.startsWith(item.path)
                      : location.pathname === item.path
                  )
                    ? 'text-primary scale-110'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              <item.icon className="w-6 h-6 mb-1" />
            </Link>
          </li>
        ))}
        <li className="ml-auto">
          <ThemeToggle />
        </li>
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
