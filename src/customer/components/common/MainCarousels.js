import React from 'react';
import {Carousel} from 'react-bootstrap';
import '../../resources/css/style.css';
import sample from '../../resources/img/sample.jpg';
import sample3 from '../../resources/img/sample3.jpg';

function MainCarousels() {
    return (
      <div className='maincarousels'  style={{height: '800px'}}>
        <Carousel slide={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sample}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sample}
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sample3}
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  );
}

export default MainCarousels;