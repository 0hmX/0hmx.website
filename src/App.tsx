import React from 'react';
import Navigation from './components/Navigation';
import AnimatedOutlet from './components/AnimatedOutlet';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <AnimatedOutlet />
    </div>
  );
}

export default App;
