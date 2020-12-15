import React from 'react'

const NhlGoalsCard = () => {
    return (
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
    )
}

export default NhlGoalsCard
