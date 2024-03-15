import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [downArrow, setDwonArrow] = useState(false);

  return (
    <header className="flex justify-between px-10 py-10 relative">
      <div>
        <h1 className="text-red-600 text-2xl font-bold">Moslem Travel Umroh</h1>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden absolute text-2xl right-[35px] top-[15px] cursor-pointer"
      >
        {open ? <IoClose /> : <GiHamburgerMenu />}
      </div>
      <nav>
        <ul
          className={`flex flex-col md:flex-row gap-y-[24px] bg-white md:bg-transparent p-10   md:z-auto z-[11] md:w-auto sm:p-10 md:p-0 pl-[15px] w-[300px]  md:gap-[10px] 2xl:gap-[40px] md:items-center md:text-[16px] text-[#414141] font-semibold absolute md:static  transition-all duration-500 ease-in ${
            open ? " right-[0px] z-10 top-10 w-full" : "right-[-299px]  z-10"
          }`}
        >
          <li className="hover:underline transition-all duration-200">
            <Link to={"/"}>Home</Link>
          </li>
          <li
            onClick={() => setDwonArrow(!downArrow)}
            className="hover:underline transition-all duration-200"
          >
            <Link className="flex items-center gap-1">
              Paket{downArrow ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </Link>
            <ul
              className={`absolute ${
                downArrow ? "block z-20" : "hidden"
              } bg-white mt-2 p-2`}
            >
              <li>Umroh</li>
              <li>Haji</li>
              <li>Haji</li>
            </ul>
          </li>
          <li className="hover:underline transition-all duration-200">
            <Link to={"/product"}>Product</Link>
          </li>
          <li className="hover:underline transition-all duration-200">
            <Link to={'/test'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
