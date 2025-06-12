import React from 'react';
import About from './About';
import MissionVision from './MissionVision';
import YouthStatistics from './YouthStatistics';
import Projects from './Projects';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="about-mission-row">
        <div className="mission-vision-side">
          <MissionVision />
        </div>
        <About />
      </div>
      <hr className="section-separator" />
      <YouthStatistics />
      <hr className="section-separator" />
      <Projects />
    </div>
  );
}
