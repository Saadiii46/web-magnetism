import React from 'react'
import './Insight.css'

import imsight1 from '../../Assets/Screenshot 2022-12-28 041447 1 (1).png';
import imsight2 from '../../Assets/Screenshot 2022-12-28 041447 1 (2).png';
import imsight3 from '../../Assets/Screenshot 2022-12-28 041447 1.png';

const Insight = () => {
  return (
    <div className="insight-container">
      <div className="title">
        <h2>Latest Insight</h2>
      </div>

      <div className="cards">
        <div className="card">
          <div className="card-header">
            <img src={imsight1} alt="Icon" className="card-icon" />
            <h5>Take Control of Your Entire Marketing Landscape</h5>
          </div>
          <div className="caption">
            <p>We've curated top-tier teams under one roof, enabling you to bypass the complexities of overseeing a network of agencies and internal hires.</p>
          </div>
          <div className="card-footer">
            <span>Insight Data</span>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={imsight2} alt="Icon" className="card-icon" />
            <h5>Your Business's Dedicated Marketing Wing</h5>
          </div>
          <div className="caption">
            <p>Even if your business is modest in size, having a well-versed extension focused on digital marketing provides a distinct competitive edge.</p>
          </div>
          <div className="card-footer">
            <span>Insight Data</span>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={imsight3} alt="Icon" className="card-icon" />
            <h5>A Reliable Collaborator</h5>
          </div>
          <div className="caption">
            <p>Our exceptional team members function seamlessly as an integral part of your team, fully committed to your success and the sanctity of your brand.</p>
          </div>
          <div className="card-footer">
            <span>Insight Data</span>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insight
