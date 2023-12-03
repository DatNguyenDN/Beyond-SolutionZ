import React from "react";
import feature1 from '../../assets/image/profit1.png'
import feature2 from '../../assets/image/profit2.png'
import feature3 from '../../assets/image/profit3.png'
export const Feature = () => {
    return (
      
           <div className="animate-fade-up animate-once animate-duration-500 animate-ease-in animate-normal"> 
                <>
                    <div id="feature__home" className="flex 
                    flex-col md:flex-row lg:flex-row xl:flex-row 
                     p-[5%] 
                      "
                    >
                        <div id="feature_text" className="flex flex-col gap-3 w-full md:w-60% sm:items-center justify-center " >
                            <div>
                                <h1 className="text-2xl text-green-900">PROFIT THROUGH SUSTAINABLE GAMING GROWTH</h1>
                                <p className="flex justify-center items-center text-start">
                                    Get ready to dive into the puzzle world of Traffic Jam Cars
                                    Puzzle. The modern match 3 game has left indelible
                                    milestones worldwide.
                                </p>
                            </div>
                            <ul className="pl-[10%] text-sm space-y-3">
                                <li>
                                    A remarkable presence in the top 100 highest-grossing
                                    mobile games across 53 countries: #50 in Japan, #150 in
                                    Germany, #80 in the United States, #150 in Great
                                    Britain, and #200 in South Korea.
                                </li>
                                <li>
                                    Every aspect of Traffic Jam Cars Puzzle is meticulously
                                    designed to ensure that players receive the best.
                                    Addictive and challenging are the the two main cores of
                                    this game.
                                </li>
                                <li>
                                    Long-term engagement and lasting returns are the
                                    hallmarks of high quality games. Traffic Jam Cars Puzzle
                                    does not coerce users into immediate monetization.
                                    Instead, it focuses on cultivating lasting relationships
                                    by delivering unique gameplay that keeps players
                                    entertained for years.
                                </li>
                            </ul>
                            <button className=" bg-blue-600 w-40  py-2 justify-center text-white rounded-md text-sm first-letter:md:w-40 "> LEARN MORE</button>
                        </div>
            
                        <div id="feature_img" className="w-40% justify-between flex md:w-30% h-auto md:w-40% 
                        ">
                            <img
                            className="object-contain"
                            src={feature1}
                            alt="feature1"
                            />
                        </div>
                    </div>
                </>
                <>
                    <div id="feature__home" className="flex 
                    flex-col md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse
                     p-[5%] 
                      "
                    >
                        <div id="feature_text" className="flex flex-col gap-3 w-full sm:items-center  md:w-60% text-left  " >
                            <div>
                                <h1 className="text-2xl text-green-900">PROFIT THROUGH SUSTAINABLE GAMING GROWTH</h1>
                                <p className="">
                                    Get ready to dive into the puzzle world of Traffic Jam Cars
                                    Puzzle. The modern match 3 game has left indelible
                                    milestones worldwide.
                                </p>
                            </div>
                            <ul className="pl-[10%] text-sm space-y-3">
                                <li>
                                    A remarkable presence in the top 100 highest-grossing
                                    mobile games across 53 countries: #50 in Japan, #150 in
                                    Germany, #80 in the United States, #150 in Great
                                    Britain, and #200 in South Korea.
                                </li>
                                <li>
                                    Every aspect of Traffic Jam Cars Puzzle is meticulously
                                    designed to ensure that players receive the best.
                                    Addictive and challenging are the the two main cores of
                                    this game.
                                </li>
                                <li>
                                    Long-term engagement and lasting returns are the
                                    hallmarks of high quality games. Traffic Jam Cars Puzzle
                                    does not coerce users into immediate monetization.
                                    Instead, it focuses on cultivating lasting relationships
                                    by delivering unique gameplay that keeps players
                                    entertained for years.
                                </li>
                            </ul>
                            <button className=" bg-blue-600 w-40  py-2 justify-center text-white rounded-md text-sm first-letter:md:w-40 "> LEARN MORE</button>
                        </div>
            
                        <div id="feature_img" className="w-40% justify-between flex md:w-30% h-auto">
                            <img
                            className="object-contain"
                            src={feature2}
                            alt="feature2"
                            />
                        </div>
                    </div>
                </>
                <>
                    <div id="feature__home" className="flex 
                    flex-col md:flex-row lg:flex-row xl:flex-row 
                     p-[5%] 
                      "
                    >
                        <div id="feature_text" className="flex flex-col gap-3 w-full md:w-60% sm:items-center justify-center " >
                           <div>
                                <h1 className="text-2xl text-green-900">PROFIT THROUGH SUSTAINABLE GAMING GROWTH</h1>
                                <p className="">
                                    Get ready to dive into the puzzle world of Traffic Jam Cars
                                    Puzzle. The modern match 3 game has left indelible
                                    milestones worldwide.
                                </p>
                           </div>
                            <ul className="pl-[10%] text-sm space-y-3">
                                <li>
                                    A remarkable presence in the top 100 highest-grossing
                                    mobile games across 53 countries: #50 in Japan, #150 in
                                    Germany, #80 in the United States, #150 in Great
                                    Britain, and #200 in South Korea.
                                </li>
                                <li>
                                    Every aspect of Traffic Jam Cars Puzzle is meticulously
                                    designed to ensure that players receive the best.
                                    Addictive and challenging are the the two main cores of
                                    this game.
                                </li>
                                <li>
                                    Long-term engagement and lasting returns are the
                                    hallmarks of high quality games. Traffic Jam Cars Puzzle
                                    does not coerce users into immediate monetization.
                                    Instead, it focuses on cultivating lasting relationships
                                    by delivering unique gameplay that keeps players
                                    entertained for years.
                                </li>
                            </ul>
                            <button className=" bg-blue-600 w-40  py-2 justify-center text-white rounded-md text-sm first-letter:md:w-40 "> LEARN MORE</button>
                        </div>
            
                        <div id="feature_img" className="w-40% justify-between flex md:w-30% h-auto">
                            <img
                            className="object-contain"
                            src={feature3}
                            alt="feature1"
                            />
                        </div>
                    </div>
                </>
           </div>
            
    );
};

export default Feature
