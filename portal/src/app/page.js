import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Dashboard />
    </div>
  );
}
