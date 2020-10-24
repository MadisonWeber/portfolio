import React from 'react'

const About = () => {
    return (
        <div className="about">
            <div className = 'about-container'>
                <div className = 'about-upper'>
                    <div className = 'profile-image-container'>
                        <img src={require("../photos/newme3.jpg")} alt="broken"  className = 'profile-image'/>
                    </div>
                    <div className ='about-info'>
                        <h1>Madison Weber</h1>
                        <h4><span className = 'question'>Education:</span> University Of Guelph</h4>
                        <h4><span className = 'question'>Degree:</span> Bachelor Of Commerce</h4>
                        <p><span className = 'question'>Email:</span> madison.weber.dev@gmail.com</p>
                        <p><span className = 'question'>City Of Residence:</span> Toronto, Canada</p>
                        <p><span className = 'question'>Birthdate:</span> Dec/4/1991</p>
                    </div>
                </div>
                <div className="about-detail"> 
                    <p className = 'details-paragraph'> am a Business major who has recently found a strong passion for writing code. I love to learn and constantly strive to get better. I believe im a good communicator, and a fun easy-going person to hang out with. When i began coding, i tried to learn everything i could about machine learning, but have recently found a true passion for front-end web development. I love the feeling of being able to create something i can use and interact with. I am committed to life-long learning in this field, and desire to learn more about UI design. When i'm not writing code i spend most of my time obsessing about my favourite hockey team 
                    <img className = 'leafs' src = {require("../photos/leafs-icon.png")} alt = ''/> , or just hanging out with my girlfriend and my dog. </p>
                </div>
                
            </div>
        </div>
    )
}

export default About
