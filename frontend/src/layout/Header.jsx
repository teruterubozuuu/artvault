import React from "react";
import logo from "../assets/brand/logo.svg";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <div className="flex px-8 py-2 items-center justify-between gap-10 md:flex-row font-[Poppins] border-b border-[#d1d1d1]">
      <nav className="hidden flex flex-col md:flex-row">
        <button>Sign up</button>
        <button>Sign in</button>
      </nav>
    
    {/*Navbar Menu*/}
    <div className="md:hidden">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
        >
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            stroke="#FFC700"
            />
        </svg>
    </div>

      <img src={logo} alt="Website Logo" className="w-40" />
      <form className=" flex md:border-1 px-1 border-[#FFC700] rounded-[5px]">
        <div className="flex items-center pl-2 py-2 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#FFC700"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input 
      type="search" 
      placeholder="Search" 
      className="hidden md:flex outline-none w-[400px]"
    />
        </div>
        
      </form>

            <button className="hidden md:flex bg-[#FFC700] py-2 px-9 rounded-[5px] font-bold text-[#8B594D]">LOGIN</button>

    </div>
  );
}
