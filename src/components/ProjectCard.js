import React from "react";

const ProjectCard = ({ title, description, link, image }) => {
  console.log("Rendering ProjectCard:", { title, description, link, image });

  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
};

export default ProjectCard;
