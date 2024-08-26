"use client";
import React from "react";
import { motion } from "framer-motion";
import { PiBuildingApartmentDuotone } from "react-icons/pi";

function Services() {
  return (
    <div className="flex flex-col items-center justify-center mt-14">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold"
      >
        <div className="flex items-center justify-center gap-2 my-4">
          <div className="w-10 h-1 bg-amber-700"></div>
          <h1 className="text-lg   uppercase text-amber-700">our services</h1>
          <div className="w-10 h-1 bg-amber-700"></div>
        </div>
        <h className=" text-green-950">Explore Our SERVICES</h>
      </motion.div>
      <div className="flex flex-wrap items-center justify- mx-auto">
        <ServiceCard />
      </div>
    </div>
  );
}
function ServiceCard() {
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
        backgroundColor: "#06402B",
        color: "white",
      }}
      transition={{ duration: 0.9 }}
      className="flex flex-col w-80 h-96 shadow-2xl md:w-96 border rounded-lg my-5 mx-auto text-gray-600 p-5 "
    >
      <div className="w-24 h-24 border mx-auto mt-10">
        <div className="w-20 h-20 border mx-auto my-2 items-center justify-center">
          <PiBuildingApartmentDuotone size={50} className="mx-auto my-4" />{" "}
        </div>
      </div>
      <h1 className="font-semibold text-center py-6 text-xl">
        Rooms & Appartment
      </h1>
      <p className="text-center">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </p>
    </motion.div>
  );
}
export default Services;
