/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import toast, { Toaster } from 'react-hot-toast';

const Chef_Recipe = ({ chef_recipe }) => {
  const { recipe_id, recipe_name, cooking_method, ingredients, rating } =
    chef_recipe;

    const [show, setShow] = useState(true)

  const giveToast = () => {
    toast.success('Added your fav Item')
    setShow(false)
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border">
      <div className="card-body md:pb-6">
        <h2 className="card-title">{recipe_name}</h2>
        <div className="border bg-[#FFFAF0] p-4 rounded-lg">
          <h1 className=" text-blue-600">Cooking Method</h1>
          <p>{cooking_method}</p>
        </div>
        <div className="border bg-[#FFFAF0] p-4 rounded-lg grow">
          <h1 className=" text-blue-600">Ingredients</h1>
          {ingredients.map((ing) => (
            <li>{ing}</li>
          ))}
        </div>
        <Rating style={{ maxWidth: 250 }} value={rating} readOnly />
        <div className="card-actions flex justify-end mt-3">
          {show && <button
            onClick={giveToast}
            className="btn btn-primary w-full"
          >
            favorite
          </button>}
          <Toaster/>
        </div>
      </div>
    </div>
  );
};

export default Chef_Recipe;
