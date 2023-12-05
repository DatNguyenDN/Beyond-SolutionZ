import React from "react";
import banner from "../../assets/image/banner.png";
import "animate.css";
const Hero = () => {
  return (
    <section id="hero" className="flex-col justify-center mt-4 p-[10%] sm:p-16 ">
      <div className="">
        <h1
          className="
                animate__animated animate__backInLeft bg-gradient-to-r from-purple-400 to-pink-600
                 bg-clip-text pb-3 pt-9 text-center text-6xl
                 font-extrabold  
                 text-transparent max-sm:text-[25px] "
        >
          Empowering Your App is Journey to Success
        </h1>
      </div>

      <img
        className="animate__animated animate__backInRight  h-auto w-full p-[5%] "
        src={banner}
        alt="banner"
      />
    </section>
  );
};

export default Hero;
