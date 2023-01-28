import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';


import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

function Cards({ data }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: data.id,
        productName: data.title,
        price: data.price,
        image: "http://i.ibb.co/fvRQwPp/niercover.png",
      })
    );

    toast.success("Added Successfully!");
  };

  return (
    <div className=" group/card relative mt-10 scale-90 hover:scale-100 md:scale-100 dark:text-white  bg-[#f8f8f8] dark:bg-transparent shadow-lg dark:shadow-md md:hover:scale-105 rounded-md w-fit pb-auto flex flex-col gap-0 md:gap-2 justify-start items-center transition-all duration-150">
      <img
        className="w-48 rounded  "
        src={"http://i.ibb.co/fvRQwPp/niercover.png"}
        alt=""
      />
      <div className="absolute -bottom-3 dark: shadow rounded bg-[#f8f8f8] dark:bg-gradient-to-br w-full group-hover/card:-bottom-[45px] flex flex-col text-center gap-1 transition-all duration-300 from-[#f806cc] to-[#2e0249]">
        <span className="font-semibold text-sm md:text-base mt-2 px-3 capitalize">
          {data.title}
        </span>
        <span className=" font-light text-xs md:text-sm  capitalized">
          {data.brand}
        </span>
        <div className=" w-full px-4 flex justify-between items-center">
          <span className="text-xl md:text-2xl font-semibold">
            ${data.price}
          </span>
          <Link to="#">
            <motion.div
              whileTap={{ scale: 1.1 }}
              className="text-2xl md:text-4xl mt-1 "
              onClick={addToCart}
            >
              <ion-icon name="add-circle"></ion-icon>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cards;
