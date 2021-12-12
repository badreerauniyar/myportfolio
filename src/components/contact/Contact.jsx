import { EmailOutlined, Home, LocalPhone } from '@material-ui/icons';
import React, { useRef, useState } from 'react'
import "./contact.css";
import emailjs from "emailjs-com";

export const Contact = () => {
    const [done,setDone]=useState(false);
    const formRef=useRef();
    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_6sj4owa', 'template_esw83n1', formRef.current, 'user_VyutxEf9rhZEULDRvE8YO')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
      
  };

    
    return (
        <div className='c'>
            <div className="c-bg"> </div>
        <div className="c-wrapper">
            <div className="c-left">
            <h1 className="c-title">
                Let's talk !
            </h1>
            <div className="c-info">
                <div className="c-info-iten">
                    <LocalPhone className='k'/>
                    +977 **********
                </div>
                <div className="c-info-iten">
                   
                    <EmailOutlined className='k'/>
                    @badree.rauniyar@gmail.com
                   
                </div>
                <div className="c-info-iten">
        
                    <Home className='k'/>
                    Saptary,Nepal.
                </div>
            </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b>
                    Get in touch . Always looking for freelancing project.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' name="user_name" />
                    <input type="text" placeholder='Subject' name="user_subject" />
                    <input type="text" placeholder='Email' name="user_email" />
                    <textarea rows="5" placeholder="Message" name="message" />
                    <button>Submit</button>
                    {done && 
                    <div> "Thank you for contacting"</div>
                     }
                </form>
            </div>
        </div>
        </div>
    )
}

