import React from 'react';

function Portfolio() {
  // Create an array of project objects with titles, images, links, etc.
  const projects = [
    {
      title: 'Project 1',
      githubLink: 'https://github.com/brownKasey/Make-My-Drink',
    },
    {
      title: 'Project 2',
      githubLink: 'https://github.com/fzhao888/Little-Chef',
    },
  ];

  return (
    <section id="portfolio">
      <div className="portfolio-content">
        <h2>Portfolio</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <div className="project-links">
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
