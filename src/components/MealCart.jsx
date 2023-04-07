import React from "react";
import { BiSearch } from "react-icons/bi";
import "./MealCart.css";
import { Link } from "react-router-dom";

const MealCart = ({ id, image }) => {
  return (
    <div className=" relative parent">
      <img
        className=" image h-[300px] object-cover rounded-lg"
        src={image}
        alt=""
      />
      <Link to={`detail/${id}`}>
        <p className=" icon z-[-1] bg-orange-500 h-12 w-12 rounded-[100%] flex items-center justify-center align-middle absolute top-[40%] left-[40%]">
          <BiSearch className=" text-3xl text-white" />
        </p>
      </Link>
    </div>
  );
};

export default MealCart;
