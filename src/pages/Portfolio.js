import React from 'react';
import './Portfolio.css';

const projects = [
  {
    title: 'Photo 1',
    description: 'şuanda solo olarak yaptığım oyunumun ana karakter modeli',
    image: '/images/project1.jpg',
    link: '#'
  },
  {
    title: 'Photo 2',
    description: 'oyunum 3d platformer ve korku türünü harmanlıyor',
    image: '/images/project2.jpg',
    link: '#'
  },
  {
    title: 'Photo 3',
    description: 'keşifin ön planda olduğu ama bu keşif anlarının birazda gergin olduğu bir oyun fikri hoşunuza gidiyorsa wishlist atabilirsiniz(steam sayfası daha açılmadı)',
    image: '/images/project3.jpg',
    link: '#'
  }
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <h1>Portfolyo</h1>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                İncele
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
