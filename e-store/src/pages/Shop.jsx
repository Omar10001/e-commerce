import React from "react";
import Search from "../components/UI/search";
import 'animate.css';


const Shop = () => {
  return (
    <div className=" mt-24 pt-24 min-h-screen h-full w-full flex flex-col justify-start items-center bg-white dark:bg-[#2e0249] transition-all duration-300 px-10 md:px-0">
      <span className="text-black dark:text-[#f806cc] text-3xl md:text-7xl font-semibold w-full md:w-[800px] text-center transition-colors duration-300 group/on">Shop your favourites & game <span className="dark:group-hover/on:text-white group-hover/on:text-[#fcdd7a] transition-colors duration-150">on</span> </span>
      <br />
      <Search />
      
    </div>
  );
};

export default Shop;
