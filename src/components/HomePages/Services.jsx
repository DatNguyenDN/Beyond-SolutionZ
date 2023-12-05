import React from "react";
import service from "../../assets/image/services.png";
import brand1 from "../../assets/image/brand1.png";
import brand2 from "../../assets/image/brand2.png";
import brand3 from "../../assets/image/brand3.png";
import brand4 from "../../assets/image/brand4.png";
import brand5 from "../../assets/image/brand5.png";
const Services = () => {
    return (
        <>
            <section
                id="home__services"
                className="flex flex-col bg-black justify-center items-center p-[5%] "
            >
                <div id="home__services__top" className=" max-w-4xl px-[5%]">
                    <img
                        className=" block justify-center items-center w-[100%] h-[100%] object-contain animate-fade-up animate-once animate-duration-500 animate-ease-in animate-normal  "
                        src={service}
                        alt="service"
                    />
                </div>

                <div
                    id="home__services__bottom"
                    className="gap-5 flex flex-col  lg:flex-row xl:flex-row max-w-5xl"
                >
                    <div
                        id="home__services_child1"
                        className="bg-blue-600 rounded-[15px] text-white p-[2%]  "
                    >
                        <h2 className="text-[16px]">SERVICE SOLUTION</h2>
                        <p className="text-[13px]">
                            Tap into the power of precise, data-driven insights.
                            Make informed decisions, optimize performance, and
                            uncover new growth opportunities.
                        </p>
                    </div>

                    <div
                        id="home__services_child1"
                        className="bg-purple-600 rounded-[15px] text-white p-[2%]"
                    >
                        <h2 className="text-[16px]">APP</h2>
                        <p className="text-[13px]">
                            Propel apps to the forefront with strategic
                            promotion. Reach the right audience, amplify
                            visibility, and scale your user base.
                        </p>
                    </div>

                    <div
                        id="home__services_child1"
                        className="bg-orange-600 rounded-[15px] text-white p-[2%]"
                    >
                        <h2 className="text-[16px]">GAMING</h2>
                        <p className="text-[13px]">
                            Millions users immerse in captivating experiences
                            with our game development expertise. From concept to
                            launch, we turn ideas into addictive gameplay.
                        </p>
                    </div>
                </div>
            </section>

        <div className=" flex flex-row justify-evenly items-center  h-[100px] bg-[#157a704d]  gap-3 px-3 md:h-[200px] ">
                <img
                    src={brand1}
                    alt="brand1"
                    className="max-w-full w-[15%] max-h-full md:w-[20vh] h-[50%] object-contain "
                />
                <img
                    src={brand2}
                    alt="brand1"
                    className="max-w-full w-[15%] max-h-full md:w-[20vh] h-[50%] object-contain "
                />
                <img
                    src={brand3}
                    alt="brand1"
                    className="max-w-full w-[15%] max-h-full md:w-[20vh] h-[50%] object-contain "
                />
                <img
                    src={brand4}
                    alt="brand1"
                    className="max-w-full w-[15%] max-h-full md:w-[20vh] h-[50%] object-contain "
                />
                <img
                    src={brand5}
                    alt="brand1"
                    className="max-w-full w-[15%] max-h-full md:w-[20vh] h-[50%] object-contain "
                />
            </div>
        </>
    );
};

export default Services;
