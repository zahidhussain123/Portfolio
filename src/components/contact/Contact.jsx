import React from 'react'
import "./contact.css";
import phone from '../../images/phone.png';
import address from '../../images/address.png';
import email from '../../images/email.png';
import { useRef,useState,useContext } from 'react';
import { ThemeContext } from '../../context';
import emailjs from 'emailjs-com';
const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_oldv3eg', 'template_rbo4l3p', formRef.current,
         'user_BuVhnw378TcX82DsMY3nu')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className="c">
          <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={phone}
                                alt ="phone"
                                className="c-icon"
                            />
                            03459192501
                        </div>
                        <div className="c-info-item">
                            <img
                                src={address}
                                alt ="address"
                                className="c-icon"
                            />
                           Police line,H-10  Islamabad
                        </div>
                        <div className="c-info-item">
                            <img
                                src={email}
                                alt ="email"
                                className="c-icon"
                            />
                            zahid4307@gmail.com
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                         <b>What is your story ?</b>Get in touch.Always with the 
                         freelancing if the right project comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style= {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style= {{backgroundColor: darkMode && "#333"}} type="email" placeholder="Email" name="user_email" />
                        <textarea style= {{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                        {done && "Thank you"}
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;
