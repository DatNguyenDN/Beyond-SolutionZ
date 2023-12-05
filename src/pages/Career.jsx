import React from "react";
import Footer from "../components/Footer";

const Career = () => {
  return (
    <div className=" pt-[100px] ">
      <div id="career__first" className="flex  w-[100%] max-md:flex-col ">
        <div
          id="career__first_left"
          className="flex w-[40%] flex-col gap-5  bg-[#37393f] p-[5%] text-white max-md:w-full max-sm:w-full  "
        >
          <p className=" text-[18px]  max-sm:text-[15px] ">
            <i className="inline-block h-[16px] w-[16px] bg-emerald-500" />
            &nbsp;&nbsp;&nbsp;Career
          </p>

          <h1 className="animate__animated  animate__backInLeft text-[32px]  max-md:text-[45px] max-sm:text-[25px]">
            EXPLORE A WORLD OF OPPORTUNITIES
          </h1>

          <h2 className="text-[18px]  text-[#b9b9b9]  max-sm:text-[13px]">
            Discover career paths that encourage growth, learning, and
            collaboration.
          </h2>
        </div>

        <div
          id="career__first__right"
          className="w-[60%] max-md:w-[100%] max-md:p-3 "
        >
          <img
            className="h-[100%] w-[100%]   "
            src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcareer_headings.13a0c76c.png&w=1200&q=75"
            alt="image_about"
          />
        </div>
      </div>

      <div
        id="career__second"
        className="gap-15 animate__backInUp mt-5 flex w-full flex-row  bg-[#37393f] pb-10 max-xl:flex-col"
      >
        <div
          id="career__second__left"
          className="animate__animated w-[50%] p-[3%] max-xl:w-full max-md:w-[100%] "
        >
          <img
            className="animate__animated animate__backInUp h-[100%]  w-[400vh] max-w-[100%] rounded-md object-contain   "
            src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout_history.77c43c70.png&w=1080&q=75"
            alt="career_img"
          />
        </div>

        <div
          id="career__second__right"
          className=" grid-flow-rowitems-center w-[50%] animate-fade-left justify-center  p-[5%] max-xl:w-full max-xl:items-center max-xl:justify-center max-xl:pb-5 max-xl:text-center max-md:w-full"
        >
          <h1 className="text-[48px] text-white max-xl:text-[32px] max-sm:text-[25px]">
            JOIN OUR TEAM
          </h1>
          <p className="text-white max-sm:text-[13px]">
            Explore your potential through new and exciting challenges. Set up
            your work arrangement to integrate with your lifestyle.
          </p>
        </div>
      </div>

      <div
        id="career__third"
        className="flex h-[500px] w-full flex-col items-center justify-center gap-5 p-[5%] max-sm:h-[300px] max-sm:gap-1  max-sm:p-[2%]"
      >
        <h1 className="text-center text-[48px] text-emerald-500 max-sm:text-[25px] ">
          OPEN POSITION
        </h1>
        <p className="text-center text-[20px] max-sm:text-[13px]">
          Explore your potential through new and exciting challenges. Set up
          your work arrangement to integrate with your lifestyle.
        </p>
        <div className="flex items-center justify-center gap-10 max-sm:flex-col ">
          <h1 className="w-[200px] pt-10 text-[25px] text-emerald-500 max-sm:text-center max-sm:text-[18px] ">
            FILTER BY:
          </h1>
          <form className="w-full  ">
            <div className="flex w-[500px] items-center  border-b border-teal-500 py-2 max-sm:w-full">
              <input
                className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none "
                type="text"
                placeholder="Position"
                aria-label="First Name"
              />
            </div>
          </form>
        </div>
      </div>

      <div id="career__fourth" className="p-[5%]">
        <h1 className="pb-5 text-center text-[48px] text-emerald-500 max-sm:text-[25px]">
          WHY JOIN US
        </h1>
        <div
          id="career__fourth__list"
          className="flex gap-5 max-md:grid 
        max-md:grid-cols-2 max-md:place-items-center max-md:gap-5
      max-sm:grid max-sm:grid-cols-1 max-sm:place-items-center max-sm:gap-2   "
        >
          <div
            id="career__fourth__item"
            className="flex min-h-[255px] w-[25%] flex-col gap-5 rounded-2xl bg-[#157a70] p-[2%] text-center text-white 
            max-md:h-full max-md:w-full
            max-sm:h-full max-sm:w-full
            "
          >
            <h1 className="border-b-2 py-3  text-[20px]">
              Innovative Tech Solutions
            </h1>
            <p className="text-[16px]">
              At our core, we are driven by the power of technology to solve
              real-world challenges. Join us and engage in developing advanced
              technology solutions that challenge limits, cultivating an
              environment of creativity
            </p>
          </div>

          <div
            id="career__fourth__item"
            className="flex min-h-[255px] w-[25%] flex-col gap-5 rounded-2xl bg-[#157a70] p-[2%] text-center text-white max-md:h-full max-md:w-full"
          >
            <h1 className="border-b-2 py-3  text-[20px]">
              Collaborative Culture
            </h1>
            <p className="text-[16px]">
              Join a team that values diverse perspectives and fosters
              collaboration. Together, we solve complex challenges and drive
              technological advancements
            </p>
          </div>

          <div
            id="career__fourth__item"
            className="flex min-h-[255px] w-[25%] flex-col gap-5 rounded-2xl bg-[#157a70] p-[2%] text-center text-white max-md:h-full max-md:w-full"
          >
            <h1 className="border-b-2 py-3  text-[20px]">Work-Life Harmony</h1>
            <p className="text-[16px]">
              Enjoy a flexible work environment that respects the balance
              between your professional and personal aspirations, ensuring your
              well-being and growth
            </p>
          </div>

          <div
            id="career__fourth__item"
            className="flex min-h-[255px] w-[25%] flex-col gap-5 rounded-2xl bg-[#157a70] p-[2%] text-center text-white max-md:h-full max-md:w-full"
          >
            <h1 className="border-b-2 py-3  text-[20px]">
              Global Reach, Local Impact
            </h1>
            <p className="text-[16px]">
              Become part of a global team that creates a meaningful influence
              in every corner of the world. Projects that transcend boundaries,
              bringing positive change wherever our expertise is needed
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
