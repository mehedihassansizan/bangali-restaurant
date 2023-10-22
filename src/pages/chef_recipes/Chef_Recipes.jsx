/* eslint-disable no-unused-vars */
import React from "react";
import { FcLike } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";
import Chef_Recipe from "../chef_recipe/Chef_Recipe";

const Chef_Recipes = () => {
  const chefRecipes = useLoaderData();
  const {
    id,
    chef_name,
    chef_picture,
    number_of_recipes,
    years_of_experience,
    likes,
    chef_recipes
  } = chefRecipes;

  return (
    <div >
      <div className="bg-[#FFFAF0]">
        <h1 className="text-center font-bold text-3xl bg-white pt-4 pb-4 mx-8">
          The Chef Who make you happy?
        </h1>
        <div className="hero min-h-screen mb-8">
          <div className="hero-content pl-0 md:pl-[1rem] flex-col lg:flex-row">
            <img
              src={chef_picture}
              className="max-w-lg rounded-lg shadow-2xl"
            />
            <div className="">
              <h1 className="text-5xl font-bold">{chef_name}</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <div>
                <p>
                  Experience:{" "}
                  <span className="text-blue-400">
                    {years_of_experience} Years
                  </span>
                </p>
                <p>
                  Number of Recpices :{" "}
                  <span className="text-blue-400"> {number_of_recipes}</span>
                </p>
                <div className="flex mt-4 mb-4">
                  <h1>
                    <FcLike className="text-xl" />
                  </h1>
                  <p className="pl-2 text-blue-400">{likes} likes</p>
                </div>
              </div>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mx-6 mt-16 mb-8">
        {
            chef_recipes.map(chef_recipe => <Chef_Recipe key={chef_recipe.recipe_id} chef_recipe={chef_recipe}></Chef_Recipe>)
        }
      </div>
    </div>
  );
};

export default Chef_Recipes;
