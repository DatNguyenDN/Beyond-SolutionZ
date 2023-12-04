import React from "react";
import Footer from "../components/Footer";
const About = () => {
  return (
    <section id="about__container" className="flex flex-col pt-[100px] ">
      <div id="about__first" className="flex  w-[100%] max-md:flex-col ">
        <div
          id="about__first_text"
          className="flex w-[40%]  flex-col bg-[#37393f] p-[5%] text-white max-md:w-full max-sm:w-full  "
        >
          <p className=" animate-fade-up text-[18px] animate-normal animate-duration-1000 max-sm:text-[16px] ">
            <i className="inline-block h-[16px] w-[16px] bg-emerald-500" />
            &nbsp;&nbsp;&nbsp;About Us
          </p>

          <h1 className="animate-fade-up text-[60px] animate-delay-200 animate-normal animate-duration-1000 max-md:text-[45px] max-sm:text-[32px]">
            Know About Us
          </h1>

          <h2 className="animate-fade-up text-[18px]  text-[#b9b9b9] animate-normal animate-duration-1000 max-sm:text-[16px]">
            Great products are made by great people
          </h2>
        </div>

        <div
          id="about__first_image"
          className="w-[60%] max-md:w-[100%] max-md:p-3"
        >
          <img
            className="h-[100%] w-[100%] animate-fade-left animate-one animate-ease-linear animate-normal "
            src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout_headings.826f5e31.png&w=1200&q=75"
            alt="image_about"
          />
        </div>
      </div>

      <div
        id="about__second"
        className="gap-15 mt-5 flex w-full flex-row bg-[#37393f] p-[5%] max-xl:flex-col"
      >
        <div
          id="about__second__image"
          className="w-[50%] p-[3%] max-xl:w-full max-md:w-[100%]"
        >
          <img
            className="h-[100%] w-[400vh] max-w-[100%] animate-fade-up rounded-md object-contain animate-delay-300 animate-normal animate-duration-1000 animate-ease-linear   "
            src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout_history.77c43c70.png&w=1080&q=75"
            alt="about_img"
          />
        </div>

        <div
          id="about__second__text"
          className="grid w-[50%] animate-fade-left grid-flow-row items-center justify-center gap-4 p-[5%] animate-delay-300 animate-normal animate-duration-1000 animate-ease-linear max-xl:w-full max-xl:items-center max-xl:justify-center max-xl:pb-5 max-xl:text-center max-md:w-full"
        >
          <h1 className="text-[48px] text-white max-xl:text-[32px]">
            ABOUT COMPANY
          </h1>
          <h4 className="text-gray-400">
            Gametamin is a company specialising in designing and producing
            mobile games with a base in Singapore. From the love of games,
            always wanting to conquer the interesting, hard-level game, logic
            but relaxing, this is the seed that makes up the presence of
            Gametamin today. Experience and desire from the user’s position have
            helped the founder know their needs and find the way to meet them
            through games.
          </h4>
          <h4 className="text-gray-400">
            Our mission is to bring the best value to users of all ages with
            different styles, anytime, anywhere. Convenience, flexibility but
            fun is what we aim for.
          </h4>
          <h1 className="text-[48px] text-white max-xl:text-[32px]">
            JOIN OUR TEAM
          </h1>
          <h4 className="text-gray-400">
            Be a part of creativity and innovation – Join us and shape the
            future together!
          </h4>
          <div className="flex h-[50px] w-[200px] items-center  justify-center rounded-xl bg-blue-500 text-center   max-xl:mx-auto  ">
            <button className="flex items-center justify-center text-black  ">
              SEE OPEN POSITONS
            </button>
          </div>
        </div>
      </div>
      <div id="about__third" className="flex flex-col  p-[5%] text-center">
        <h1 className="mx-auto py-5 text-[48px] font-semibold text-[#40ddb6] max-sm:text-[30px] ">
          HOW WE WORK
        </h1>
        <div className="flex-row-3 flex gap-5 text-white max-lg:flex-col max-md:flex-col">
          <div className="rounded-xl bg-[#232428] p-[3%] max-md:h-[700px]">
            <h1 className="text-[32px]">CLARITY, DISCIPLINE & CONSISTENCY</h1>
            <h3 className="text-[16px]">
              Our clarity shines through in our goals, orientation, and
              strategies. Consistency in mission-driven action focuses our
              energy to overcome any challenges.
            </h3>
            <img
              className="object-contain max-lg:mx-auto max-lg:items-center max-lg:justify-center "
              src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout_history_box1.0991051d.png&w=640&q=75"
              alt="photo1"
            />
          </div>

          <div className="rounded-xl bg-[#232428] p-[3%] max-md:h-[700px]">
            <h1 className="text-[32px]">CLARITY, DISCIPLINE & CONSISTENCY</h1>
            <h3 className="text-[16px]">
              Our clarity shines through in our goals, orientation, and
              strategies. Consistency in mission-driven action focuses our
              energy to overcome any challenges.
            </h3>
            <img
              className="object-contain max-lg:mx-auto max-lg:items-center max-lg:justify-center max-md:h-[90%] "
              src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout_history_box2.debd52ef.png&w=640&q=75"
              alt="photo1"
            />
          </div>

          <div className="rounded-xl bg-[#232428] p-[3%] max-md:h-[700px]">
            <h1 className="text-[32px]">CLARITY, DISCIPLINE & CONSISTENCY</h1>
            <h3 className="text-[16px]">
              Our clarity shines through in our goals, orientation, and
              strategies. Consistency in mission-driven action focuses our
              energy to overcome any challenges.
            </h3>
            <img
              className="object-contain max-lg:mx-auto max-lg:items-center max-lg:justify-center "
              src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout_history_box3.4dee08d8.png&w=640&q=75"
              alt="photo1"
            />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default About;
