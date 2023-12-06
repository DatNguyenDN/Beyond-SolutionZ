/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/logo.png";

import { close, menu } from "../assets/MenuButton/";
import DropdownComponent from "./DropDownMenu";
import DropDownSubMenu from "./DropDownMenu/DropDownSubMenu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(false);
  };

  return (
    <nav
      className="           
            h-9%
            navbar 
            fixed 
            left-0 top-0 z-50 flex w-full items-center justify-between bg-navBackground px-7  py-6"
    >
      <Link to="">
        <img
          className="nav__logo h-[36px] w-[180px] cursor-pointer "
          src={logo}
          alt="logo"
        />
      </Link>

      <ul className=" p- hidden flex-1 list-none items-center justify-end space-x-11 lg:flex ">
        <li className="navlink  relative cursor-pointer p-1 font-poppins  text-[16px] font-normal hover:text-green-500">
          <a href="/">Home</a>
        </li>

        <li className="navlink  relative cursor-pointer p-1 font-poppins  text-[16px] font-normal hover:text-green-500">
          <a href="/about">About Us</a>
        </li>

        <li className=" relative cursor-pointer p-1 font-poppins  text-[16px] font-normal hover:text-green-500">
          <DropdownComponent />
        </li>

        <li className="navlink  relative cursor-pointer p-1 font-poppins  text-[16px] font-normal hover:text-green-500">
          <a href="/contact">Contact</a>
        </li>

        <li className="navlink  relative cursor-pointer p-1 font-poppins  text-[16px] font-normal hover:text-green-500">
          <a href="/blogs">Blogs</a>
        </li>
      </ul>

      <div className="flex flex-1 items-center justify-end lg:hidden ">
        <img
          className="h-[28px] w-[28px] animate-spin cursor-pointer object-contain animate-normal animate-duration-500 animate-once   "
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } animate__animated animate__fadeInRight absolute right-0  top-20  w-full bg-dimBlack `}
          onClick={() => setToggle(true)}
        >
          <ul className="relative flex w-full flex-1 cursor-pointer list-none flex-col items-center justify-end gap-10 text-white  ">
            <li className="navlink  relative cursor-pointer p-1 font-poppins  text-[16px] font-normal hover:text-green-500">
              <a href="/">Home</a>
            </li>

            <li className="navlink  relative cursor-pointer p-1 font-poppins  text-[16px] font-normal hover:text-green-500">
              <a href="/about">About</a>
            </li>

            <li className="relative left-[-70px] ">
              <DropDownSubMenu />
            </li>
            <li className="navlink  relative cursor-pointer p-1 font-poppins  text-[16px] font-normal hover:text-green-500">
              <a href="/contact">Contact</a>
            </li>

            <li className="navlink  relative cursor-pointer p-1 font-poppins  text-[16px] font-normal hover:text-green-500">
              <a href="/blogs">Blogs</a>
            </li>
          </ul>

          {/* <ul className=" flex flex-1 list-none  flex-col items-center justify-end ">
            {navLinks.map((link) => (
              <li
                onClick={scrollToTop}
                key={link.id}
                className={`cursor-pointer  font-poppins text-[16px] font-normal text-white hover:text-green-500 
                        ${link.id === navLinks.length - 1 ? "mr-0" : "mb-10"}`}
              >
                <NavLink to={`/${link.id}`}>{link.title}</NavLink>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
