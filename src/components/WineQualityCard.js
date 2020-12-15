import React from 'react'

const WineQualityCard = () => {
    return (
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
    )
}

export default WineQualityCard
