import React, { useState } from "react";
import Card from "./Card";

const Container = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="px-16 py-10 border border-gray-100 rounded-lg m-20">
            <div className="text-center">
                <h1 className="font-bold text-4xl">What brings you to MuSlate? </h1>
                <p className="text-gray-500 py-4 text-md font-semibold">Select the option that best describe you. Not Sure?, Don't worry, you can <span className="block">upgrade to professional profile later</span></p>
            </div>
            <div className="flex justify-between px-40 mt-10">
                <Card isActive={isActive} setIsActive={setIsActive } title="I'm a Music lover looking to discover"  subtitle="The best platform to discover a whole new world of Music, Artist, Events and more"/>
            <Card  isActive={isActive} setIsActive={setIsActive } title="I'm a professional looking to share my work" subtitle="The best platform to display to work to whole"/>
            </div>
            <button className="bg-blue-500 rounded-lg mx-40 px-4 mt-4 text-white py-1" disabled={!isActive } onClick={() => {console.log("clicked") }}>Finish</button>
        </div>
    )
};

export default Container;