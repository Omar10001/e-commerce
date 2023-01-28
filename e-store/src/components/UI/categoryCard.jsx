import React from "react";

function Category({ data }) {
  return (
    <div className="transition-all duration-400 scale-75 md:scale-100 bg-yellow-300 border-2 hover:text-yellow-300 border-yellow-300 dark:bg-[#f806cc] dark:border-[#f806cc] dark:hover:text-[#f806cc] hover:bg-transparent dark:hover:bg-transparent hover:scale-95 w-[302px] h-[302px] text-3xl font-semibold capitalize text-center px-3 flex justify-center items-center rounded ">
      {data}
    </div>
  );
}

export default Category;
