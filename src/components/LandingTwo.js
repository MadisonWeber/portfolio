import React, { useState } from 'react'
import "../css/LandingTwo.css"
import PossibleOne from '../photos/plexels__one.jpg'
import PossibleTwo from '../photos/plexels__two.jpg'
import PossibleThree from '../photos/plexels__three.jpg'
import SwitchMode from './SwitchMode'

const LandingTwo = () => {

    const [showFront, setShowFront] = useState(false)

    return (
        <>
            <div className = 'landing__two'>
                <div className="landing__two__inner">
                    <img src = {PossibleTwo} alt = 'toronto-first' style = {{width : '32%'}} className = 'landing-image-one'/>
                    <img src = {PossibleOne} alt = 'toronto-second' style = {{width : '32%'}} className = 'landing-image-two'/>
                    <img src = {PossibleThree} alt = 'toronto-three' style = {{width : '32%'}} className = 'landing-image-three'/>
                    <div className="landing__two__overlay">
                        <div className="landing__two__overlay-bg" onMouseEnter = {()=> setShowFront(true)} onMouseLeave = {() => setShowFront(false)}>
                            {!showFront && <h1 className = 'landing__two__name'>Madison Weber</h1>}
                            {showFront && <h1 className = 'landing__two__front'>Frontend Developer</h1>}
                        </div>
                    </div>
                </div>
            </div>
            <SwitchMode />
        </>
    )
}

export default LandingTwo
