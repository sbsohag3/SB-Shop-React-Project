import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../../asserts/images/logo/images (1).jpg';
import img1 from '../../asserts/images/logo/images (2).jpg';
import img2 from '../../asserts/images/logo/images (3).png';
import img3 from '../../asserts/images/logo/images (4).jpg';
import img4 from '../../asserts/images/logo/images (5).png';
import img5 from '../../asserts/images/logo/images (6).png';
import img6 from '../../asserts/images/logo/images (7).jpg';
import img7 from '../../asserts/images/logo/images (8).png';

const Sliders = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
    return (
      <div className='gap-6 py-3 mx-12 my-4 border-2 rounded'>
      
      <Slider {...settings}>
      <div>
        <img
          className="w-full h-16 px-5 mx-4 border-1 slide-img"
          src={img}
          alt=""
        />
      </div>
      <div>
        <img
          className="w-full h-16 px-5 mx-4 border-1 slide-img"
          src={img1}
          alt=""
        />
      </div>
      <div>
        <img
          className="w-full h-16 px-5 mx-4 border-1 slide-img"
          src={img2}
          alt=""
        />
        </div>
      <div>
        <img
          className="w-full h-16 px-5 mx-4 border-1 slide-img"
          src={img3}
          alt=""
        />
      </div>
      <div>
        <img
          className="w-full h-16 px-5 mx-4 border-1 slide-img"
          src={img4}
          alt=""
        />
      </div>
      <div>
        <img
          className="w-full h-16 px-5 mx-4 border-1 slide-img"
          src={img5}
          alt=""
        />
        </div>
      <div>
        <img
          className="w-full h-16 px-5 mx-4 border-1 slide-img"
          src={img6}
          alt=""
        />
        </div>
      <div>
        <img
          className="w-full h-16 px-5 mx-4 border-1 slide-img"
          src={img7}
          alt=""
        />
        </div>
      
      </Slider>
    </div>
    );
 

};

export default Sliders;