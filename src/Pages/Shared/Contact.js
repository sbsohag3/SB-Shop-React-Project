import React from "react";
import img from "../../asserts/images/email.jpg";

const Contact = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="mb-3 text-4xl text-info">Contact Us</h2>
        
      </div>
      <div class="hero border rounded  px-5  bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
        <div class=" ">
          <img src={img}  alt="" />
          </div>
          <div class=" flex-shrink-0 w-full max-w-lg  bg-base-100">
            <div class="card-body">
              <form
                action="https://formspree.io/f/mdobjgvj"
                method="POST"
                className="grid grid-cols-1 gap-3 justify-items-center"
              >
                <input
                  type="text"
                  name="Email"
                  id=""
                  placeholder="Email Address"
                  className="w-full max-w-md border-black input"
                  required
                />

                <input
                  type="text"
                  name="Name"
                  id=""
                  placeholder="Your Name"
                  className="w-full max-w-md border-black input"
                  required
                />
                <input
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                  className="w-full max-w-md border-black input"
                  required
                  id=""
                />
                <textarea
                  name="Message"
                  id=""
                  cols="6"
                  rows="4"
                  className="w-full max-w-md border-black textarea"
                  placeholder="Your message"
                  required
                ></textarea>

                <button className="btn btn-outline btn-success">Submit</button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Contact;
