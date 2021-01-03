import React from 'react'

const BookmarkCard = () => {
    return (
        <div className="portfolio-card">
            <img className = 'portfolio-card-image' src={require("../../photos/bookmark_op.jpg")} alt=""/>
            <div className="portfolio-info">
                <h3 className="project-name">Bookmark Landing Page</h3>
                <h5 className = "project-type">Frontend Development</h5>
                <div className="project-tags">
                    <div className="project-tags-icon">
                        <i className = 'fas fa-tags'></i>
                    </div>
                    <div className="project-tags-tags">
                        <div className="tag">React</div>
                        <div className="tag">Javascript</div>
                        <div className="tag">CSS</div>
                        <div className="tag">Fully Responsive</div>
                        <div className="tag">SVG Images</div>
                    </div>
                </div>
            </div>
            <div className="portfolio-link-div">
                <button className="website-link"><a href="https://frontend-mentor-bookmark-landing.vercel.app/" target="_blank" rel="noopener noreferrer">Go To Project</a></button>
                <button className="github-link"><a href= "https://github.com/MadisonWeber/frontend-mentor-bookmark-landing" target="_blank" rel="noopener noreferrer">Github</a></button>
            </div>
            <p className="portfolio-description"> A fully responsive mock landing page for a Bookmarking tech company. Deployed on vercel for a frontend mentor io challenge.</p>
    </div>
    )
}

export default BookmarkCard
