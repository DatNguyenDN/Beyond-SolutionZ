

/* eslint-disable jsx-a11y/anchor-is-valid */
import { ArrowRightIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import React, { useEffect, useRef, useState } from "react";

export default function DropDownSubMenu() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [arrowUp, setArrowUp] = useState(false);
    const dropdownRef = useRef(null);
  
    const toggleOpen = () => {
      setMenuOpen(!menuOpen);

    };
  
    const closeMenu = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target !== dropdownRef.current.previousSibling // Check if the click was not on the button
      ) {
        setMenuOpen(false);
  
      }
    };
  
    useEffect(() => {
      window.addEventListener("click", closeMenu);
      return () => {
        window.removeEventListener("click", closeMenu);
      };
    }, []);
    return (



        <div className="flex flex-col items-center  ">
            <div className="inline-block ">
                <button
                    type="button"
                    onClick={toggleOpen}
                    className="relative inline-block  right-[-78px]   h-full "
                >
                    Product&nbsp;
                    
           {menuOpen ? <ChevronUpIcon className="animate-spin animate-once animate-duration-200" style={{ fontSize: "25px" }}/> : <ChevronDownIcon className="animate-spin animate-once animate-duration-200 animate-reverse"  style={{ fontSize: "25px" }}/>}
   
         
          
                   
                </button>

                {menuOpen && (
          <div
            ref={dropdownRef}
            id="dropmenu"
          className="relative   origin-center top-[15px]  left-[75px] items-center  rounded-xl "
          >
            <div className=" font-poppins animate__flipInX animate__animated items-center justify-center  space-y-2 border-y-2 border-emerald-500">
              <a
                href="/app"
                className=" relative flex items-center px-4 py-2 text-base text-white  hover:text-emerald-500 subDropDown"
              >
                App
              </a>
              <a
                href="/game"
                className="relative flex items-center px-4 py-2 text-base text-white  hover:text-emerald-500 subDropDown" 
              >
                Game
              </a>
              <a
                href="/services"
                className="relative flex items-center px-4 py-2 text-base text-white  hover:text-emerald-500 subDropDown"
              >
                Services
              </a>

              <a
                href="/career"
                className="relative flex items-center px-4 py-2 text-base text-white  hover:text-emerald-500 subDropDown"
              >
                Career
              </a>
            </div>
          </div>
        )}
            </div>
        </div>
    );
}