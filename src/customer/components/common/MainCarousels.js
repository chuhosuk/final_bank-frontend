import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../resources/css/style.css';
//import piggy_bank from "../../resources/img/piggy_bank.jpg"
import sample from '../../resources/img/sample.jpg';
//import bank_img from '../../resources/img/bank_img.png';
// 

function MainCarousels() {
  return (
    <div className='carousel'>
      <Carousel style={{ width: '100%', height: '400px' }}>
        <Carousel.Item>
          <img
            className="d-block w-100 h-280"
            src={sample}
            alt="First slide"
            style={{ width: '100%', height: '400px' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-280"
            src={sample}
            alt="Second slide"
            style={{ width: '100%', height: '400px' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sample}
            alt="Third slide"
            style={{ width: '100%', height: '400px' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MainCarousels;