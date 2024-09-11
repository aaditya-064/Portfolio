import React from "react";
import Navbar from "./Navbar";
import "../index.css";
import Constant from "./Constant";
import Theme from "./Theme";

const HomePage = () => {
  return (
    <div className="bg-gray-200 p-6 overflow-hidden md:h-screen">
      <div className="p-6 border border-gray-800 overflow-y-scroll no-scrollbar md:h-full">
        <Constant />
        <div className="flex justify-start sm:justify-end md:absolute sm:bottom-14 sm:right-14 px-2">
          <p className="nav_links w-52 text-left sm:text-right select-none">
            Hi! I'm Aaditya Shrestha, a passionate full-stack developer based in
            Nepal. With expertise in the MERN stack and a love for web
            development, I bring innovative ideas to life through clean,
            efficient, and user-friendly code. Whether you're looking for a
            developer to build seamless websites or a collaborative partner for
            exciting tech projects, I'm here to help! Let's connect and create
            something amazing together.
          </p>
        </div>
        {/* <Theme /> */}
      </div>
    </div>
  );
};

export default HomePage;
