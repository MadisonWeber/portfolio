import React from "react";

const PortfolioCard = ({ project }) => {
  return (
    <div className="portfolio-card">
      <img className="portfolio-card-image" src={project?.img} alt="" />
      <div className="portfolio-info">
        <h3 className="project-name">{project?.name}</h3>
        <h5 className="project-type">{project.category}</h5>
        <p className="portfolio-description">{project.description}</p>
      </div>
      <div className="portfolio-link-div">
        <button className="website-link">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Go To Project
          </a>
        </button>
        <button className="github-link">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;

// <div className="project-tags">
//   <div className="project-tags-icon">
//     <i className="fas fa-tags"></i>
//   </div>
//   {project?.tags && (
//     <div className="project-tags-tags">
//       {project?.tags?.map((tag) => (
//         <div key={tag} className="tag">
//           {tag}
//         </div>
//       ))}
//     </div>
//   )}
// </div>
