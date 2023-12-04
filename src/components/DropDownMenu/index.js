/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useRef, useEffect } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { ArrowRightIcon, ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from "@chakra-ui/icons";

export default function DropdownComponent() {

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



        <div className="inline-flex">
            <div className="inline-flex">
                <button
                    type="button"
                    onClick={toggleOpen}
                    className="inline-flex items-center justify-center h-full "
                >
                    Product&nbsp;
                    
           {menuOpen ? <ChevronUpIcon className="animate-spin animate-once animate-duration-200" style={{ fontSize: "25px" }}/> : <ChevronDownIcon className="animate-spin animate-once animate-duration-200 animate-reverse"  style={{ fontSize: "25px" }}/>}
   
         
          
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg> */}
                </button>

                {menuOpen && (
          <div
            ref={dropdownRef}
            id="dropmenu"
            className="absolute top-3 right-0 z-10 w-39 mt-6  origin-top-right bg-white border border-gray-100 rounded-xl shadow-lg"
          >
            <div className="p-2 font-poppins animate-flip-down ">
              <a
                href="/app"
                className=" relative flex items-center px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-emerald-500 subnavlink"
              >
                <ArrowRightIcon style={{fontSize:'10px'}}/>&nbsp;&nbsp;App
              </a>
              <a
                href="/game"
                className="relative flex items-center px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-emerald-500 subnavlink" 
              >
                <ArrowRightIcon style={{fontSize:'10px'}}/>&nbsp;&nbsp;Game
              </a>
              <a
                href="/services"
                className="relative flex items-center px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-emerald-500 subnavlink"
              >
                <ArrowRightIcon style={{fontSize:'10px'}}/>&nbsp;&nbsp;Services
              </a>

              <a
                href="/carrer"
                className="relative flex items-center px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-emerald-500 subnavlink"
              >
                <ArrowRightIcon style={{fontSize:'10px'}}/>&nbsp;&nbsp;Carrer
              </a>
            </div>
          </div>
        )}
            </div>
        </div>
    );
}