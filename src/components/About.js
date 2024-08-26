"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
      <div className="col-span-1 px-10">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col  gap-2 my-4"
        >
          <div className="flex items-center gap-2 my-4">
            <h1 className="text-xl uppercase text-amber-700">luxury living</h1>
            <div className="w-10 h-1 bg-amber-700"></div>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-green-950">
            Stay and Enjoy
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            {" "}
            Welcome to CFK, your ultimate destination for relaxation and
            rejuvenation. Nestled amidst the serene landscapes and breathtaking
            views, our resort is a haven of tranquility, offering an escape from
            the hustle and bustle of everyday life. Our story began over a
            decade ago when our founder, a passionate traveler, fell in love
            with this idyllic location. He envisioned a place where people could
            experience the beauty of nature while enjoying the comforts of a
            home away from home. Thus, CFK was born. Today, we offer a range of
            luxurious accommodations, from cozy cabins to spacious villas, all
            designed with your comfort in mind. Our facilities include a
            world-class spa, a gourmet restaurant serving local and
            international cuisine, and a variety of recreational activities for
            all ages.
          </p>
          <div className="flex items-center justify-between gap-10 mt-10 md:mx-10">
            <div className="w-24 h-24 border">
              <div className="w-20 h-20 border mx-auto my-2"></div>
            </div>
            <div className="w-24 h-24 border">
              <div className="w-20 h-20 border mx-auto my-2"></div>
            </div>
            <div className="w-24 h-24 border">
              <div className="w-20 h-20 border mx-auto my-2"></div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="p-2 bg-amber-700 text-white uppercase px-4 mt-4 ">
              explore more
            </button>
          </div>
        </motion.div>
      </div>
      <div className="col-span-1 mx-auto my-20">
        <div className="grid grid-cols-1 md:flex items-baseline gap-2">
          <Image
            src={"/img_6.jpg"}
            height={300}
            width={200}
            alt=""
            className="w-80 h-72 md:h-56  md:w-48 object-cover"
          />
          <Image
            src={"/img_7.jpg"}
            height={400}
            width={300}
            alt=""
            className="w-80 h-72 object-cover"
          />
        </div>
        <div className="flex mt-2 gap-2">
          <Image
            src={"/img_6.jpg"}
            height={300}
            width={200}
            alt=""
            className=" w-40 h-36 md:w-24 md:h-28 object-cover items-end"
          />
          <Image
            src={"/img_7.jpg"}
            height={400}
            width={300}
            alt=""
            className="w-40 h-36 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
