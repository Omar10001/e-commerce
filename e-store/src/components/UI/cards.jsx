import React from "react";

function Cards({data}) {
  return (
    <div className="group relative mt-10  bg-[#f8f8f8] dark:bg-transparent shadow-lg dark:shadow-md hover:scale-105 rounded-md w-fit pb-auto flex flex-col gap-2 justify-start items-center transition-all duration-150">
      <img
        className="w-48 rounded  "
        src={"http://i.ibb.co/fvRQwPp/niercover.png"}
        alt=""
      />
      <div className="absolute -bottom-3 dark: shadow rounded bg-[#f8f8f8] dark:bg-gradient-to-br w-full group-hover:-bottom-10 flex flex-col text-center gap-1 transition-all duration-300 from-[#A91079] to-[#2e0249]">
        <span className="font-semibold text-lg mt-2">{data.title}</span>
        <span className=" font-light ">{data.brand}</span>
        <div className=" w-full px-4 flex justify-between items-center">
          <span className="text-2xl font-semibold">${data.price}</span>
          <button className="text-4xl mt-1">
            <ion-icon name="add-circle"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
