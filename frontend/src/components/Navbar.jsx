import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const url = window.location.href;
  const params = url.split("/")[3];
  const activeClass =
    "nav_links hover:opacity-30 transition text-md text-slate-950 font-medium w-[80px]";
  const passiveClass =
    "text-gray-500 nav_links hover:opacity-30 transition text-md font-medium w-[80px]";
  return (
    <div className="flex flex-col justify-center py-8 px-2 text-gray-950 select-none">
      <Link
        className={`${params === "" ? activeClass : passiveClass}`}
        to={"/"}
      >
        Home
      </Link>
      <Link
        className={`${params === "info" ? activeClass : passiveClass}`}
        to={"/info"}
      >
        Info
      </Link>
      <Link
        className={`${params === "project" ? activeClass : passiveClass}`}
        to={"/project"}
      >
        Projects
      </Link>
      <Link
        className={`${params === "contact" ? activeClass : passiveClass}`}
        to={"/contact"}
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
