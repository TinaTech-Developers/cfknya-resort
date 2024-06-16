"use client";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar() {
  let links = [
    { name: "Home", link: "/" },
    { name: "Rooms", link: "/rooms" },
    { name: "To-Do", link: "/todo" },
    { name: "About", link: "/about" },
    { name: "Contact ", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-lg w-full fixed top-0 left-0 z-50 bg-[#000818]">
      <div className="md:flex items-center justify-between bg- py-4  md:px-10 px-7 h-20 border-b-">
        <h1 className="text-3xl font-bold text-amber-700">CFK NYA RESORTS</h1>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <IoMdClose color="white" /> : <IoMdMenu color="white" />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-4
        absolute md:static bg-[#000818]  x-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-20 opacity-100" : "top-[-490px]"
        } `}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-base md:my-0 my-4">
              <a
                href={link.link}
                className="text-white hover:text-amber-950 duration-400"
              >
                {link.name}
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-950"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
