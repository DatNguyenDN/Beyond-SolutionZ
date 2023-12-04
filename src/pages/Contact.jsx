import React, { useState } from "react";
import Footer from "../components/Footer";
const Contact = () => {
  const [selectOption, setSelectOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectOption(e.target.value);
  };

  return (
    <>
      <section
        id="contact__container"
        className="flex flex-col p-[5%] pt-[100px]"
      >
        <div
          id="contact__text"
          className="flex  flex-col items-center justify-center gap-4 px-10 text-center "
        >
          <h1 className="animate-fade-up text-[48px] font-semibold text-emerald-500 max-sm:text-[25px] animate__backInLeft">
            CONTACT US
          </h1>
          <h4 className="max-w-[600px] max-sm:text-[13px]">
            We are here to assist you – whether it is partnership, product
            support, media inquiries, or career opportunities. Scroll down to
            connect with us.
          </h4>
        </div>
        <div
          id="contact__image"
          className="mx-auto flex items-center justify-center p-[5%]"
        >
          <img
            className="animate-fade-up animate-normal animate-once animate-ease-linear animate__backInUp "
            src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_contact.81f771df.png&w=1200&q=75"
            alt="contact_image"
          />
        </div>

        <div id="contact__form" className="text-center ">
          <h1 className=" text-[46px]  max-lg:text-xl max-lg:font-semibold max-sm:text-base max-sm:font-semibold">
            YOU HAVE A QUESTION ABOUT{" "}
            {selectOption ? `${selectOption}` : "RECRUITMENT?"} WRITE TO US
          </h1>

          <div
            id="form"
            className="flex w-[100%]  flex-col items-center justify-center "
          >
            <label for="underline_select" className="sr-only  items-center ">
              Underline select
            </label>
            <select
              id="underline_select"
              value={selectOption || ""}
              onChange={handleOptionChange}
              className="peer mt-5 block  w-[30%] appearance-none border-0 border-b-2 border-teal-500 bg-transparent px-0 py-2.5 text-sm text-gray-500 shadow-xl focus:border-gray-200 focus:outline-none focus:ring-0 dark:border-gray-700 dark:text-gray-400 max-sm:w-[65%]"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value={"PARTNER ?"}>Partner</option>
              <option value={"OTHER ?"}>Other</option>
            </select>
          </div>

          <div
            id="contact__form__details"
            className=" gap mx-auto grid grid-cols-2 place-items-center gap-20 p-[5%]  max-xl:grid-cols-1 max-md:grid-cols-1  max-sm:gap-10"
          >
            <div>
              <form className="w-full  ">
                <div className="flex w-[500px] items-center  border-b border-teal-500 py-2 max-sm:w-full">
                  <input
                    className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none "
                    type="text"
                    placeholder="First Name"
                    aria-label="First Name"
                  />
                </div>
              </form>
            </div>
            <div>
              <form className="w-full ">
                <div className="flex w-[500px] items-center  border-b border-teal-500 py-2 max-sm:w-full">
                  <input
                    className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none"
                    type="text"
                    placeholder="Last Name"
                    aria-label="Last Name"
                  />
                </div>
              </form>
            </div>
            <div>
              <form className="w-full ">
                <div className="flex w-[500px] items-center  border-b border-teal-500 py-2 max-sm:w-full">
                  <input
                    className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none"
                    type="text"
                    placeholder="Work Email"
                    aria-label="Work Email"
                  />
                </div>
              </form>
            </div>
            <div>
              <form className="w-full ">
                <div className="flex w-[500px] items-center  border-b border-teal-500 py-2 max-sm:w-full">
                  <input
                    className="mr-3 w-full appearance-none border-none bg-transparent px-2 py-1 leading-tight text-gray-700 focus:outline-none"
                    type="text"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                  />
                </div>
              </form>
            </div>
          </div>

          <div id="Contact___textarea" className="flex  justify-center p-[2%] ">
            <label
              for="large-input"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            ></label>
            <input
              placeholder="How we can help you?"
              type="text"
              id="large-input"
              className="sm:text-md flex  h-[130px]  w-[80%]  rounded-lg  border border-teal-500  bg-gray-50 p-4 text-center text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 max-sm:h-[100px] max-sm:w-full"
            />
          </div>
          <button className="mx-auto mt-2 flex h-[40px] w-[90px] items-center justify-center rounded-xl bg-emerald-500 max-md:w-[100%] md:w-[50%] lg:w-[20%] ">
            Submit
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
