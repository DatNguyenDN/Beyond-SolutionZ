import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/logo.png";
import { navLinks } from "../constants";
import { close, menu } from "../assets/MenuButton/";
import DropdownComponent from "./DropDownMenu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to 'auto' for an instant scroll
    });
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

      <ul
        onClick={scrollToTop}
        className=" p- hidden flex-1 list-none items-center justify-end space-x-11 lg:flex "
      >
        <li className="navlink  relative cursor-pointer p-1 font-poppins  text-[16px] font-normal hover:text-green-500">
          <NavLink to="/">Home</NavLink>
        </li>

        <li className="navlink  relative cursor-pointer p-1 font-poppins  text-[16px] font-normal hover:text-green-500">
          <NavLink to="about">About Us</NavLink>
        </li>

        <li className=" relative cursor-pointer p-1 font-poppins  text-[16px] font-normal hover:text-green-500">
          <DropdownComponent />
        </li>

        <li className="navlink  relative cursor-pointer p-1 font-poppins  text-[16px] font-normal hover:text-green-500">
          <NavLink to="contact">Contact</NavLink>
        </li>

        <li className="navlink  relative cursor-pointer p-1 font-poppins  text-[16px] font-normal hover:text-green-500">
          <NavLink to="blogs">Blogs</NavLink>
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
          } absolute right-0 top-20 w-full animate-fade-right  bg-dimBlack   p-6 animate-once animate-ease-linear`}
          onClick={() => setToggle(false)}
        >
          <ul className=" flex flex-1 list-none  flex-col items-center justify-end ">
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
