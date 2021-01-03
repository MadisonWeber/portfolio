import React from 'react'

const RoomCard = () => {
    return (
        <div className="portfolio-card">
            <img className = 'portfolio-card-image' src={require("../../photos/room-optimized.jpg")} alt=""/>
            <div className="portfolio-info">
                <h3 className="project-name">Room Landing Page</h3>
                <h5 className = "project-type">Frontend Development</h5>
                <div className="project-tags">
                    <div className="project-tags-icon">
                        <i className = 'fas fa-tags'></i>
                    </div>
                    <div className="project-tags-tags">
                        <div className="tag">React</div>
                        <div className="tag">Javascript</div>
                        <div className="tag">Css</div>
                        <div className="tag">Fully responsive</div>
                    </div>
                </div>
            </div>
            <div className="portfolio-link-div">
                <button className="website-link"><a href="https://frontend-montor-room-challenge.vercel.app/" target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                <button className="github-link"><a href="https://github.com/MadisonWeber/frontend-montor-room-challenge" target="_blank" rel="noopener noreferrer">Github</a></button>
            </div>
            <p className="portfolio-description">This is a furniture business  landing page I developed for use in a frontend-mentor challenge. It is fully mobile responsive.</p>
        </div>
    )
}

export default RoomCard
