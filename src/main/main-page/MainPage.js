import React from "react";
import Products from "./Products/Products"
import {Animated} from "react-animated-css";
import slide2 from '../../images/slide-phone.jpg'
import slide01 from '../../images/slide-phone2.jpg'
import slide4 from '../../images/slide-tv.jpg'

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="slide-container">
                <div class="fadein">
                    <div><img src={slide2} alt="" />
                        <h2 className="inline-wrapper">Iphone X</h2>
                    </div>
                    <div><img src={slide01} alt="" />
                        <p className="inline-wrapper slideText2">IPAD</p>
                    </div>
                    <div><img src={slide4} alt="" />
                        <p className="inline-wrapper slideText3">Smart TV</p>
                    </div>
				</div>
            </div>
            <Products />
        </div>
    )
}
export default MainPage