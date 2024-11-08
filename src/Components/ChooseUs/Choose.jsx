import React from 'react';
import './Choose.css';

import img1 from '../../Assets/icon (1).png';
import img2 from '../../Assets/icon (2).png';
import img3 from '../../Assets/icon (3).png';

const Choose = () => {
  return (
    <div className="choose-container">
      <div className="title">
        <h2>Why Choose Us</h2>
      </div>

      <div className="programs">
        <div className="program">
          <div className="program-header">
            
            <img src={img1} alt="Icon" className="program-icon" />
            
            
            <h5>Take Control of Your Entire Marketing Landscape</h5>
          </div>
          <div className="caption">
            <p>We've curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires.</p>
          </div>
        </div>

        <div className="program">
          <div className="program-header">
            <img src={img2} alt="Icon" className="program-icon" />
            <h5>Your Business's Dedicated Marketing Wing</h5>
          </div>
          <div className="caption">
            <p>Even if your business is modest in size, having a well-versed extension focused on digital marketing provides a distinct competitive edge.</p>
          </div>
        </div>

        <div className="program">
          <div className="program-header">
            <img src={img3} alt="Icon" className="program-icon" />
            <h5>A Reliable Collaborator</h5>
          </div>
          <div className="caption">
            <p>Our exceptional team members function seamlessly as an integral part of your team, fully committed to your success and the sanctity of your brand.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
