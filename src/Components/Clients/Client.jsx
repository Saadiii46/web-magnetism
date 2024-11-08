import React from 'react'
import './Client.css'


import img1 from '../../Assets/client3.png';
import img2 from '../../Assets/client2.png';
import img3 from '../../Assets/client1.png';
import star from '../../Assets/Star.png';

const Client = () => {
  return (
    <div className="client">
      <div className="client-upper">
          <h2>What our clients say about us</h2>
      </div>

      <div className="cl-programs">

        <div className="cl-program">
          <img src={img1} alt="" className="cl-program-icon" />
          <p className='rating'>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
          </p>
          
          <p className="subtitle">Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat</p>

          <div className="cl-text">
          
            <h5>Maria bend, Director</h5>
            <a href='' className='cl-link'>Read More</a>
            
          </div>
          
        </div>

        <div className="cl-program">
          <img src={img2} alt="" className="cl-program-icon" />
          <p className='rating'>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
          </p>
          
          <p className="subtitle">Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat</p>

          <div className="cl-text">
          
            <h5>Maria bend, Director</h5>
            <a href='' className='cl-link'>Read More</a>
            
          </div>
          
        </div>

        <div className="cl-program">
          <img src={img3} alt="" className="cl-program-icon" />
          <p className='rating'>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
          </p>
          
          <p className="subtitle">Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae. Montes mattis ultrices maecenas et. Ut ultricies viverra volutpat</p>

          <div className="cl-text">
          
            <h5>Maria bend, Director</h5>
            <a href='' className='cl-link'>Read More</a>
            
          </div>
          
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
  )
}

export default Client