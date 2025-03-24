import React from 'react';

import {Container, Row, Col} from "react-bootstrap";

import {AiOutlineSafety} from "react-icons/ai";
import {HiOutlineStatusOnline} from "react-icons/hi";
import {BiSolidOffer} from "react-icons/bi";


const FeaturesSection = () => {
    return (
    <div id="features-section">
        <Container className="py-5">
            <Row>
                <Col>
                  <h1 className="quinary-color fs-1 p-0 mb-4">WHY CHOOSE US</h1>
                </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <AiOutlineSafety size="2.5em" color="white"/>
                <h4 className="quinary-color fs-5 py-1">Safety &amp; Security</h4>
                <p className="quinary-color fs-6 m-0 pb-2">Safety and security are our top priorities. All of our vehicles are regularly inspected and maintained to meet the highest safety standards. We offer well-equipped cars with modern safety features, ensuring you can drive with peace of mind. Our secure booking system also protects your personal information, providing a safe and smooth rental experience from start to finish. </p>
              </Col>
              <Col xs={4}>
                <HiOutlineStatusOnline size="2.5em" color="white"/>
                <h4 className="quinary-color fs-5 py-1">Online Booking</h4>
                <p className="quinary-color fs-6 m-0 pb-2">Our easy-to-use online booking system allows you to reserve your vehicle quickly and conveniently, anytime and anywhere. Simply browse our fleet, select the car that suits your needs, and book it in just a few clicks. With secure payment options and instant booking confirmation, renting a car has never been easier.</p>
              </Col>
              <Col xs={4}>
                <BiSolidOffer size="2.5em" color="white"/>
                <h4 className="quinary-color fs-5 py-1">Best Offers</h4>
                <p className="quinary-color fs-6 m-0 pb-2">We offer unbeatable deals to ensure you get the best value for your money. Whether you're booking for a day, week, or month, we have special discounts and packages tailored to your needs. Check out our latest offers and save more on your next rental!</p>
              </Col>
            </Row>
        </Container>
    </div> 
    );
};
export default FeaturesSection;