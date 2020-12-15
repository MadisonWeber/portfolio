import React from 'react'

const AdriftCard = () => {
    return (
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
    )
}

export default AdriftCard
