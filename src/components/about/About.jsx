import React from 'react'
import './about.css';
import Award from '../../images/award.png';
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                        src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="#"
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
            <h1 className="a-title">About me</h1>
            <p className="a-sub">It is a long established fact 
            that a  reader will produce a readable
             content.
            </p>
            <p className="a-desc">
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a
               type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining 
                essentially unchanged.
            </p>
            <div className="a-award">
            <img
                src={Award}
                alt="" className="a-award-img"
            />
            <div className="a-award-texts">
                <h4 className="a-award-title">International Design</h4>
                <p className="a-award-desc">
                    This is the beautiful design of the website you can make it ever.
                    Better practice approach is the good recommendation to be a good web developer.
                </p>
            </div>
            </div>
            </div>
           
        </div>
    )
}

export default About;
