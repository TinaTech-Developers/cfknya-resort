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
        heading={
          "Welcome to Nyanga, a Leading Tourist Resort Destination in Zimbabwe"
        }
        link={"/trees"}
        description={
          "Nyanga, located in the Eastern Highlands of Zimbabwe, is a breathtaking destination known for its spectacular landscapes, diverse cultural heritage and amazing forests, making it a must-visit tourist destination. Its cool climatic and natural environment make it an exciting retreat for nature lovers and adventure seekers."
        }
      />
      <Images
        image={
          "https://i.pinimg.com/originals/0b/8e/64/0b8e641a1eb87c4a1f140d3791de0c0a.jpg"
        }
        heading={"An Adventure Through Zimbabwe's Eastern Highlands"}
        link={"/"}
        // description={
        //   "Immerse yourself in the serene beauty of nature with tree viewing at Novu Resort. This peaceful activity invites guests to explore the lush surroundings, highlighting the diverse species of trees that create a vibrant ecosystem. Guided tours provide insightful information about the local flora and fauna, allowing you to appreciate the unique characteristics and histories of the trees. Whether you choose a leisurely stroll or a more immersive hike, tree viewing offers a perfect opportunity to unwind, connect with nature, and enjoy the tranquility of the resort's picturesque landscape. Experience the calming ambiance and discover the beauty of nature at its finest!"
        // }
      />
      <Video
        video={"/bike.mp4"}
        heading={"Thrilling Quad Biking Adventures at Novu Resort"}
        link={"/quadbiking"}
        description={
          "Experience the adrenaline rush of quad biking at Novu Resort with two exciting routes tailored for every adventurer. Choose the adventurous and risky route for an exhilarating ride through rugged terrains, steep hills, and challenging obstacles that will test your skills and bravery. Alternatively, opt for the easy route, perfect for beginners or those seeking a more relaxed experience, featuring scenic paths and gentle slopes that still offer stunning views of the surrounding landscape. Whether you’re seeking thrills or a leisurely ride, Novu Resort has the perfect quad biking adventure for you!"
        }
      />
    </div>
  );
}

export default Adventure;
