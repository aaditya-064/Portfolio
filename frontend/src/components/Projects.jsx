import React from "react";
import Constant from "./Constant";

const Projects = () => {
  return (
    <div>
      <div className="bg-gray-200 p-6 md:h-screen">
        <div className="h-full border border-gray-800 p-6 overflow-y-scroll relative no-scrollbar">
          <Constant />
          <div className="flex flex-col md:flex-row gap-10 justify-end mx-auto md:absolute md:bottom-14 right-14">
            <div className="w-52">
              <a href="" target="blank">
                <img
                  src="/bdu.jpeg"
                  className="w-full rounded hover:opacity-50 hover:bg-orange-800 transition-all"
                />
                <p className="text-center text-sm mt-1 text-gray-500">
                  This is a company website of Buddha Dana Udhyog Pvt. Ltd.. I
                  have been working all by myself on this using reactjs, mongodb
                  and node expressjs as the backend.
                </p>
              </a>
            </div>
            <div className="w-52">
              <a href="" target="blank">
                <img
                  src="/twitter.jpeg"
                  className="w-full rounded hover:opacity-50 hover:bg-orange-800 transition-all"
                />
                <p className="text-center text-sm mt-1 text-gray-500">
                  This is a twitter clone I made using bootsTrap as a css
                  framework where I used html and css for the home page clone.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
