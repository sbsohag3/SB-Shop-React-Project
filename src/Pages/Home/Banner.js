import React from "react";
import { Link } from "react-router-dom";


import banner1 from "../../asserts/images/image (1).jpg";

const Banner = () => {

  return (
    <div className="hero lg:h-[70vh] lg:px-12 bg-base-300">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img
          src={banner1}
          data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
          className="rounded-lg shadow-2xl lg:max-w-lg"
          alt=""
        />
        <div data-aos="zoom-in" className="lg:px-5">
          <h1
            className="text-5xl font-bold text-info"
            // data-aos="fade-up"
            // data-aos-delay="400"
            // data-aos-duration="900"
          >
            How To Make Sure All Your Computer Hardware Parts Are Compatible
          </h1>
          <p
            className="py-6"
            // data-aos="fade-up"
            // data-aos-delay="600"
            // data-aos-duration="800"
          >
            Here's a simple and easy-to-understand guide on how to make sure
            that all your hardware parts are compatible. It has never been
            easier than this.
          </p>

          <Link to={'/products'}
     
            className="btn btn-primary"
            // data-aos="zoom-in"
            // data-aos-delay="1300"
          >
             Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
