import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
