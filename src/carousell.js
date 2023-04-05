import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CJF2 from '../src/CJF2.png'
import CJF3 from '../src/CJF3.png'
import CJF5 from '../src/CJF5.png'
import CJF6 from '../src/CJF6.png'


const Carousell = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div>
                <h3>REASON 1</h3>
                <img src={CJF2} alt="CJF2"/>
            </div>
            <div>
                <h3>REASON 2</h3>
                <img src={CJF3} alt="CJF3"/>
            </div>
            <div>
                <h3>REASON 3</h3>
                <img src={CJF5} alt="CJF5"/>
            </div>
            <div>
                <h3>REASON 4</h3>
                <img src={CJF6} alt="CJF2"/>
            </div>
            <div>
                <h3>REASON 5</h3>
                <img src={CJF2} alt="CJF2"/>
            </div>
            <div>
                <h3>REASON 6</h3>
                <img src={CJF2} alt="CJF2"/>
            </div>
        </Slider>
    );
}

export default Carousell
