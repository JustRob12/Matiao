import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="about-section">
      <div className="about-logo">
        <Image 
          src="/matiao.png" 
          alt="Matiao Youth Logo" 
          width={150} 
          height={150} 
          className="about-logo-image" 
        />
      </div>
      <div className="about-text-content">
        <h3>ABOUT Matiao Youth</h3>
        <p>
          Matiao Youth is a growing community of passionate and empowered young individuals from Barangay Matiao, dedicated to making a positive difference in our barangay and beyond. We aim to unite the youth through various programs, events, and volunteer opportunities that promote leadership, education, health, culture, and environmental awareness. Whether you are a student, out-of-school youth, or a young professional, Matiao Youth welcomes you to be part of a movement that celebrates growth, creativity, and unity.
        </p>
      </div>
    </div>
  );
}
