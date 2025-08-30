import React from "react";

const HousePricesCard = () => {
  return (
    <div className="portfolio-card">
      <img
        className="portfolio-card-image"
        src={require("../../photos/data-science1.png")}
        alt=""
      />
      <div className="portfolio-info">
        <h3 className="project-name">Predicting Housing Prices</h3>
        <h5 className="project-type">Data Science</h5>
        <div className="project-tags">
          <div className="project-tags-icon">
            <i className="fas fa-tags"></i>
          </div>
          <div className="project-tags-tags">
            <div className="tag">Data Science</div>
            <div className="tag">R Programming</div>
            <div className="tag">Deep Learning</div>
            <div className="tag">Data-Viz</div>
            <div className="tag">Data-Wrangling</div>
            <div className="tag">XgBoost</div>
            <div className="tag">GLMNET</div>
          </div>
        </div>
      </div>
      <div className="portfolio-link-div">
        <button className="website-link">
          <a
            href="https://www.kaggle.com/madison88/top-5-house-price-pred-xgboost-neuralnet-glmnet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go To Project
          </a>
        </button>
      </div>
      <p className="portfolio-description">
        This is a notebook i wrote in R-Markdown, showing the data-wrangling and
        modelling performed for my submission in the Kaggle competition "House
        Prices: Advanced Regression Techniques ". At the time, it was in the top
        5% of all entries.
      </p>
    </div>
  );
};

export default HousePricesCard;
