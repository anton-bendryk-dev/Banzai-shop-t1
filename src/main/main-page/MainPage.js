import React from "react";
import ProductsList from "./Products/ProductsList"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import slide2 from '../../images/slide-phone.jpg'
import slide01 from '../../images/slide-phone2.jpg'
import slide4 from '../../images/slide-tv.jpg'

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="slide-container">
                <div className="fadein">
                    <div><img src={slide2} alt="" />
                        <h2>Iphone X</h2>
                    </div>
                    <div><img src={slide01} alt="" />
                        <p className="slideText2">IPAD</p>
                    </div>
                    <div><img src={slide4} alt="" />
                        <p className="slideText3">Smart TV</p>
                    </div>
				</div>
            </div>
            <div className="advertising">
                <div className="info-box box1">
                    <ScrollAnimation animateIn="zoomIn">
                        <p>20% off</p>
                    </ScrollAnimation>
                </div>
                <div className="info-box box2">
                    <ScrollAnimation animateIn="zoomInDown">
                        <p>FREE SHIPPING AND REFUND <span>GUARANTEE</span></p>
                    </ScrollAnimation>
                </div>
                <div className="info-box box3">
                    <ScrollAnimation animateIn="rollIn">
                        <p>Smart watches as a gift</p>
                    </ScrollAnimation>
                </div>
            </div>
            <ProductsList />
        </div>
    )
}
export default MainPage