import React, { useState, useEffect } from "react";
import Cards from "../components/UI/cards";
import axios from "axios";
import { Link } from "react-router-dom";
import Category from "../components/UI/categoryCard";
import "animate.css";

const Home = () => {
  const [result, setResult] = useState([]);
  const [category, setCategory] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://dummyjson.com/products?select=title,price,brand,rating,category"
      );
      setResult(Object.values(data.products));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategory(Object.values(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategory();
  }, []);

  const slides = [
    {
      url: "https://i.ibb.co/0ZMm02k/psslide.png",
    },
    {
      url: "https://i.ibb.co/FnQB43D/apexslide.png",
    },
    {
      url: "https://i.ibb.co/0Yrr06X/fifaslide.png",
    },
    {
      url: "https://i.ibb.co/RSpP2pD/onepieceslide.png",
    },
    {
      url: "https://i.ibb.co/f9sFW8c/lastofusslide.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="mt-16 relative animate__animated animate__fadeIn flex justify-center gap-2 items-center min-h-screen w-full px-10 md:px-32 mx-auto  transition-all duration-300">
      <div className="flex flex-col justify-center items-start">
        <div className=" w-[280px] md:max-w-[1400px] h-[480px] md:w-[1285px] mx-auto  py-16 px-0 relative group/slide">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-[280px] md:w-[1285px] h-full rounded-2xl bg-center bg-cover duration-500 "
          ></div>
          {/* L */}
          <div
            onClick={prevSlide}
            className="hidden group-hover/slide:block text-gray-400/30 hover:text-gray-400/70 text-5xl absolute top-[45%] -translate-x-0 translate-y-[-50% left-5 cursor-pointer "
          >
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
          </div>
          {/* R */}
          <div
            onClick={nextSlide}
            className="hidden group-hover/slide:block text-gray-400/30 hover:text-gray-400/70 text-5xl absolute top-[45%] translate-y-[-50% right-5 cursor-pointer "
          >
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          </div>

          <div
            className={`absolute top-[30%] left-28 text-2xl md:text-6xl flex flex-col uppercase font-bold w-[300px] md:w-96 leading-[48px] text-[#fde047] dark:text-[#f806cc] transition-all duration-300 `}
          >
            <span className="dark:animate-pulse">from gamers to gamers</span>
            <div className="mt-2 flex gap-2">
              <button className="hover:scale-105 dark:hover:bg-gradient-to-br from-[#f806cc] to-[#2e0249] transition-all duration-150  text-base text-yellow-800  dark:text-white font-normal bg-[#fde047] dark:bg-[#f806cc] rounded px-3 py-1">
                Login
              </button>
              <button className="hover:scale-105  transition-all duration-150  text-base text-start border border-[#fde047] dark:border-[#f806cc] rounded px-3 py-1 font-normal">
                Sign up
              </button>
            </div>
          </div>
          <div className=" w-full mt-10 ml-1 mx-auto flex flex-col justify-start items-center h-full dark:text-white">
            <div className="sticky top-24 z-10 w-full bg-[#ffffff] dark:bg-[#2e0249] py-4 text-2xl text-center font-semibold dark:text-[#f806cc] transition-colors duration-300">
              Popular
            </div>
            <div className="flex flex-wrap justify-center items-center gap-0 md:gap-6 w-full">
              {result.slice(0, 10).map((product) => {
                if (product.hasOwnProperty("rating") && product.rating > 4.3) {
                  return (
                    <Link key={product.id} to={`/shop/${product.id}`}>
                      <Cards key={product.id} data={product} />
                    </Link>
                  );
                }
              })}
            </div>
            <div className="mt-14 sticky top-24 z-10 w-full bg-[#ffffff] dark:bg-[#2e0249] py-4 text-2xl text-center font-semibold dark:text-[#f806cc] transition-colors duration-300">
              Trending
            </div>
            <div className="flex flex-wrap gap-6 w-full">
              {result
                .filter((product) => product.price < 50)
                .slice(0, 12)
                .map((product) => (
                  <Link to={`/shop/${product.id}`}>
                    <Cards key={product.id} data={product} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <div className="mt-[1180px] items-center flex flex-col md:flex-row justify-between w-[1280px]">
          <span className="rounded scale-90 md:scale-100 text-4xl flex flex-col bg-yellow-300 dark:bg-[#2e0249] p-10 font-semibold w-[500px] text-black dark:text-[#f806cc] transition-all duration-300">
            The PS5™ console unleashes new gaming possibilities that you never
            anticipated.
            <button className=" font-normal hover:scale-105 mt-2 rounded px-3 py-1 text-start w-fit bg-white p-2 text-base dark:bg-[#f806cc] dark:text-white transition-all duration-300">
              Buy Now
            </button>
          </span>
          <img
            className=" aspect-auto w-[300px] md:w-[500px] drop-shadow-2xl   "
            src="https://i.ibb.co/x7S4yXC/ps5.png"
            alt=""
          />
        </div>
        <div className="sticky flex justify-center items-center top-24 z-10 w-full bg-[#ffffff] dark:bg-[#2e0249] py-4 text-2xl text-center font-semibold dark:text-[#f806cc] transition-colors duration-300">
          New
        </div>
        <div className="flex flex-wrap gap-6 w-full md:w-[1280px] text-black dark:text-white">
          {result
            .filter(
              (product) =>
                product.category === "laptops" ||
                product.category === "smartphones"
            )
            .map((product) => (
              <Link to={`/shop/${product.id}`}>
                <Cards key={product.id} data={product} />
              </Link>
            ))}
        </div>
        <div className="sticky top-24 mt-14 z-10 w-full bg-[#ffffff] dark:bg-[#2e0249] py-4 text-2xl text-center font-semibold dark:text-[#f806cc] transition-colors duration-300">
          Categories
        </div>
        <div className="mt-10 mb-10 flex flex-wrap gap-6 justify-center items-center w-full md:w-[1280px]">
          {category.map((product) => (
            <Link to={`/shop/${product.id}`}>
              <Category key={product.id} data={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
