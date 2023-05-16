import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div className="card bg-base-100 border">
      <figure className="px-8 pt-8">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body flex flex-row justify-between items-end">
        <div>
          <h2 className="card-title">{title}</h2>
          <p className="text-[#FF3811] font-semibold pt-3">Price : ${price}</p>
        </div>
        <div className="card-actions">
          {/* <FaArrowRight className="text-[#FF3811] hover:text-[#e9310c] cursor-pointer" /> */}
          <Link to={`/checkout/${_id}`} className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
