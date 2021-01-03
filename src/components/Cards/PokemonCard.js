import React from 'react'

const PokemonCard = () => {
    return (
            <div className="portfolio-card">
                <img className = 'portfolio-card-image' src={require("../../photos/pokemon-pic.png")} alt=""/>
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
    )
}

export default PokemonCard
