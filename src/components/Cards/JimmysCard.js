import React from 'react'

const JimmysCard = () => {
    return (
        <div className="portfolio-card">
                    <img className = 'portfolio-card-image' src={require("../../photos/pizzaria1.jpg")} alt=""/>
                    <div className="portfolio-info">
                        <h3 className="project-name">Jimmys Pizza Website</h3>
                        <h5 className = "project-type">Full-Stack Development</h5>
                        <div className="project-tags">
                            <div className="project-tags-icon">
                                <i className = 'fas fa-tags'></i>
                            </div>
                            <div className="project-tags-tags">
                                <div className="tag">React</div>
                                <div className="tag">Firebase</div>
                                <div className="tag">GSAP</div>
                                <div className="tag">Context Api</div>
                                <div className="tag">CSS</div>
                                <div className="tag">Axios</div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-link-div">
                        <button className="website-link"><a href="https://jimmys-pizzaria.netlify.app/" target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                        <button className="github-link"><a href="https://github.com/MadisonWeber/jimmys-pizzaria" target="_blank" rel="noopener noreferrer">Github</a></button>
                    </div>
                    <p className="portfolio-description">Uses firebase on the back-end to handle authentication with email/password. Firebase is also used to track a users orders, as well as update the menu. The menu can be altered on the back-end, and in real time it will update. Once logged in, a user can see his/her previous order history. This project also uses GSAP ScrollTrigger to render animations based on a users scroll position, and has a floating navigation to help the user scroll through the history pages quickly.</p>
                </div>
    )
}

export default JimmysCard