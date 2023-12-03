import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image/logo.png";
import { navLinks } from "../constants";
import { close, menu } from "../assets/MenuButton/";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav
            className="
            w-full 
            h-9% 
            flex px-7 py-6 justify-between items-center bg-navBackground fixed top-0 left-0  navbar "
        >
            <img
                className="nav__logo w-[180px] h-[36px] "
                src={logo}
                alt="logo"
            />

            <ul className=" list-none lg:flex hidden justify-end items-center flex-1 p- ">
                {navLinks.map((link) => (
                    <li
                        key={link.id}
                        className={`font-poppins  font-normal cursor-pointer text-[16px] hover:text-green-500  relative p-1 navlink
                        ${link.id === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                    >
                        <NavLink to={`/${link.id}`}>{link.title}</NavLink>
                    </li>
                ))}
            </ul>

            <div className="lg:hidden flex flex-1 justify-end items-center ">
                <img
                    className="w-[28px] h-[28px] object-contain cursor-pointer animate-spin animate-once animate-duration-500 animate-normal   "
                    src={toggle ? close : menu}
                    alt="menu"
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div
                    className={`${
                        toggle ? "flex" : "hidden"
                    } p-6 bg-dimBlack absolute top-20 right-0  w-full   animate-fade-right animate-once animate-ease-linear`}
                >
                    <ul className=" list-none flex flex-col  justify-end items-center flex-1 ">
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={`font-poppins  font-normal cursor-pointer text-[16px] text-white hover:text-green-500 
                        ${link.id === navLinks.length - 1 ? "mr-0" : "mb-10"}`}
                            >
                                <NavLink to={`/${link.id}`}>
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
