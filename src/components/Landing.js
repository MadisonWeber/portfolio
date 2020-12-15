import React, {useState, useEffect} from 'react'

const Landing = () => {

    const openingAnimationRun = sessionStorage.getItem('shouldRun') || 'yes'; 

    useEffect(()=> {
        return ()=> sessionStorage.setItem('shouldRun', 'no')
    }, [])

    console.log(openingAnimationRun)
    return (
            <>
                <div className = 'landing-container'>
                    <div className ='landing-overlay'></div>
                    <h1 className = {openingAnimationRun === 'yes' ? 'landing-name' : "landing-name dont-run"}>Madison Weber</h1>
                    <p className = {openingAnimationRun === 'yes' ? 'landing__p run-p' : 'landing__p'}> <img  className = 'flag' src = {require("../photos/canadian_flag.png") } alt = ''/>Front-End Developer</p>
                </div>
                <div className= {openingAnimationRun === 'yes' ? "landing-text-container" : "landing-text-container dont-show"}>
                    <div className="inner-landing-text-container">
                        <h1><span className="name">Front</span></h1>
                        <h1><span className="name">End</span></h1>
                        <h1><span className="name">Development.</span></h1>
                    </div>
                </div>
                <div className={openingAnimationRun === 'yes' ? "landing-slider" : "landing-slider dont-show"}></div>
            </>
    )
}

export default Landing
