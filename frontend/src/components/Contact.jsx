import React, { useState, useEffect } from "react";
import Constant from "./Constant";
import axios from "axios";

const Contact = () => {
  const [info, setInfo] = useState({
    name: "Ram Sharma",
    email: "ram@gmail.com",
    phoneNumber: "123123",
    subject: "Hello World",
    message: "Shit",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      url: "http://127.0.0.1:8080/post/",
      method: "post",
      data: info,
    });
    alert("I'LL CONTACT YOU SOON");
    setInfo({ name: "", email: "", phoneNumber: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  return (
    <div className="bg-gray-200">
      <div className="p-6">
        <div className="h-[650px] relative border border-gray-800 overflow-scroll p-6 no-scrollbar">
          <Constant />

          <div className="flex md:mt-[-90px] flex-col items-end sm:justify-end">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="flex flex-col justify-center max-w-3xl mx-auto gap-2">
                <div className="flex flex-col w-full">
                  <label className="text-right font-bold text-xs ml-2">
                    Full Name
                  </label>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type="text"
                    value={info.name}
                    name="name"
                    placeholder="Enter your full name"
                    className="outline-none bg-[#eeeeee] text-sm mt-2 p-3 placeholder:text-gray-500 placeholder:text-right placeholder_input w-44 sm:w-80"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-right font-bold text-xs ml-2">
                    Email Address
                  </label>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type="text"
                    value={info.email}
                    name="email"
                    placeholder="Enter your email address"
                    className="outline-none bg-[#eeeeee] text-sm mt-2 p-3 placeholder:text-gray-500 placeholder:text-right placeholder_input w-44 sm:w-80"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center max-w-3xl mx-auto mt-2">
                <div className="flex flex-col w-full">
                  <label className="text-right font-bold text-xs ml-2">
                    Mobile Number
                  </label>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type="string"
                    name="phoneNumber"
                    value={info.phoneNumber}
                    placeholder="Enter your mobile number"
                    className="outline-none bg-[#eeeeee] text-sm mt-2 p-3 placeholder:text-gray-500 placeholder:text-right placeholder_input w-44 sm:w-80"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-right font-bold text-xs ml-2 mt-2">
                    Subject
                  </label>
                  <input
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    type="text"
                    name="subject"
                    value={info.subject}
                    placeholder="Enter the subject"
                    className="outline-none bg-[#eeeeee] text-sm mt-2 p-3 placeholder:text-gray-500 placeholder:text-right placeholder_input w-44 sm:w-80"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center max-w-3xl mx-auto mt-2">
                <div className="flex flex-col w-full">
                  <label className="text-right font-bold text-xs ml-2">
                    Message
                  </label>
                  <textarea
                    onChange={(e) => handleChange(e)}
                    name="message"
                    value={info.message}
                    className="outline-none bg-[#eeeeee] placeholder:text-gray-500 placeholder:text-right text-sm mt-2 p-3 placeholder_input w-44 sm:w-80"
                    id=""
                    placeholder="Enter the message"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="mt-5 bg-gray-700 text-white py-2 px-5 rounded transition-all hover:border hover:border-gray-700 hover:text-gray-500 hover:bg-white">
                  Submit
                </button>
              </div>
            </form>
            {/* <div className="flex sm:flex-col w-10 text-xl gap-3 text-slate-950">
              <a
                href="https://www.linkedin.com/in/aaditya-shrestha-148318286/"
                target="blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="mailto:aadityastha123456@gmail.com" target="blank">
                <i class="fa-regular fa-envelope"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
