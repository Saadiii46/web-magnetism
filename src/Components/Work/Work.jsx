import React from 'react';
import './Work.css';

import img1 from '../../Assets/Rectangle 42406.png';
import img2 from '../../Assets/Rectangle 42407.png';
import img3 from '../../Assets/Rectangle 42407 (1).png';
import arrow from '../../Assets/arrow.png';

const Work = () => {
  return (
    <div className="work">
      <div className="work-upper">
        <div className="left-upper">
          <h2>Our Work</h2>
          <p>
            We don’t claim to be gurus or wizards. We’re just a super experienced, passionate team who knows how to get results for our clients. All our work is custom and thoughtfully designed, written, and developed with your business goals in mind.
          </p>
        </div>
        <div className="right-upper">
          <button className="btn btn-work">View Full Portfolio <img src={arrow} alt="arrow icon" /></button>
        </div>
      </div>

      <div className="wo-programs">
        <div className="wo-program">
          <img src={img1} alt="Web Design" className="wo-program-icon" />
          <h5>Redesign of B2B Website</h5>
          <p className="subtitle">Web design</p>
        </div>
        <div className="wo-program">
          <img src={img2} alt="App Development" className="wo-program-icon" />
          <h5>Mobile Application</h5>
          <p className="subtitle">App development</p>
        </div>
        <div className="wo-program">
          <img src={img3} alt="Digital Marketing" className="wo-program-icon" />
          <h5>E-commerce Shop</h5>
          <p className="subtitle">Web development</p>
        </div>
      </div>

      <div className="slider-dots">
        <span className="arrow">&#60;</span> 
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="arrow">&#62;</span> 
      </div>
    </div>
  );
};

export default Work;
