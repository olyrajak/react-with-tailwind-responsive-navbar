import React, { useState } from "react";
import Buttons from "./Buttons";

const Nav = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/" },
    { name: "Contact", link: "/" },
    { name: "About", link: "/" },
    { name: "Gallery", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4">
        <div className="font-bold text-3xl cursor-pointer flex items-center font-[poppins] text-gray-800">
          <span className="text-3xl text-emerald-600 mr-1 pt-2 ">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Designer
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pd-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-350px]"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl uppercase md:my-0 my-7"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Buttons>Get Started</Buttons>
          {/* <Buttons>Read More</Buttons> */}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
