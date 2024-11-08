import React from 'react'
import './Welcome.css'

import arrow from '../../Assets/arrow.png'

import image from '../../Assets/image section 2.png'

const Welcome = () => {
  return (
    <div className="about">
        <div className="about-right">
            <h2>Welcome to web magnetism</h2>
            
            <p>Your hub for bespoke web design and digital marketing success. We seamlessly merge creativity and SEO expertise to craft visually stunning websites that magnetize audiences.<br/><br/> Our digital marketing, from SEO mastery to impactful campaigns, ensures your brand's resonance online. At Web Magnetism, we're not just designers; we're digital architects, sculpting unique online experiences that elevate your brand.<br/><br/> Navigate the digital landscape with confidence – choose Web Magnetism for tailored web design and strategic digital marketing, where innovation meets results for a compelling online journey.</p>

            <button className="btn btn-welcome">ABOUT US<img src={arrow} alt="" /></button>
        </div>
        <div className="about-left">
            <img src={image} alt="" className='about-img'/>
           
        </div>
    </div>
  )
}

export default Welcome