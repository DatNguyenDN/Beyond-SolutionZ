import React from "react";
import Footer from '../components/Footer'
import 'animate.css';

const Blogs = () => {
  return (
    <main>
      <div className="h-[585px] w-full pt-[100px]">
        <div className="h-full w-full bg-[url(https://beyondsolutionz.com/_next/static/media/blog_banner_header.12daec78.png)] ">
          <div className="h-full w-[40%] bg-[#37393fe8] p-[5%] text-white opacity-90 max-sm:w-full ">
            <p className=" animate-fade-up text-[18px] animate-normal animate-duration-1000 max-sm:align-bottom max-sm:text-[16px]">
              <i className="inline-block h-[16px] w-[16px] bg-emerald-500" />
              &nbsp;&nbsp;&nbsp; Recent News
            </p>
            <h1 className="text-[60px] max-sm:text-[45px] animate__animated animate__bounceInLeft">
              We Keep You Updated
            </h1>
          </div>
        </div>
      </div>
      <div className="pt-10 p-[10%]">
        <div className="text-center">
        <p className=" animate-fade-up text-[18px] animate-normal animate-duration-1000 max-sm:align-bottom max-sm:text-[16px]">
              <i className="inline-block h-[16px] w-[16px] bg-emerald-500" />
              &nbsp;&nbsp;&nbsp;Our Recent News
            </p>
               <h1 className="text-[40px] max-sm:text-[25px]">Featured News And Insights</h1>
        </div>
        <div id='blog__item' 
        className=" p-[5%] grid grid-cols-2 gap-10 max-md:grid-cols-1 max-sm:text-sm animate__animated animate__bounceInRight " >

          <div className=" w-full min-h-full space-y-5">
            <img
            className="object-contain w-full h-auto"
            src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog_new1.6c6b78d6.png&w=640&q=75"
            alt="item"
            />
            <h1 className="text-[30px] max-sm:text-[20px] ">Mobile Landscape in Tier 1 Countries</h1>
            <h3>Exploring the mobile landscape in Tier 1 countries unveils a dynamic environment defined by rapid technological advancements and high user engagement. In this overview, we offer insights that can guide your app is success in these</h3>
            <a href="/" className="text-blue-600">Read More</a>

          </div>

          <div className=" w-full min-h-full space-y-5">
            <img
            className="object-contain w-full h-auto"
            src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog_new2.e5ed1bc4.png&w=640&q=75"
            alt="item"
            />
            <h1 className="text-[30px] max-sm:text-[20px]">Best Practices to Optimize App is Description</h1>
            <h3>Crafting a compelling app description is a crucial element in attracting users and boosting downloads. The art of conveying your app is value, features, and uniqueness within limited characters requires strategic thinking and creativity.</h3>
            <a href="/" className="text-blue-600">Read More</a>

          </div>

          <div className=" w-full min-h-full space-y-5" >
            <img
            className="object-contain w-full h-auto"
            src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog_new4.28910e22.png&w=640&q=75"
            alt="item"
            />
            <h1 className="text-[30px] max-sm:text-[20px]">How to Localize Your App in China</h1>
            <h3>Unlocking the Chinese market requires a thoughtful approach to app localization. Successfully navigating cultural nuances, language intricacies, and user preferences is essential for making your app resonate with the Chinese audience.</h3>
            <a href="/" className="text-blue-600">Read More</a>

          </div>

          <div className=" w-full min-h-full space-y-5">
            <img
            className="object-contain w-full h-auto"
            src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog_new3.2a76bff3.png&w=640&q=75"
            alt="item"
            />
            <h1 className="text-[30px] max-sm:text-[20px]">How to Conduct Keyword Research</h1>
            <h3>Effective keyword research is a cornerstone of successful app optimization. Understanding the language your target audience uses and identifying high-impact keywords can significantly boost your app is visibility in app stores.</h3>
            <a href="/" className="text-blue-600">Read More</a>

          </div>

        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default Blogs;
