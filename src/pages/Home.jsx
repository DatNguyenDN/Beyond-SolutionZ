import React from "react";
import {
    Hero,
    Services,
    Solutions,
    Feedback,
    Feature,
    Booking,
} from "../components/HomePages";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="h-screen">
            <Hero />
            <Services />
            <Feature />
            <Feedback />
            <Solutions/>
            <Booking/>
            <Footer/>
        </div>
    );
};

export default Home;
