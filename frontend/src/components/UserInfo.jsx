import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserInfo = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await axios({
        url: "https://portfolio-org.onrender.com/get/",
        method: "get",
      });
      const arrData = data.data.all;
      setInfo(arrData);
    };
    fetchAPI();
  }, []);

  const url = window.location.href;
  const params = url.split("/")[3];
  const activeClass =
    "nav_links hover:opacity-30 transition text-md text-slate-950 font-medium w-[80px]";
  const passiveClass =
    "text-gray-500 nav_links hover:opacity-30 transition text-md font-medium w-[80px] text-white";
  return (
    <>
      <div className="flex bg-blue-400 justify-start py-2 px-5 select-none">
        <Link
          className={`${params === "" ? activeClass : passiveClass}`}
          to={"/"}
        >
          Home
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-2 mt-2">
        {info.map((item, index) => (
          <div
            key={index}
            className="w-64 rounded bg-gray-200 mx-auto flex flex-col gap-2 mt-3 p-4"
          >
            <p className="font-bold">
              Name:{" "}
              <span className="font-normal text-gray-950">{item.name} </span>
            </p>
            <p className="font-bold">
              Email:{" "}
              <span className="font-normal text-gray-950">{item.email} </span>
            </p>
            <p className="font-bold">
              Phone Number:{" "}
              <span className="font-normal text-gray-950">
                {item.phoneNumber}{" "}
              </span>
            </p>
            <p className="font-bold">
              Subject:{" "}
              <span className="font-normal text-gray-950">{item.subject} </span>
            </p>
            <p className="font-bold">
              Message:{" "}
              <span className="font-normal text-gray-950">{item.message} </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserInfo;
