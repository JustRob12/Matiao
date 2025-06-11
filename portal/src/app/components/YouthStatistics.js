"use client"; // Required for animations and interactivity

import React from 'react';
import CountUp from './CountUp'; // Import the animation component

const YouthStatistics = () => {
  const currentYear = new Date().getFullYear();
  const purokData = [
    { name: 'Pagasa', count: 120 },
    { name: 'Pagasa 2', count: 95 },
    { name: 'Mangga', count: 110 },
    // Add more puroks here if needed
  ];

  const totalYouth = purokData.reduce((sum, purok) => sum + purok.count, 0);

  return (
    <div className="youth-statistics-section">
      <h2 className="statistics-main-title">
        YOUTH STATISTICS <span className="stats-year">(as of {currentYear})</span>
      </h2>
      <div className="purok-stats-grid">
        {purokData.map((purok) => (
          <div key={purok.name} className="purok-stat-item">
            <div className="purok-stat-count">
              <CountUp end={purok.count} />
            </div>
            <div className="purok-stat-name">{purok.name}</div>
          </div>
        ))}
      </div>
      <div className="total-youth-population">
        <div className="total-youth-count">
          <CountUp end={totalYouth} />
        </div>
        <div className="total-youth-label">Total Population of Youth</div>
      </div>
    </div>
  );
};

export default YouthStatistics;
