import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import AboutImage from '../assets/images/about-image.png'


const AboutSection = () => {
    return (
    <div id="about-section">
     <Container>
        <Row className="mt-1 mb-2">
          <Col xs={{span:12, order:"last"}} md={{span:6, order:"first"}}>
            <div className="image_iman">
                <img src={AboutImage} className="about_img" />
            </div>
          </Col>
          <Col xs={{span:12, order:"first"}} md={{span:6, order:"last"}}>
            <div className="mt-2 mb-5">
              <h1 className="text-uppercase fs-1 fw-600">
                  About <span className="primary-color">Us</span>
              </h1>
              <p className="about-text fs-5 m-0">
              We are dedicated to providing convenient, reliable, and affordable car rental options for all your travel needs. With a diverse fleet of well-maintained vehicles and flexible rental plans, we ensure that every journey is smooth and hassle-free. Our commitment to excellent customer service means you can count on us for a seamless experience from booking to drop-off. Choose us for your next adventure and enjoy a stress-free ride!
              </p>
              <div className="mt-3">
                  <a href="#" className="readmore-btn fs-5 px-3 py-2">Read More</a>
              </div>
            </div>
          </Col>
        </Row>
     </Container>
    </div>
    );
    };
    export default AboutSection;