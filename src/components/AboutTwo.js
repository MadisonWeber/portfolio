import React from 'react'
import '../abouttwo.css'
import aboutphoto from '../photos/newme-op.jpg';
import { motion } from 'framer-motion';


const AboutTwo = () => {
    return (
        <motion.div animate = {{opacity : 1, x : 0 }} initial = {{opacity : 0, x : -80}} transition = {{duration : 0.8}} >
            <div className = 'about__two__container'>
                <h1>Madison Weber</h1>
                <div className = 'about__two__panel'>
                    <div className="about__two__top">
                        <div className="avatar" style = {{'width' : '250px', 'height' : '250px'}}>
                            <img src={aboutphoto} alt="my photo" className = 'about__two__photo' />
                        </div>
                        <div className = 'about__two__contact'>
                            <p><span className = 'about__two__question'>Education:</span> University Of Guelph</p>
                            <p><span className = 'about__two__question'>Degree:</span> Bachelor of Commerce</p>
                            <p><span className = 'about__two__question'>Email:</span> madison.weber.dev@gmail.com</p>
                            <p><span className = 'about__two__question'>City of Residence:</span> Toronto, Canada</p>
                            <p><span className = 'about__two__question'>Birthdate:</span> Dec/4/1991</p>
                        </div>
                    </div>  
                    <div className="about__two__bottom">
                            <h4 className = 'about-me-two'>About Me</h4>
                            <p className = 'details-paragraph-bottom'> am a Business major who has recently found a strong passion for web development. When i began coding, i tried to learn everything i could about machine learning, but have recently found a home in front-end web development. I love the feeling of being able to create something i can use and interact with. My greatest skill is creating pixel-perfect responsive web-applications. I am committed to life-long learning in this field, and desire to learn more about UI design. When i'm not writing code i spend most of my time obsessing about my favourite hockey team 
                            <img className = 'leafs' src = {require("../photos/leafs-icon.png")} alt = ''/> , or just hanging out with my girlfriend and my dog. </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutTwo
