import {
    AtSignIcon,
    EmailIcon,
    PhoneIcon,
    Search2Icon,
} from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
// import {fa} from '@fon'
import React from "react";
const Footer = () => {
    return (
        <div className="bg-[#37393f] block  justify-center items-center p-[5%]   ">
            <div className="text-white flex justify-between items-center gap-12 pb-10">
                <div>
                    <img
                        className="object-contain "
                        src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogofooter1.94740334.png&w=750&q=75"
                        alt="logofooter"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <PhoneIcon
                        h={"4rem"}
                        w={"4rem"}
                        color={"#40ddb6"}
                        bgColor={"#4c4d52"}
                        rounded={"100%"}
                        p={"10%"}
                    />

                    <h1>
                        Call us
                        <br />
                        +65 8575 1690
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <EmailIcon
                        h={"4rem"}
                        w={"4rem"}
                        color={"#40ddb6"}
                        bgColor={"#4c4d52"}
                        rounded={"45px"}
                        p={"4%"}
                    />

                    <h1>
                        Mail Us
                        <br />
                        contact@gametamin.com
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <Search2Icon
                        h={"4rem"}
                        w={"4rem"}
                        color={"#40ddb6"}
                        bgColor={"#4c4d52"}
                        rounded={"45px"}
                        p={"4%"}
                    />

                    <h1>
                        Location
                        <br />
                        Peninsula Plaza, Singapore
                    </h1>
                </div>
            </div>

            <div
                id="footer__middle"
                className="flex flex-row justify-between py-12  "
            >
                <div className=" md:block hidden  flex-col text-white">
                    <p className="text-md text-cyan-600">
                        <i className="bg-emerald-500 w-[16px] h-[16px] inline-block" />
                        &nbsp;&nbsp;&nbsp;Quick Link
                    </p>
                    <div className="flex flex-col">
                        <NavLink>Home</NavLink>
                        <NavLink>About</NavLink>
                        <NavLink>Blog</NavLink>
                        <NavLink>Services</NavLink>
                        <NavLink>Contact</NavLink>
                    </div>
                </div>

                <div className="flex md:block hidden flex-col text-white">
                    <p className="text-md text-cyan-600">
                        <i className="bg-emerald-500 w-[16px] h-[16px] inline-block" />
                        &nbsp;&nbsp;&nbsp;Our Services
                    </p>
                    <div className="flex flex-col">
                        <NavLink>Services</NavLink>
                        <NavLink>App</NavLink>
                        <NavLink>Game</NavLink>
                        <NavLink>Career</NavLink>
                    </div>
                </div>

                <div className="bg-gray-500 col-span-2 justify-center space-y-4 p-5  text-white w=[60%]   max-md:py-5 max-md:w-[780px] max-sm:w-[500px] xl:w-[700px] xl:right-5">
                    <h1 className="text-2xl">Subscribe</h1>
                    <h2 className="text-lg">
                        Join Our Mailing List & to get our news.
                    </h2>
                    <div className="">
                        <input
                            className="h-[50px] w-[350px]"
                            placeholder="Your email address..."
                        ></input>
                        <button className=" bg-blue-400 text-white h-[50px] w-[100px]">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div
                id="footer__bottom"
                className="text-white flex justify-between items-center pt-10"
            >
                <div>
                    <h2>
                        Copyright © Gametamin| Designed by Gametamin - Powered
                        by Gametamin
                    </h2>
                </div>

                <div className="flex gap-3">
                    <h2>Follow: </h2>
                    <AtSignIcon />
                    <AtSignIcon />
                    <AtSignIcon />
                    <AtSignIcon />
                </div>
            </div>
        </div>
    );
};

export default Footer;
