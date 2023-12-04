import React from "react";

export const Solutions = () => {
    return (

            <section
                id="home__solution"
                className="bg-[url(https://beyondsolutionz.com/_next/static/media/home_whyschoose_bg.2d87a18e.png)]
                p-[5%]
            bg-no-repeat
            bg-transparent
            bg-cover
            bg-center
            object-contain
            overflow-hidden
            h-screen
            relative
            md:h-full md:w-full md:bg-cover
            
            "
            >
                <div className="text-white ">
                    <div className="flex text-2xl mt-[5px] w-full justify-center items-center md:text-[4.2rem]   ">
                        <h1>WHY ARE CHOOSE US?</h1>
                    </div>
    
                    <div className="hidden md:hidden lg:flex  flex-row justify-between pt-[90px]    ">
                        <div
                            id="solution__left"
                            className="flex flex-col items-center justify-between space-y-[200px] h-[300px] p-[10px]"
                        >
                            <div
                                id="solution__left_top"
                                className=" flex flex-col gap-[2rem] p- text-xl max-w-[300px] h-[185px]"
                            >
                                <h1>EXCELLENT USER EXPERIENCE</h1>
                                <h2>
                                    Make sure your customers get a consistent
                                    experience across all devices.
                                </h2>
                            </div>
                            <div
                                id="solution__left_bottom"
                                className=" flex flex-col gap-[2rem] text-xl max-w-[300px] h-[185px] max-md:w-ful"
                            >
                                <h1>RETINA STANDARD DISPLAY</h1>
                                <h2>
                                    Displaying multiple pixels per inch results in
                                    sharp, true-to-life images.
                                </h2>
                            </div>
                        </div>
    
                        <div
                            id="solution__right"
                            className="flex flex-col items-center justify-between space-y-[200px] h-[300px] p-[10px]"
                        >
                            <div
                                id="solution__right_top"
                                className=" flex flex-col gap-[2rem] text-xl max-w-[300px] h-[185px]"
                            >
                                <h1>COMPREHENSIVE SOLUTIONS</h1>
                                <h2>
                                    Focus on cutting-edge technologies that meet
                                    modern standards.
                                </h2>
                            </div>
                            <div
                                id="solution__right_bottom"
                                className="  flex flex-col gap-[2rem] text-xl max-w-[300px] h-[185px]"
                            >
                                <h1>SUPER FLEXIBLE</h1>
                                <h2>
                                    With this web design technology, you will be
                                    very flexible in displaying your website.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    );
};

export default Solutions;
