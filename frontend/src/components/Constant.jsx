import React from "react";
import Navbar from "./Navbar";

const Constant = () => {
  return (
    <div>
      <div className="flex gap-2 align-center flex-col sm:flex-row select-none">
        <img
          alt="Profile Image"
          src="/Aaditya.jpg"
          className="h-14 rounded-full hover:grayscale w-14 transition-all hover:opacity-70"
        />

        <p className="name_header text-3xl sm:text-5xl">Aaditya Shrestha</p>
      </div>
      <p className="type_work text-lg py-1 select-none">Full-Stack Developer</p>
      <Navbar />
    </div>
  );
};

export default Constant;
