/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const ChefDetail = ({ chefDetail }) => {
  const {
    id,
    chef_name,
    chef_picture,
    number_of_recipes,
    years_of_experience,
    likes,
  } = chefDetail;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={chef_picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chef_name}</h2>
        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div>
          <p>
            Experience: <span className="text-blue-400">{years_of_experience} Years</span>
          </p>
          <div className="flex mt-4">
            <h1>
              <FcLike className="text-xl" />
            </h1>
            <p className="pl-2 text-blue-400">{likes} likes</p>
          </div>
        </div>
        <div className="card-actions mt-4">
          <Link to={`/chef_recipes/${id}`}><button className="btn btn-primary w-full"> View Recipes</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ChefDetail;
