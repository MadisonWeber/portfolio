import React from 'react'

const MovieCard = () => {
    return (
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
    )
}

export default MovieCard
