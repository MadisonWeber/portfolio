import React from 'react'

const EasyBankCard = () => {
    return (
        <div className="portfolio-card">
            <img className = 'portfolio-card-image' src={require("../photos/easybank-optimized.jpg")} alt=""/>
            <div className="portfolio-info">
                <h3 className="project-name">EasyBank Landing Page</h3>
                <h5 className = "project-type">Frontend Development</h5>
                <div className="project-tags">
                    <div className="project-tags-icon">
                        <i className = 'fas fa-tags'></i>
                    </div>
                    <div className="project-tags-tags">
                        <div className="tag">Javscript</div>
                        <div className="tag">Sass</div>
                        <div className="tag">Html</div>
                        <div className="tag">Mobile-Responsive</div>
                        <div className="tag">SVG images</div>
                    </div>
                </div>
            </div>
            <div className="portfolio-link-div">
                <button className="website-link"><a href="https://frontend-mentor-easybank-bw0f3xg23.vercel.app/" target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                <button className="github-link"><a href="https://github.com/MadisonWeber/frontend-mentor-easybank" target="_blank" rel="noopener noreferrer">Github</a></button>
            </div>
            <p className="portfolio-description">This is a landing page for a banking business I developed for use in a frontend-mentor challenge. It is fully mobile responsive.</p>
        </div>
    )
}

export default EasyBankCard
