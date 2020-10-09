import React from 'react'

const Portfolio = () => {


  
     


    return (
        <div className = 'portfolio-container'>
            <div className="portfolio-card-holder">
                <h1>My Recent Work</h1>
                <div className="portfolio-card">
                    <img className = 'portfolio-card-image' src={require("../photos/pokemon-pic.png")} alt=""/>
                    <div className="portfolio-info">
                        <h3 className="project-name">Pokemon App</h3>
                        <h5 className = "project-type">Front-End Development</h5>
                    </div>
                    <div className="portfolio-link-div">
                        <button className="website-link"><a href="https://madisons-pokemon-app.netlify.app/" target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                        <button className="github-link"><a href="https://github.com/MadisonWeber/Pokemon-Comparison-App" target="_blank" rel="noopener noreferrer">Github</a></button>
                    </div>
                    <p className="portfolio-description">Fetching data from the popular PokeApi, i used React to create an App that shows Pokemon attributes, and compare Pokemon stats.</p>
                </div>
                <div className="portfolio-card">
                    <img className = 'portfolio-card-image' src={require("../photos/enjoi-pic.png")} alt=""/>
                    <div className="portfolio-info">
                        <h3 className="project-name">Enjoi Website</h3>
                        <h5 className = "project-type">Front-End Development</h5>
                    </div>
                    <div className="portfolio-link-div">
                        <button className="website-link"><a href="https://enjoi-clone.netlify.app/"  target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                        <button className="github-link"><a href="https://github.com/MadisonWeber/enjoi_skateboarding"  target="_blank" rel="noopener noreferrer">Github</a></button>
                    </div>
                    <p className="portfolio-description">Using HTML, CSS and Javascript, this is a mock website for a popular skateboarding company. It includes a shopping cart and a slideshow.</p>
                </div>
                <div className="portfolio-card">
                    <img className = 'portfolio-card-image' src={require("../photos/movie-pic2.png")} alt=""/>
                    <div className="portfolio-info">
                        <h3 className="project-name">Movie App</h3>
                        <h5 className = "project-type">Front-End Development</h5>
                    </div>
                    <div className="portfolio-link-div">
                        <button className="website-link"><a href="https://choose-your-movie.netlify.app/"  target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                        <button className="github-link"><a href="https://github.com/MadisonWeber/movie-app" target="_blank" rel="noopener noreferrer">Github</a></button>
                    </div>
                    <p className="portfolio-description">Using HTML, CSS and Javascript, this app allows users to choose between movies and book their seats. It uses local storage to save and update which seats have already been chosen.</p>
                </div>
                <div className="portfolio-card">
                    <img className = 'portfolio-card-image' src={require("../photos/adrift-pic.png")} alt=""/>
                    <div className="portfolio-info">
                        <h3 className="project-name">Adrift Website</h3>
                        <h5 className = "project-type">Front-End Development</h5>
                    </div>
                    <div className="portfolio-link-div">
                        <button className="website-link"><a href="https://adrift-clone.netlify.app/"  target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                        <button className="github-link"><a href="https://github.com/MadisonWeber/adrift-clone"  target="_blank" rel="noopener noreferrer">Github</a></button>
                    </div>
                    <p className="portfolio-description">This was the first website i ever made. Using HTML CSS and Javascript, i cloned Adrift Skateboardings landing page.</p>
                </div>
                <div className="portfolio-card">
                    <img className = 'portfolio-card-image' src={require("../photos/data-science1.png")} alt=""/>
                    <div className="portfolio-info">
                        <h3 className="project-name">Predicting Housing Prices</h3>
                        <h5 className = "project-type">Data Science</h5>
                    </div>
                    <div className="portfolio-link-div">
                        <button className="website-link" ><a href="https://www.kaggle.com/madison88/top-5-house-price-pred-xgboost-neuralnet-glmnet" target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                        
                    </div>
                    <p className="portfolio-description">This is a notebook i wrote in R-Markdown, showing the data-wrangling and modelling performed for my submission in the Kaggle competition "House Prices: Advanced Regression Techniques ". At the time, it was in the top 5% of all entries</p>
                </div>
                <div className="portfolio-card">
                    <img className = 'portfolio-card-image' src={require("../photos/data-science2.png")} alt=""/>
                    <div className="portfolio-info">
                        <h3 className="project-name">Modelling NHL Expected Goals</h3>
                        <h5 className = "project-type">Data Science</h5>
                    </div>
                    <div className="portfolio-link-div">
                        <button className="website-link"><a href="https://www.kaggle.com/madison88/nhl-expected-goals-model-and-heat-maps"  target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                        
                    </div>
                    <p className="portfolio-description">This is a notebook i wrote in R-Markdown, it analyzes NHL play-by-play data, visualizes trends, and uses multiple modelling techniques to calculate the probability of any shot in the NHL turning into a goal. </p>
                </div>
                <div className="portfolio-card">
                    <img className = 'portfolio-card-image' src={require("../photos/data-science3.png")} alt=""/>
                    <div className="portfolio-info">
                        <h3 className="project-name">Text Analysis of a Wine Quality Dataset</h3>
                        <h5 className = "project-type">Data Science</h5>
                    </div>
                    <div className="portfolio-link-div">
                        <button className="website-link"><a href="https://www.kaggle.com/madison88/exploring-wines-with-tf-idf"  target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                        {/* <a href="https://github.com/MadisonWeber/adrift-clone" className="github-link">Github</a> */}
                    </div>
                    <p className="portfolio-description">This is a notebook i wrote in R-Markdown, i analyze and visualize trends in wine, and use text mining techniques to gain insight into how people talk about different wines.</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
