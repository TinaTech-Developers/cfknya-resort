"use client";
import React from "react";
import { motion } from "framer-motion";
import RoomCard from "./RoomCard";

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

export default ExploreRooms;
