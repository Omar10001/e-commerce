import React, { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import axios from "axios";
import Cards from "./cards";
import "animate.css";

function Search() {
  
  const [result, setResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const debouncedValue = useDebounce(searchTerm, 500);

  const searchBar = async (title) => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/search?q=${title}`
      );
      setResult(Object.values(data.products));
    } catch (error) {
      console.error(error);
    }
  };


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     // 👇 Get input value
  //     searchBar(searchTerm);
  //   }
  // };

  useEffect(() => {
    searchBar(searchTerm);
  }, [debouncedValue]);

  return (
    <div className=" flex flex-col justify-center items-center w-full h-full md:px-28 ">
      <div className="flex w-full h-full justify-center">
        <div className="relative">
          <input
            value={searchTerm}
            onChange={handleChange}
            type="text"
            placeholder="Search Debouncy &#128521; "
            className="text-black customshadow top-28 dark:text-white font-medium text-lg dark:caret-[#f806cc] dark:placeholder:text-[#f806cc]/50 w-full md:w-[610px] py-3 pl-6 pr-14 rounded-full focus:outline-none shadow-lg border-2 dark:border-[#f806cc] bg-transparent"
          />
          <button
            onClick={() => searchBar(searchTerm)}
            className="absolute right-1 top-[3.6px] text-5xl text-black dark:text-[#f806cc] hover:text-[#fcdd7a] hover:dark:text-white transition-all duration-300  "
          >
            <ion-icon name="search-circle"></ion-icon>
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap w-full justify-center items-center">
        {result?.length > 0 ? (
          <div className=" animate__animated animate__fadeIn flex flex-wrap gap-6 justify-center items-center">
            {result.map((res) => (
              <Cards key={res.id} data={res} />
            ))}
          </div>
        ) : (
          <div className="w-full flex justify-center items-center h-60 gap-3">
            {searchTerm.length > 0 ? (
              <div className="flex justify-center items-center gap-3">
                <span className="text-center text-3xl text-black dark:text-[#f806cc] font-semibold">
                  No result for "{searchTerm}"
                </span>
                <div className="flex justify-center items-center text-2xl text-[#fcdd7a] dark:text-[#f806cc] ">
                  <ion-icon name="bug"></ion-icon>
                </div>
              </div>
            ) : (
              <br />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
