import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import BookingForm from "../BookingForm";
import Form from "../BookingForm/Form";
export const Booking = () => {
    return (
        <section
            id="home__booking"
            className="bg-[#37393f] p-[4%] w-full  flex flex-col justify-center max-lg:flex-col lg:flex-row   gap-5"
        >
            <div
                id="home__booking_left"
                className="items-center justify-center max-lg:w-full flex-col md:flex-col w-[70%] box-border  px-[5%] max-sm:p-0 text-white "
            >
                <p className="text-md">
                    <i className="bg-emerald-500 w-[16px] h-[16px] inline-block" />
                    &nbsp;&nbsp;&nbsp;How We Work
                </p>

                <h1 className="text-4xl max-sm:text-[25px]">
                    To Get Your Business To The Next Level
                </h1>

                <h4 className="text-console.log();">
                    We understand that every business journey is unique. That is
                    why we ensure your experience with us is seamless,
                    effective, and ultimately propels your business to new
                    heights.
                </h4>

                <div
                    id="home__booking_left_middle"
                    className="flex justify-center items-center w-[100%]  bg-emerald-500 text-[20px] rounded-[20px] p-[3%] gap-5 my-5 max-sm:flex-col max-sm:text-center"
                >
                    <img
                        src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome_appointment_images.37e4ea3e.png&w=384&q=75"
                        alt="number"
                    />
                    <h2>
                        Built on a foundation of expertise, we provide impactful
                        services to you
                    </h2>
                </div>

                <div className="flex items-center justify-start gap-3 max-sm:text-sm">
                    <p className="flex items-center gap-5">
                        <FontAwesomeIcon
                            icon={faCircleCheck}
                            color="#40ddb6"
                            size="xl"
                        />
                    </p>
                    <div>
                        <h4 className="font-bold">
                            Your Vision, Our Blueprint
                        </h4>
                        <hp className="text-md">
                            Through in-depth consultations, we gain insights
                            into your business landscape, target audience, and
                            goals.
                        </hp>
                    </div>
                </div>

                <div className="flex justify-start items-center gap-3 py-3 max-sm:text-sm ">
                    <p className="flex items-center gap-5">
                        <FontAwesomeIcon
                            icon={faCircleCheck}
                            color="#40ddb6"
                            size="xl"
                        />
                    </p>

                    <div>
                        <h4 className="font-bold">Crafting Your Roadmap</h4>
                        <p className="text-md">
                            This roadmap outlines the strategies, services, and
                            resources that will be at your disposal.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-3 max-sm:text-sm ">
                    <p className="flex items-center gap-5">
                        <FontAwesomeIcon
                            icon={faCircleCheck}
                            color="#40ddb6"
                            size="xl"
                        />
                    </p>
                    <div>
                        <h4 className="font-bold">Bringing Ideas to Life</h4>
                        <p className="text-md">
                            We believe in actively monitoring and optimizing our
                            strategies. Our team keeps a watchful eye on
                            performance metrics, user engagement, and market
                            trends. This approach allows us to make real-time
                            adjustments, ensuring that we deliver results that
                            exceed your expectations.
                        </p>
                    </div>
                </div>
            </div>

            <div id="home__booking_right" className="flex flex-col w-[30%] max-lg:w-full max-lg:items-center max-sm::items-center max-md::items-center ">
                <div className="text-white max-sm:text-center">
                    <p className="text-lg">
                        <i className="bg-emerald-500 w-[16px] h-[16px] inline-block" />
                        &nbsp;&nbsp;&nbsp;Book Now
                    </p>
                    <h1 className="text-2xl">Get Free Business Appointment</h1>
                </div>
                <div id="home__booking__form" className=" flex">
                    <BookingForm />
                </div>
            </div>
        </section>
    );
};

export default Booking;
