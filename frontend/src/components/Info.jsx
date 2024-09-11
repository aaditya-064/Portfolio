import React from "react";
import Navbar from "./Navbar";
import Constant from "./Constant";

const Info = () => {
  return (
    <div className="bg-gray-200 p-6 md:h-screen">
      <div className="h-full border border-gray-800 p-6 overflow-y-scroll relative no-scrollbar ">
        <Constant />
        <div className="flex justify-start sm:justify-end md:absolute sm:bottom-14 sm:right-5 px-2">
          <p className="nav_links w-64 text-left sm:text-right select-none">
            I’m Aaditya Shrestha, a 16-year-old student from Nepal, currently
            studying in grade 11 at New Horizon School. Alongside my academic
            journey, I’ve developed a deep passion for web development,
            specializing in the MERN stack (MongoDB, Express.js, React,
            Node.js). My expertise includes creating scalable, responsive web
            applications with a focus on clean and efficient code. I enjoy
            solving complex problems and continuously exploring new technologies
            to enhance my skills. My favorite subject, physics, drives my
            curiosity and desire to understand how things work, which reflects
            in my approach to programming—logical, structured, and innovative.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
