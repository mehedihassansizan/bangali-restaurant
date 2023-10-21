/* eslint-disable no-unused-vars */
import React from "react";
import chief from '../../../assets/chief1.png'

const Home = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="hero min-h-screen bg-[#FFFAF0]">
          <div className="hero-content p-0 flex-col lg:flex-row-reverse md:mx-10">
            <img
              src={chief}
              className="max-w-sm md:ml-8 rounded-lg shadow-2xl"
            />
            <div className="mt-8 mx-4">
              <h1 className="text-xl font-bold">Best In DAL VHAT</h1>
              <h1 className="text-4xl mt-4">Topical <span className="text-orange-400"> Chicken </span>Mango salsa</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="hero min-h-screen bg-[#FFFAF0]">
          <div className="hero-content p-0 flex-col lg:flex-row-reverse md:mx-10">
            <img
              src={chief}
              className="max-w-sm md:ml-8 rounded-lg shadow-2xl"
            />
            <div className="mt-8 mx-4">
              <h1 className="text-xl font-bold">Best In DAL VHAT</h1>
              <h1 className="text-4xl mt-4">Topical <span className="text-orange-400"> Chicken </span>Mango salsa</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="hero min-h-screen bg-[#FFFAF0]">
          <div className="hero-content p-0 flex-col lg:flex-row-reverse md:mx-10">
            <img
              src={chief}
              className="max-w-sm md:ml-8 rounded-lg shadow-2xl"
            />
            <div className="mt-8 mx-4">
              <h1 className="text-xl font-bold">Best In DAL VHAT</h1>
              <h1 className="text-4xl mt-4">Topical <span className="text-orange-400"> Chicken </span>Mango salsa</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="hero min-h-screen bg-[#FFFAF0]">
          <div className="hero-content p-0 flex-col lg:flex-row-reverse md:mx-10">
            <img
              src={chief}
              className="max-w-sm md:ml-8 rounded-lg shadow-2xl"
            />
            <div className="mt-8 mx-4">
              <h1 className="text-xl font-bold">Best In DAL VHAT</h1>
              <h1 className="text-4xl mt-4">Topical <span className="text-orange-400"> Chicken </span>Mango salsa</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
