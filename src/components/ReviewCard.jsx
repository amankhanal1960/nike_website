import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="font-montserrat text-slate-gray text-lg leading-7 mt-4 lg:max-w-lg">
        {feedback}
      </p>
      <div>
        <img src={star} />
      </div>
    </div>
  );
};

export default ReviewCard;
