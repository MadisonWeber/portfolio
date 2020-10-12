import React from 'react'

const Contact = () => {

 

    return (
        <div className = 'contact-container'>
            <h3>Contact Me</h3>
            <div className = 'contact-email-container'>
                <h6>Send me and email at</h6>
                <p className = 'email'> madison.weber.dev@gmail.com</p>
            </div>
            <div className = 'or'>-- OR -- </div>
            
            <div className = 'form-container'>
                <h6>Send me a message right here</h6>
                <form name="contact"  method = 'post' >
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                        <input type="text" name="name" placeholder = 'Name'/>
                    </p>
                    <p>
                        <input type="email" name="email" placeholder = 'Email'/>
                    </p>
                    <p>
                         <textarea name="message" placeholder = "Message.."></textarea>
                    </p>
                    <p>
                        <button type="submit" className = 'submitBtn' >Send Your Message <i className="far fa-paper-plane"></i></button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Contact


