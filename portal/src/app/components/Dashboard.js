import React from 'react';
import About from './About';
import MissionVision from './MissionVision';
import YouthStatistics from './YouthStatistics'; // Import the new component

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <About />
      <MissionVision />
      <YouthStatistics /> {/* Add the new component here */}
    </div>
  );
}
