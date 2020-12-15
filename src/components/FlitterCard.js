import React from 'react'

const FlitterCard = () => {
    return (
        <div className="portfolio-card">
                    <img className = 'portfolio-card-image' src={require("../photos/flitter.jpg")} alt=""/>
                    <div className="portfolio-info">
                        <h3 className="project-name">Flitter--MERN Twitter Clone</h3>
                        <h5 className = "project-type">Full-Stack Development</h5>
                        <div className="project-tags">
                            <div className="project-tags-icon">
                                <i className = 'fas fa-tags'></i>
                            </div>
                            <div className="project-tags-tags">
                                <div className="tag">CSS</div>
                                <div className="tag">Express</div>
                                <div className="tag">React</div>
                                <div className="tag">MongoDB</div>
                                <div className="tag">MERN</div>
                                <div className="tag">Dcrypt</div>
                                <div className="tag">Heroku</div>
                                <div className="tag">Axios</div>
                                <div className="tag">Mongoose</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-link-div">
                        <button className="website-link"><a href="https://flitter.netlify.app/" target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                        <button className="github-link"><a href="https://github.com/MadisonWeber/flitter--fake-twitter" target="_blank" rel="noopener noreferrer">Github</a></button>
                    </div>
                    <p className="portfolio-description">Full Stack MERN twitter clone. Rest-Api written in Express, utilizing a MongoDB database and leveraging mongoose. Password encryption with bcrypt. React Frontend utilizing axios to fetch data. After authorization user can write and post tweets, comment on others tweets and like others tweets. User has follow/unfollow functionality, and the ability to upload a profile picture. User can navigate to their profile and see all their tweets, followers and liked tweets.</p>
                </div>
    )
}

export default FlitterCard

