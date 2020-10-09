import React from 'react'

const Landing = () => {


    return (
            <>
                <div className = 'landing-container'>
                    <div className ='landing-overlay'></div>
                    <h1>Madison Weber</h1>
                    <p> <img  className = 'flag' src = {require("../photos/canadian_flag.png") } alt = ''/>Front-End Developer</p>
                </div>
                <div className="landing-text-container">
                    <div className="inner-landing-text-container">
                        <h1><span className="name">Front</span></h1>
                        <h1><span className="name">End</span></h1>
                        <h1><span className="name">Development.</span></h1>
                    </div>
                </div>
                <div className="landing-slider"></div>
            </>
    )
}

export default Landing
