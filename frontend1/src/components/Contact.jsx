import React from 'react'
import Footer from "../components/Footer";


const Contact = () => {
  return (
   <div className='contact-page'>
        <div className='contact'>
        <div className='header'>
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form>
                <div className="name">
                    <div className="fname">
                        <label for="fname">First name</label><br/>
                        <input type="text" id="first_name"  placeholder='Enter your first name'/>
                    </div>
                    <div className="lname">
                        <label for="lname">Last name</label><br/>
                        <input type="text" id="last_name"  placeholder='Enter your last name'/>
                    </div>
                </div>
                <label for="email">Email</label><br/>
                <input type="email" id="email"  placeholder='yourname@email.com'/><br/>
                <label for="message">Message</label><br/>
                <textarea id="message"  placeholder='Send me a message and I&#39;ll reply you as soon as possible...' rows="4" cols="50"></textarea><br/>
                <input type="checkbox" id="checkbox"/>
                <label for="validation" id="validation" >You agree to providing your data to Favour who may contact you.</label>
            </form>
            <button id="btn__submit">Send message</button>
        </div>
    </div>
        <Footer />
   </div>
  )
}

export default Contact