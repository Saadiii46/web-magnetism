import React from 'react'
import './Service.css'

import arrow from '../../Assets/arrow_dark.png'
import img1 from '../../Assets/Rectangle 42457 (1).png'
import img2 from '../../Assets/Rectangle 42457.jpg'
import img3 from '../../Assets/Rectangle 42457.png';

const Service = () => {
  return (
   <div className="service">
        
        <div className="service-upper">
            <h2>Overview of Services</h2>
            
        
        </div>
        
        
        <div className="Ser-programs">
        
            <div className="Ser-program">
                <div className="Ser-program-header">
                    <img src={img1} alt="Icon" className="Ser-program-icon" />
                    <h5>Bespoke Web Design</h5>
                </div>
                <div className="caption">
                    <p>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.</p>
                    <button className="btn btn-service">Bespoke Web Design<img src={arrow} alt="" /></button>
                </div>
            </div>

            <div className="Ser-program">
                <div className="Ser-program-header">
                    <img src={img2} alt="Icon" className="Ser-program-icon" />
                    <h5>App Development</h5>
                </div>
                <div className="caption">
                    <p>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.</p>
                    <button className="btn btn-service">App Development<img src={arrow} alt="" /></button>

                </div>
            </div>

            <div className="Ser-program">
                <div className="Ser-program-header">
                    <img src={img3} alt="Icon" className="Ser-program-icon" />
                    <h5>Digital Marketing</h5>
                </div>
                <div className="caption">
                    <p>Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat </p>
                </div>
                <button className="btn btn-service">Digital Marketing<img src={arrow} alt="" /></button>

            </div>
        </div>
           
        
    </div>
  )
}

export default Service