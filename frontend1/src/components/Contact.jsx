
import React from 'react'
import {useForm} from "react-hook-form";
import Footer from "../components/Footer";


const Contact = () => {
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => console.log(data)
  return (
   <div className='contact-page'>
        <div className='contact'>
        <div className='header' >
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="names">
                    <div className="fname">
                        <label for="fname">First name</label><br/>
                        <input type="text" id="first_name"  placeholder='Enter your first name' 
                        {...register("name",{required: true})}/>
                        <error>
                            {errors.name?.type === "required" && "Please enter your name"}
                        </error>
                    </div>
                    <div className="lname">
                        <label for="lname">Last name</label><br/>
                        <input type="text" id="last_name"  placeholder='Enter your last name'
                        {...register("name",{required: true})}/>
                        <error>
                        {errors.name?.type === "required" && "Please enter your name"}
                        </error>
                    </div>

                </div>
                <label for="email">Email</label><br/>
                <input type="email" id="email"  placeholder='yourname@email.com'
                {...register("email",{required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})}/>
                <error>
                    {errors.email?.type === "required" && "Please enter your email"}
                </error><br/>
                <label for="message">Message</label><br/>
                <textarea id="message"  placeholder='Send me a message and I&#39;ll reply you as soon as possible...' rows="4" cols="50"
                {...register("message",{required: true})}></textarea>
                 <error>
                    {errors.message?.type === "required" && "Please enter your message"}
                </error><br/>
                <input type="checkbox" id="checkbox"
                {...register("checkbox",{required: true})}/>
                <label for="validation" id="validation" >You agree to providing your data to FavourMercy who may contact you.</label><br/>
                <error>
                    {errors.checkbox?.type === "required" && "Please click"}
                </error>
                <div>
                    <button id="btn__submit">Send message</button>
                </div>
            </form>
           
        </div>
    </div>
        <Footer />
   </div>
  )
}

export default Contact