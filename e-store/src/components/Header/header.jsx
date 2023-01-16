import React from "react";
import Logo from "../../assets/LOGO.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import DarkMode from "../darkMode/darkMode";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="z-10 fixed top-0 w-full bg-[#f8f8f8] dark:bg-[#2E0249] shadow px-8 md:px-0 transition-all duration-300">
      <div className="justify-between px-3 mx-auto lg:max-w-7xl md:items-center flex md:px-0 transition-all duration-300 ">
        <div className="flex items-center gap-4 md:gap-0">
          <div className={`md:visible md:mt-0 mt-2 ${navbar ? "visible" : "invisible"}`}>
            <DarkMode />
          </div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <NavLink to="home">
              <svg
                className="w-36 md:mr-0 mr-6  dark:fill-[#F806CC] dark:hover:stroke-none hover:stroke-[#F806CC] hover:fill-transparent transition-all duration-300"
                viewBox="0 0 227 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M55.04 19.304V39.464C55.04 41.48 55.536 43.032 56.528 44.12C57.52 45.208 58.976 45.752 60.896 45.752C62.816 45.752 64.288 45.208 65.312 44.12C66.336 43.032 66.848 41.48 66.848 39.464V19.304H75.056V39.416C75.056 42.424 74.416 44.968 73.136 47.048C71.856 49.128 70.128 50.696 67.952 51.752C65.808 52.808 63.408 53.336 60.752 53.336C58.096 53.336 55.712 52.824 53.6 51.8C51.52 50.744 49.872 49.176 48.656 47.096C47.44 44.984 46.832 42.424 46.832 39.416V19.304H55.04ZM114.996 25.928C118.324 25.928 120.964 26.936 122.916 28.952C124.9 30.968 125.892 33.768 125.892 37.352V53H117.732V38.456C117.732 36.728 117.268 35.4 116.34 34.472C115.444 33.512 114.196 33.032 112.596 33.032C110.996 33.032 109.732 33.512 108.804 34.472C107.908 35.4 107.46 36.728 107.46 38.456V53H99.2998V38.456C99.2998 36.728 98.8358 35.4 97.9078 34.472C97.0118 33.512 95.7638 33.032 94.1638 33.032C92.5638 33.032 91.2998 33.512 90.3718 34.472C89.4758 35.4 89.0278 36.728 89.0278 38.456V53H80.8198V26.216H89.0278V29.576C89.8598 28.456 90.9478 27.576 92.2918 26.936C93.6358 26.264 95.1558 25.928 96.8518 25.928C98.8678 25.928 100.66 26.36 102.228 27.224C103.828 28.088 105.076 29.32 105.972 30.92C106.9 29.448 108.164 28.248 109.764 27.32C111.364 26.392 113.108 25.928 114.996 25.928ZM130 39.56C130 36.808 130.512 34.392 131.536 32.312C132.592 30.232 134.016 28.632 135.808 27.512C137.6 26.392 139.6 25.832 141.808 25.832C143.696 25.832 145.344 26.216 146.752 26.984C148.192 27.752 149.296 28.76 150.064 30.008V26.216H158.272V53H150.064V49.208C149.264 50.456 148.144 51.464 146.704 52.232C145.296 53 143.648 53.384 141.76 53.384C139.584 53.384 137.6 52.824 135.808 51.704C134.016 50.552 132.592 48.936 131.536 46.856C130.512 44.744 130 42.312 130 39.56ZM150.064 39.608C150.064 37.56 149.488 35.944 148.336 34.76C147.216 33.576 145.84 32.984 144.208 32.984C142.576 32.984 141.184 33.576 140.032 34.76C138.912 35.912 138.352 37.512 138.352 39.56C138.352 41.608 138.912 43.24 140.032 44.456C141.184 45.64 142.576 46.232 144.208 46.232C145.84 46.232 147.216 45.64 148.336 44.456C149.488 43.272 150.064 41.656 150.064 39.608ZM172.418 30.68C173.378 29.208 174.578 28.056 176.018 27.224C177.458 26.36 179.058 25.928 180.818 25.928V34.616H178.562C176.514 34.616 174.978 35.064 173.954 35.96C172.93 36.824 172.418 38.36 172.418 40.568V53H164.21V26.216H172.418V30.68ZM211.19 26.216V53H202.982V49.352C202.15 50.536 201.014 51.496 199.574 52.232C198.166 52.936 196.598 53.288 194.87 53.288C192.822 53.288 191.014 52.84 189.446 51.944C187.878 51.016 186.662 49.688 185.798 47.96C184.934 46.232 184.502 44.2 184.502 41.864V26.216H192.662V40.76C192.662 42.552 193.126 43.944 194.054 44.936C194.982 45.928 196.23 46.424 197.798 46.424C199.398 46.424 200.662 45.928 201.59 44.936C202.518 43.944 202.982 42.552 202.982 40.76V26.216H211.19Z" />
                <path d="M221 41C217.692 41 215 43.6916 215 47C215 50.3084 217.692 53 221 53C224.308 53 227 50.3084 227 47C227 43.6916 224.308 41 221 41ZM221.577 50.2282H220.423V49.0743H221.577V50.2282ZM221.462 48.3846H220.538L220.365 43.7692H221.635L221.462 48.3846Z" />
              </svg>
            </NavLink>
            <div className="md:hidden">
              <button
                className="p-2 text-black dark:text-[#F806CC] rounded-md outline-none text-2xl mt-3"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <ion-icon name="close-outline"></ion-icon>
                ) : (
                  <ion-icon name="menu-outline"></ion-icon>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 mr-0 md:mr-20 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black dark:text-[#F806CC]">
                <NavLink to="home">Home</NavLink>
              </li>
              <li className="text-black dark:text-[#F806CC]">
                <NavLink to="shop">Shop</NavLink>
              </li>
              <li className="text-black dark:text-[#F806CC]">
                <NavLink to="cart">Cart</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={`md:visible flex gap-3 mt-2 ${navbar ? "invisible" : "visible"}`}>
          <button className="text-xl md:text-3xl dark:text-[#F806CC]">
            <ion-icon name="heart"></ion-icon>
          </button>
          <button className="text-xl md:text-3xl dark:text-[#F806CC]">
            <ion-icon name="cart"></ion-icon>{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
