"use client";
import React from "react";
import { motion } from "framer-motion";
import Video from "./Video";
import Images from "./Images";

function Adventure() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold"
      >
        <div className="flex items-center justify-center gap-2 my-4">
          <div className="w-10 h-1 bg-amber-700"></div>
          <h1 className="text-lg uppercase text-amber-700">
            holiday in inyanga
          </h1>
          <div className="w-10 h-1 bg-amber-700"></div>
        </div>
        <h className="text-green-950">Exciting Journey</h>
      </motion.div>
      <Video
        video={
          "https://utfs.io/f/M8crfG3am8lfL9D9rm9uKAaL1TB6NQhjD0kumYc2sR5vVnlz"
        }
        heading={"Discover the Beauty of Nyanga, Zimbabwes"}
        link={"/trees"}
        description={
          "Nyanga, located in the Eastern Highlands of Zimbabwe, is a breathtaking destination known for its stunning landscapes, lush forests, and rich cultural heritage. Here’s a brief overview of what makes Nyanga a must-visit travel spot."
        }
      />
      <Video
        video={"bgvideo.mp4"}
        heading={"Experience the Serenity of Tree Viewing at Novu Resort"}
        link={"/"}
        description={
          "Immerse yourself in the serene beauty of nature with tree viewing at Novu Resort. This peaceful activity invites guests to explore the lush surroundings, highlighting the diverse species of trees that create a vibrant ecosystem. Guided tours provide insightful information about the local flora and fauna, allowing you to appreciate the unique characteristics and histories of the trees. Whether you choose a leisurely stroll or a more immersive hike, tree viewing offers a perfect opportunity to unwind, connect with nature, and enjoy the tranquility of the resort's picturesque landscape. Experience the calming ambiance and discover the beauty of nature at its finest!"
        }
      />
      <Images
        image={"/img_8.jpg"}
        heading={"Thrilling Quad Biking Adventures at Novu Resort"}
        link={"/quadbiking"}
        description={
          "Experience the thrill of quad biking at Novu Resort, where adventure meets stunning natural beauty. Our guided tours cater to all skill levels, allowing you to explore diverse terrains, from lush forests to rolling hills. Safety is our priority, with high-quality gear provided and thorough briefings before you hit the trails. Whether you’re seeking an adrenaline rush with friends or a unique solo adventure, quad biking at Novu Resort promises unforgettable memories in a breathtaking setting. Embrace the excitement and connect with nature for an adventure like no other!"
        }
      />
    </div>
  );
}

export default Adventure;
