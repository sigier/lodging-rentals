import React from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderSlick from 'react-slick';
import './Slider.css';

const Slider = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return(
        <div className="slick">
            <SliderSlick {...settings}>
                {props.elements}
            </SliderSlick>
        </div>
    )
};

export default Slider;