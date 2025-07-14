import React from 'react';
import Navigation from './components/Navigation';
import AnimatedOutlet from './components/AnimatedOutlet';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="invisible md:visible">
      <ThemeToggle />
      </div>
      <AnimatedOutlet />
    </div>
  );
}

export default App;
