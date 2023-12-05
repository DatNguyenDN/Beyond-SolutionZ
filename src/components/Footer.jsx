import {
  AtSignIcon,
  EmailIcon,
  PhoneIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import {
  GithubOutlined,
  InstagramOutlined,
  AppleOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
// import {fa} from '@fon'
import React from "react";
const Footer = () => {
  return (
    <div className="block items-center  justify-center bg-[#37393f] p-[3%]   ">
      <div
        id="footer__top"
        className="flex items-center justify-between gap-10 pb-10 text-white max-lg:flex-col max-sm:mr-12 max-sm:text-sm"
      >
        <div>
          <img
            className="w-[200px]  object-contain"
            src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogofooter1.94740334.png&w=750&q=75"
            alt="logofooter"
          />
        </div>

        <div className="flex items-center gap-3 ">
          <PhoneIcon
            h={"4rem"}
            w={"4rem"}
            color={"#40ddb6"}
            bgColor={"#4c4d52"}
            rounded={"100%"}
            p={"10%"}
          />

          <h1 className="w-[100px]">
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

          <h1 className="w-[100px]">
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

          <h1 className="w-[100px]">
            Location
            <br />
            Peninsula Plaza, Singapore
          </h1>
        </div>
      </div>

      <div
        id="footer__middle"
        className="flex flex-row justify-between border-t-2 border-indigo-300 py-12   "
      >
        <div className=" hidden flex-col  text-white md:block">
          <p className="text-md text-cyan-600">
            <i className="inline-block h-[16px] w-[16px] bg-emerald-500" />
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

        <div className="flex hidden flex-col text-white md:block">
          <p className="text-md text-cyan-600">
            <i className="inline-block h-[16px] w-[16px] bg-emerald-500" />
            &nbsp;&nbsp;&nbsp;Our Services
          </p>
          <div className="flex flex-col">
            <NavLink>Services</NavLink>
            <NavLink>App</NavLink>
            <NavLink>Game</NavLink>
            <NavLink>Career</NavLink>
          </div>
        </div>

        <div className="w=[60%] col-span-2 justify-center space-y-4 rounded-xl bg-gray-500  p-5 text-white   max-md:w-[780px] max-md:py-5 max-sm:w-[500px] xl:right-5 xl:w-[700px]">
          <h1 className="text-2xl">Subscribe</h1>
          <h2 className="text-lg">Join Our Mailing List & to get our news.</h2>
          <div className="">
            <input
              className="h-[50px] w-[70%] rounded-l-xl"
              placeholder="Your email address..."
            ></input>
            <button className=" h-[50px] w-[30%] rounded-r-xl bg-blue-400 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div
        id="footer__bottom"
        className="flex items-center justify-between gap-5 border-t-2 border-indigo-300 pt-10 text-white max-sm:flex-col"
      >
        <div>
          <h2 className="max-sm:pl-5">
            Copyright © Gametamin | Designed by{" "}
            <span className="text-emerald-500">Gametamin</span> - Powered by{" "}
            <span className="text-pink-500">Gametamin</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <h2 className="text-blue-400">Follow : </h2>
          <div className="flex cursor-pointer items-center gap-2">
            <GithubOutlined />
            <InstagramOutlined />
            <AppleOutlined />
            <AliwangwangOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
