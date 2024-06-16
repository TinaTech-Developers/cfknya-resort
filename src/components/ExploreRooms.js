"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";

function ExploreRooms({ heading }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold"
      >
        <div className="flex items-center justify-center gap-2 my-4">
          <div className="w-10 h-1 bg-orange-900"></div>
          <h1 className="text-lg  uppercase">our rooms</h1>
          <div className="w-10 h-1 bg-orange-900"></div>
        </div>
        {/* <div>
          <span className="w-10 h-56 bg-orange-900"></span>
        </div> */}
        <h>{heading}</h>
      </motion.div>
      <div className="flex flex-wrap items-center justify- mx-auto">
        <RoomCard /> <RoomCard /> <RoomCard /> <RoomCard />
      </div>
    </div>
  );
}

function RoomCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      whileHover={{
        // scale: 1.1,
        backgroundColor: "#00001C",
        color: "white",
      }}
      transition={{ duration: 0.9 }}
      className="flex flex-col w-80 h-full shadow-2xl md:w-96 border  bg-transparent rounded-lg my-5 mx-auto text-gray-600 p-5 "
    >
      <Image
        src={"/img_6.jpg"}
        height={300}
        width={400}
        alt=""
        className="w-80 md:w-96 h-52 object-cover"
      />
      <p className="p-2 bg-orange-950 w-[7rem] text-center text-white -translate-y-6">
        $100/Night
      </p>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-xl">Junior Suite</h1>{" "}
        <div className="flex items-center justify-center gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>{" "}
      </div>
      <div className="flex items-center justify-between my-4 gap-1">
        <div className="flex items-center justify-center gap-1">
          <FaBed /> 2 Bed
        </div>
        <div className="flex items-center justify-center gap-1">
          <MdBathtub /> 2 Bath
        </div>
        <div className="flex items-center justify-center gap-1">
          <FaWifi />2 Free WiFi
        </div>
      </div>
      <p className="pb-4">
        A beautiful but minimalistic nest. With its sleek modern theme you get
        the best of both worlds. Business on the inside, nature on the outside.
      </p>
      <div className="flex items-center justify-between">
        <button className="p-2 text-white bg-blue-950">Book Now</button>
        <button className="p-2 text-white bg-orange-950">View Details</button>
      </div>
    </motion.div>
  );
}

export default ExploreRooms;
