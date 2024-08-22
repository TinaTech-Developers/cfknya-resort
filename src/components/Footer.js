import React from "react";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

function Footer() {
  return (
    <div>
      <div className="h-full grid grid-cols-1 md:grid-cols-3 md:w-full bg-[#000818] md:h-96 ">
        <div className=" flex flex-col items-center justify-center p-4 text-gray-500 ">
          <h1 className=" text-amber-950 font-bold pt-2">Head Office</h1>
          <p className="text-sm text-white">+ 263 77 224 1125</p>
          <p className="text-sm text-white">+ 263 77 224 1125</p>
          <p className="text-sm text-white">+ 263 77 224 1125</p>
          <h1 className=" text-amber-950 font-bold pt-2">
            Reservations Inyanga
          </h1>
          <p className="text-sm text-white">+ 263 77 224 1125</p>
          <p className="text-sm text-white">+ 263 77 224 1125</p>
          <p className="text-sm text-white">+ 263 77 224 1125</p>
          <h1 className=" text-amber-950 font-bold pt-2">
            Reservations Zimbabwe
          </h1>
          <p className="text-sm text-white">+ 263 77 224 1125</p>
          <p className="text-sm text-white">+ 263 77 224 1125</p>
          <p className="text-sm text-white">+ 263 77 224 1125</p>
          <div></div>
        </div>
        <div className="flex flex-col items-start px-32 justify-center top-0 text-white ">
          <h1 className="text-white text-xl font-semibold p-2">Explore us!</h1>
          <div className="flex items-center justify-between gap-1">
            <SlArrowRight color="brown" size={"0.8rem"} />
            <Link href={""}>About Us</Link>
          </div>
          <div className="flex items-center justify-between gap-1">
            <SlArrowRight color={"brown"} size={"0.8rem"} />
            <Link href={""}>Terms & Conditions</Link>
          </div>
          <div className="flex items-center justify-between gap-1">
            <SlArrowRight color={"brown"} size={"0.8rem"} />
            <Link href={""}>Newss & Articles</Link>
          </div>
          <div className="flex items-center justify-between gap-1">
            <SlArrowRight color={"brown"} size={"0.8rem"} />
            <Link href={""}>How we work</Link>
          </div>
          <div className="flex items-center justify-between gap-1">
            <SlArrowRight color={"brown"} size={"0.8rem"} />
            <Link href={""}>Contact Us</Link>
          </div>
        </div>
        <div className="flex flex-col items-center text-white top-0">
          <p className="px-10 py-2">
            Get the best updates via email. Dont miss it. Any time you may{" "}
          </p>
          <input className="w-[70%] p-2 bg-white" placeholder="Your email" />
          <button className="bg-amber-950 w-[70%] p-2 my-2">
            Subscribe Now!
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-10 bg-gray-900">
        <p className="text-white text-sm">
          Copyright 2023 by <Link href={""}>TinaSoft Nexus</Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
