import React, {useRef} from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
    const rRef = useRef(null)
    const javascriptRef = useRef(null)
    const htmlRef = useRef(null)
    const cssRef = useRef(null)
    const reactRef = useRef(null)
    const pythonRef = useRef(null)
    const webscrapingRef = useRef(null)

    const addMoveClass = () =>{
        const refArray = [rRef, javascriptRef, htmlRef, cssRef, reactRef, pythonRef, webscrapingRef]
        for(let item of refArray){
            item.current.classList.add('move')
        }
        
    }
    
    return (
        <motion.div animate = {{opacity : 1, x : 0 }} initial = {{opacity : 0, x : -80}} transition = {{duration : 0.8}} >
            <div>
                <div className="skills-container">
                    <div className="skills-info">
                        <h3>My Skills</h3>
                        <p>This is an honest evaluation of where my skill level currently is across multiple technologies. <br/> I will keep this up to date as i continue progressing.</p>
                    </div>
                    <button onClick = {addMoveClass} className = 'show-skills-button'>Click To See How I Rate My Skills</button>
                    <div className="skills-animation-container">
                        <div className = 'skills-levels'>
                            <span className = 'level one'>1</span>
                            <span className = 'level two'>2</span>
                            <span className = 'level three'>3</span>
                            <span className = 'level four'>4</span>
                            <span className = 'level five'>5</span>
                            <span className = 'level six'>6</span>
                            <span className = 'level seven'>7</span>
                            <span className = 'level eight'>8</span>
                            <span className = 'level nine'>9</span>
                            <span className = 'level ten'>10</span>
                        </div>
                        
                        <div className="skills-animation">
                            <div className="skill javascript"><div className="dial javascript" ref = {javascriptRef}></div></div>
                            <div className="skill react"><div className="dial react" ref = {reactRef}></div></div>
                            <div className="skill css"><div className="dial css" ref = {cssRef}></div></div>
                            <div className="skill html"><div className="dial html" ref = {htmlRef}></div></div>
                            <div className="skill r"><div className="dial r" ref = {rRef}></div></div>
                            <div className="skill python"><div className="dial python" ref = {pythonRef}></div></div>
                            <div className = 'skill webscraping'><div className="dial webscraping" ref = {webscrapingRef}></div></div>
                            <span>Ability Level</span>
                        </div>
                    </div>
                    <div className = 'other-skills'>
                        <h5>Other Tech i have used or am learning</h5>
                        <ul>
                            <li>Express</li>
                            <li>Git</li>
                            <li>Redux</li>
                            <li>Material UI</li>
                            <li>Sass</li>
                            <li>MongoDb</li>
                            <li>Bootstrap</li>
                            <li>Rest Api's</li>
                            <li>Styled Components</li>
                            <li>Axios</li>
                            <li>GSAP</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
       
        </motion.div>
    )
}

export default Skills
