import React from 'react'

const Portfolio = () => {


  
     


    return (
        <div className = 'portfolio-container'>
            <div className="portfolio-card-holder">
                <h1>My Recent Work</h1>
                <div className="portfolio-card">
                    <img className = 'portfolio-card-image' src={require("../photos/pizzaria1.jpg")} alt=""/>
                    <div className="portfolio-info">
                        <h3 className="project-name">Jimmy's Pizzaria</h3>
                        <h5 className = "project-type">Front-End Development</h5>
                        <div className="project-tags">
                            <div className="project-tags-icon">
                                <i className = 'fas fa-tags'></i>
                            </div>
                            <div className="project-tags-tags">
                                <div className="tag">HTML</div>
                                <div className="tag">CSS</div>
                                <div className="tag">Firebase</div>
                                <div className="tag">React</div>
                                <div className="tag">GSAP</div>
                                <div className="tag">Axios</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-link-div">
                        <button className="website-link"><a href="https://jimmys-pizzaria.netlify.app" target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                        <button className="github-link"><a href="https://github.com/MadisonWeber/jimmys-pizzaria" target="_blank" rel="noopener noreferrer">Github</a></button>
                    </div>
                    <p className="portfolio-description">Mock Pizza Website developed with the React framework. Animations done with GSAP ScrollTrigger. Back-End and Authentication powered by firebase. Store's users previous orders and has a working menu. Updates to the menu on the back-end trigger a real-time update on the client. Uses Reacts context-api for state-management. Also has a secondary floating navigation to help traverse the history section.</p>
                </div>
                <div className="portfolio-card">
                    <img className = 'portfolio-card-image' src={require("../photos/pokemon-pic.png")} alt=""/>
                    <div className="portfolio-info">
                        <h3 className="project-name">Pokemon App</h3>
                        <h5 className = "project-type">Front-End Development</h5>
                        <div className="project-tags">
                            <div className="project-tags-icon">
                                <i className = 'fas fa-tags'></i>
                            </div>
                            <div className="project-tags-tags">
                                <div className="tag">HTML</div>
                                <div className="tag">CSS</div>
                                <div className="tag">React</div>
                                <div className="tag">Axios</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-link-div">
                        <button className="website-link"><a href="https://madisons-pokemon-app.netlify.app/" target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                        <button className="github-link"><a href="https://github.com/MadisonWeber/Pokemon-Comparison-App" target="_blank" rel="noopener noreferrer">Github</a></button>
                    </div>
                    <p className="portfolio-description">Fetching data from the popular PokeApi, i used React to create an App that shows Pokemon attributes, and compare Pokemon stats.</p>
                </div>
                <div className="portfolio-card">
                    <img className = 'portfolio-card-image' src={require("../photos/enjoi-pic.jpg")} alt=""/>
                    <div className="portfolio-info">
                        <h3 className="project-name">Enjoi Website</h3>
                        <h5 className = "project-type">Front-End Development</h5>
                        <div className="project-tags">
                            <div className="project-tags-icon">
                                <i className = 'fas fa-tags'></i>
                            </div>
                            <div className="project-tags-tags">
                                <div className="tag">HTML</div>
                                <div className="tag">CSS</div>
                                <div className="tag">Javascript</div>
                            </div>
                        </div>
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
                        <div className="project-tags">
                            <div className="project-tags-icon">
                                <i className = 'fas fa-tags'></i>
                            </div>
                            <div className="project-tags-tags">
                                <div className="tag">HTML</div>
                                <div className="tag">CSS</div>
                                <div className="tag">Javascript</div>
                                <div className="tag">Local Storeage</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-link-div">
                        <button className="website-link"><a href="https://choose-your-movie.netlify.app/"  target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                        <button className="github-link"><a href="https://github.com/MadisonWeber/movie-app" target="_blank" rel="noopener noreferrer">Github</a></button>
                    </div>
                    <p className="portfolio-description">Using HTML, CSS and Javascript, this app allows users to choose between movies and book their seats. It uses local storage to save and update which seats have already been chosen.</p>
                </div>
                <div className="portfolio-card">
                    <img className = 'portfolio-card-image' src={require("../photos/adrift-pic.jpg")} alt=""/>
                    <div className="portfolio-info">
                        <h3 className="project-name">Adrift Website</h3>
                        <h5 className = "project-type">Front-End Development</h5>
                        <div className="project-tags">
                            <div className="project-tags-icon">
                                <i className = 'fas fa-tags'></i>
                            </div>
                            <div className="project-tags-tags">
                                <div className="tag">HTML</div>
                                <div className="tag">CSS</div>
                                <div className="tag">Javascript</div>
                            </div>
                        </div>
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
                        <div className="project-tags">
                            <div className="project-tags-icon">
                                <i className = 'fas fa-tags'></i>
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
                        <button className="website-link" ><a href="https://www.kaggle.com/madison88/top-5-house-price-pred-xgboost-neuralnet-glmnet" target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                        
                    </div>
                    <p className="portfolio-description">This is a notebook i wrote in R-Markdown, showing the data-wrangling and modelling performed for my submission in the Kaggle competition "House Prices: Advanced Regression Techniques ". At the time, it was in the top 5% of all entries.</p>
                </div>
                <div className="portfolio-card">
                    <img className = 'portfolio-card-image' src={require("../photos/data-science2.png")} alt=""/>
                    <div className="portfolio-info">
                        <h3 className="project-name">Modelling NHL Expected Goals</h3>
                        <h5 className = "project-type">Data Science</h5>
                        <div className="project-tags">
                            <div className="project-tags-icon">
                                <i className = 'fas fa-tags'></i>
                            </div>
                            <div className="project-tags-tags">
                                <div className="tag">Data Science</div>
                                <div className="tag">R Programming</div>
                                <div className="tag">Data-Viz</div>
                                <div className="tag">XgBoost</div>
                                <div className="tag">Caret</div>
                            </div>
                        </div>
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
                        <div className="project-tags">
                            <div className="project-tags-icon">
                                <i className = 'fas fa-tags'></i>
                            </div>
                            <div className="project-tags-tags">
                                <div className="tag">Data-Science</div>
                                <div className="tag">R-Programming</div>
                                <div className="tag">Text-Mining</div>
                                <div className="tag">Tf-idf</div>
                                <div className="tag">Data-viz</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-link-div">
                        <button className="website-link"><a href="https://www.kaggle.com/madison88/exploring-wines-with-tf-idf"  target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                    </div>
                    <p className="portfolio-description">This is a notebook i wrote in R-Markdown, i analyze and visualize trends in wine, and use text mining techniques to gain insight into how people talk about different wines.</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
