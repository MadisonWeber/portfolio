import React from 'react'

const HuddleCard = () => {
    return (
        <div className="portfolio-card">
            <img className = 'portfolio-card-image' src={require("../../photos/huddle_op.jpg")} alt=""/>
            <div className="portfolio-info">
                <h3 className="project-name">Huddle Landing Page</h3>
                <h5 className = "project-type">Frontend Development</h5>
                <div className="project-tags">
                    <div className="project-tags-icon">
                        <i className = 'fas fa-tags'></i>
                    </div>
                    <div className="project-tags-tags">
                        <div className="tag">HTML</div>
                        <div className="tag">Javascript</div>
                        <div className="tag">Scss</div>
                        <div className="tag">Fully responsive</div>
                    </div>
                </div>
            </div>
            <div className="portfolio-link-div">
                <button className="website-link"><a href="https://huddle-landing-page-eight-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                <button className="github-link"><a href="https://github.com/MadisonWeber/Huddle" target="_blank" rel="noopener noreferrer">Github</a></button>
            </div>
            <p className="portfolio-description">This is a landing page I developed for use in a frontend-mentor challenge. It is fully responsive.</p>
        </div>
    )
}

export default HuddleCard
