import './intro.css';
import img1 from '../../images/bg2.png'
const Intro = () => {
    return (
        <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">My name is </h2>
                <h1 className="i-name">Zahid Hussain</h1>
               <div className="i-title">
                   <div className="i-title-wrapper">
                       <div className="i-title-item">Web Development</div>
                       <div className="i-title-item">UI/UX Designer</div>
                       <div className="i-title-item">App Development</div>
                       <div className="i-title-item">Social Media Marketing</div>
                       <div className="i-title-item">Content Writer</div>
                   </div>
               </div>
               <p className="i-description">
                I am Web App Developer,and I am developing different types of websites of the clients for 
                2 years and the clients are happy about my work giving appreciable feedbacks.
               </p>
            </div>
            
 
        </div>
        <div className="i-right">
          <div className="i-bg"/>
            <img src={img1} alt="" className="i-img"/>
        </div>
        </div>
    )
}

export default Intro;
