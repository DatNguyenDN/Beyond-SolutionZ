import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Feedback = () => {
    return (
        <div className="flex flex-col items-center justify-center box-border">
            <div className="flex flex-col max-w-full p-[5%] justify-evenly gap-4 md:flex-row xl:flex-row md:justify-evenly xl:justify-evenly   ">
                <div className="flex flex-col justify-center items-center md:items-start xl:items-start ">
                    <p>
                        <i className="bg-emerald-400 w-4 h-4 line-clamp-1 inline-block " />
                        &nbsp;&nbsp;&nbsp;Testimonial
                    </p>

                    <h2 className="font-normal text-2xl line-clamp p-">
                        What Our Client Say
                    </h2>
                </div>

                <div className="flex flex-col  items-center justify-center p-[2%] rounder-[15px] md:w-[400px] bg-pink-300 gap-4 md:ml-[180px] xl:ml-[250px]  ">
                    <div className="flex flex-row items-center gap-4">
                        <img
                            id="image"
                            className="object-contain flex "
                            src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome_avatar1.18313651.png&w=256&q=75"
                            alt="avatar"
                        />
                        <div id="detail">
                            <h4>Liselotte Monika</h4>
                            <p>UA Manager, Byte Play</p>
                            <FontAwesomeIcon icon={faStar} color="orange" />
                            <FontAwesomeIcon icon={faStar} color="orange" />
                            <FontAwesomeIcon icon={faStar} color="orange" />
                            <FontAwesomeIcon icon={faStar} color="orange" />
                            <FontAwesomeIcon icon={faStar} color="orange" />
                        </div>
                    </div>

                    <p id="text">
                        “ My favorite feature is the ability to analyze
                        competitor data efficiently, which helps in creating
                        unique app launching strategies. ”
                    </p>
                </div>

                <div className="flex flex-col  items-center justify-center p-[2%] rounder-[15px] md:w-[400px] bg-pink-300 gap-4 ">
                    <div className="flex flex-row items-center gap-4">
                        <img
                            id="image"
                            className="object-contain flex "
                            src="https://beyondsolutionz.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome_avatar2.b03f69f6.png&w=256&q=75"
                            alt="avatar"
                        />
                        <div id="detail">
                            <h4>Justyna Róża</h4>
                            <p>Developer, Creator Hive</p>
                            <FontAwesomeIcon icon={faStar} color="orange" />
                            <FontAwesomeIcon icon={faStar} color="orange" />
                            <FontAwesomeIcon icon={faStar} color="orange" />
                            <FontAwesomeIcon icon={faStar} color="orange" />
                            <FontAwesomeIcon icon={faStar} color="orange" />
                        </div>
                    </div>

                    <p id="text">
                        “ I greatly value the convenience of having every aspect
                        of my app is journey in one partnership. ”
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
