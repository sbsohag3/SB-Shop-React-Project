import React from "react";
import img from "../../asserts/images/join.jpg";

const JoinWithUs = () => {
  return (
    <div>
      <div class="hero py-5 bg-base-200 ">
        <div data-aos="fade-up" class="hero-content flex-col lg:flex-row ">
          <img src={img} class="lg:max-w-lg rounded-lg shadow-2xl" alt="" />
          <div className="px-6">
            <h3 className="text-purple-400">JOIN WITH US</h3>
            <h1 class="text-5xl font-bold text-info">
              Let's make something great together!
            </h1>
            <p class="py-6">
              We are focused on establishing long-term relationships with
              customers. Sign up for free and be a part of us.
            </p>
            <button class="btn btn-primary">Join Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWithUs;
