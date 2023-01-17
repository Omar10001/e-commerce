import React, { useState, useEffect } from "react";
import Cards from "../components/UI/cards";
import axios from "axios";

const Home = () => {
  const [result, setResult] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      setResult(Object.values(data.products));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
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
    <div className=" animate__animated animate__fadeIn flex justify-between gap-2 items-center min-h-screen w-full px-10 md:px-32 mx-auto  transition-all duration-300">
      <div className=" w-full md:max-w-[1400px] h-[480px] md:w-[1285px] mx-auto  py-16 px-0 relative group/slide">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full md:w-[1285px] h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* L */}
        <div
          onClick={prevSlide}
          className="hidden group-hover/slide:block text-gray-400/30 text-5xl absolute top-[45%] -translate-x-0 translate-y-[-50% left-5 cursor-pointer "
        >
          <ion-icon name="arrow-back-circle-outline"></ion-icon>
        </div>
        {/* R */}
        <div
          onClick={nextSlide}
          className="hidden group-hover/slide:block text-gray-400/30 text-5xl absolute top-[45%] translate-y-[-50% right-5 cursor-pointer "
        >
          <ion-icon name="arrow-forward-circle-outline"></ion-icon>
        </div>

        <div
          className={`absolute top-[30%] left-28 text-2xl md:text-6xl flex flex-col uppercase font-bold w-[300px] md:w-96 leading-[48px] text-[#fce9c0] dark:text-[#f806cc] transition-all duration-300 `}
        >
          <span className="dark:animate-pulse">from gamers to gamers</span>
          <div className="mt-2 flex gap-2">
            <button className="hover:scale-105 transition-all duration-150  text-base text-star text-yellow-800  dark:text-white font-normal bg-[#fce9c0] dark:bg-[#f806cc] rounded px-3 py-1">
              Login
            </button>
            <button className="hover:scale-105 transition-all duration-150  text-base text-start border border-[#fce9c0] dark:border-[#f806cc] rounded px-3 py-1 font-normal">
              Sign up
            </button>
          </div>
        </div>
        <div className="w-full mt-10 ml-1 mx-auto flex flex-col justify-start items-center h-full dark:text-white">
          <span className="text-2xl font-semibold">Popular</span>
          <div className="flex flex-wrap gap-6 w-full">
            {result.map((product) => (
              <Cards key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
