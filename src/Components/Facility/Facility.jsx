import React from 'react'
import './Facility.css'

import img4 from '../../Assets/icon (4).png'
import arrow from '../../Assets/arrow.png'

const Facility = () => {
  return (
    <div className="facility">
        
        <div className="facility-right">
            <h2>Our bespoke website include the fllowing</h2>
            
            <p>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsa</p>

            <button className="btn btn-facility">CONTACT US<img src={arrow} alt="" /></button>
        </div>
        <div className="facility-left">
        
        <div className="fac-programs">
        
            <div className="fac-program">
                <div className="fac-program-header">
                    <img src={img4} alt="Icon" className="fac-program-icon" />
                    <h5>Bespoke Design</h5>
                </div>
                <div className="caption">
                    <p>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.</p>
                </div>
            </div>

            <div className="fac-program">
                <div className="fac-program-header">
                    <img src={img4} alt="Icon" className="fac-program-icon" />
                    <h5>Mobile Optimised</h5>
                </div>
                <div className="caption">
                    <p>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.</p>
                </div>
            </div>

            <div className="fac-program">
                <div className="fac-program-header">
                    <img src={img4} alt="Icon" className="fac-program-icon" />
                    <h5>SEO Optimised</h5>
                </div>
                <div className="caption">
                    <p>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan ipsum.</p>
                </div>
            </div>
        </div>
           
        </div>
    </div>
  )
}

export default Facility