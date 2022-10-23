import React from 'react';
import { AiFillStar } from "react-icons/ai";
import Loading from "../Shared/Loading";

const Review = ({review}) => {
  <Loading />;
  
  return (
    <div className="shadow-xl card lg:max-w-lg bg-base-100">
      <div className="card-body">
        <p>{review.review}</p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 mr-5 rounded-full ring ring-primary ring-offset-base-100">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{review.name}</h4>
            <p className="flex items-center gap-1 text-yellow-400">
              <AiFillStar /> <AiFillStar />
              
              {review.rating}.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;