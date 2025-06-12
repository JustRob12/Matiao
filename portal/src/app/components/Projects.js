import Image from 'next/image';
import React from 'react';

const projects = [
  {
    title: 'Youth Leadership Training',
    description: 'Empowering young leaders through workshops and seminars.',
    image: '/matiao.png',
    date: 'June 2025',
  },
  {
    title: 'Community Clean-Up',
    description: 'Organizing barangay-wide clean-up drives for a greener Matiao.',
    image: '/matiao.png',
    date: 'May 2025',
  },
  {
    title: 'Sports Fest',
    description: 'Annual sports event to promote teamwork and healthy living.',
    image: '/matiao.png',
    date: 'April 2025',
  },
];

const Projects = () => (
  <div className="projects-section">
    <h2 className="projects-title">Projects</h2>
    <div className="projects-grid">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <div className="project-image-wrapper">
            <Image src={project.image} alt={project.title} width={200} height={200} className="project-image" />
          </div>
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-desc">{project.description}</p>
          <div className="project-card-date">{project.date}</div>
          <button className="project-see-more">See More</button>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
