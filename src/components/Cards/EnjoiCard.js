import React from "react";
// done
const EnjoiCard = () => {
  return (
    <div className="portfolio-card">
      <img
        className="portfolio-card-image"
        src={require("../../photos/enjoi-pic.jpg")}
        alt=""
      />
      <div className="portfolio-info">
        <h3 className="project-name">Enjoi Website</h3>
        <h5 className="project-type">Front-End Development</h5>
        <div className="project-tags">
          <div className="project-tags-icon">
            <i className="fas fa-tags"></i>
          </div>
          <div className="project-tags-tags">
            <div className="tag">HTML</div>
            <div className="tag">CSS</div>
            <div className="tag">Javascript</div>
          </div>
        </div>
      </div>
      <div className="portfolio-link-div">
        <button className="website-link">
          <a
            href="https://enjoi-clone.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go To Project
          </a>
        </button>
        <button className="github-link">
          <a
            href="https://github.com/MadisonWeber/enjoi_skateboarding"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </button>
      </div>
      <p className="portfolio-description">
        Using HTML, CSS and Javascript, this is a mock website for a popular
        skateboarding company. It includes a shopping cart and a slideshow.
      </p>
    </div>
  );
};

export default EnjoiCard;
