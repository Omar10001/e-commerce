import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [result, setResult] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      console.log(Object.values(data.products));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const { id } = useParams();
  const product = result.find((item) => item.id === id);

  return (
    <div className="w-full min-h-screen px-10 md:px-32 py-32 md:py-0 flex justify-center items-center  dark:text-[#f806cc]">
      <div className=" md:w-[1285px] flex flex-col md:flex-row justify-center items-center space-x-8">
        <a href="http://i.ibb.co/fvRQwPp/niercover.png" className="">
          <img
            src="http://i.ibb.co/fvRQwPp/niercover.png"
            alt=""
            className="border-[3.5px] dark:border-[#f806cc] rounded-lg aspect-auto w-96 md:w-[500px] "
          />
        </a>
        <div className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <span className="w-96 text-3xl font-semibold">
              Nier Automata lorem ipsum
            </span>
            <span> Square Enix</span>
          </div>
          <span>5 stars</span>
          <div className="flex flex-col gap-1">
            <span className="font-semibold ">Description</span>
            <span className=" overflow-y-scroll w-96 h-32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>

          <div className="flex gap-2 w-full mt-2 ">
            <button className="text-start dark:text-white w-fit px-10 py-3 font-semibold rounded transition-all duration-400 scale-75 md:scale-100 bg-yellow-300 border-2 hover:text-yellow-300 border-yellow-300 dark:bg-[#f806cc] dark:border-[#f806cc] dark:hover:text-[#f806cc] hover:bg-transparent dark:hover:bg-transparent hover:scale-95">
              Buy
            </button>
            <button className="text-start dark:text-white w-fit px-10 py-3 font-semibold rounded transition-all duration-400 scale-75 md:scale-100 bg-yellow-300 border-2 hover:text-yellow-300 border-yellow-300 dark:bg-[#f806cc] dark:border-[#f806cc] dark:hover:text-[#f806cc] hover:bg-transparent dark:hover:bg-transparent hover:scale-95">
              Add to favourites
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-4xl">$49.99</span>
          <span> put something useful here</span>
          <span> put something useful here</span>
          <span> put something useful here</span>
          <span> put something useful here</span>
          <span> put something useful here</span>
          <span> put something useful here</span>
          <span> put something useful here</span>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
