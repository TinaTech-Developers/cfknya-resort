"use client";
import Layout from "@/components/Layout";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdLocationSearching } from "react-icons/md";
import { ArrowBigLeft } from "lucide-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import Image from "next/image";

function page() {
  return (
    <Layout>
      <div className="mx-4 md:mx-10  bg-white">
        <div className="flex items-center justify-between mx-4 md:mx-10 mt-24 bg-white">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">Tree Viewing</h1>
            <p className="flex items-center gap-1 md:gap-5 text-gray-600">
              <MdLocationSearching size={28} color="red" />
              Inyanga, Zimbabwe
            </p>
          </div>
          <Link
            href={"/todo"}
            className="flex items-center justify-center gap-1 border px-3 py-2 bg-green-900 text-white"
          >
            <ArrowBigLeft />
            Back
          </Link>
        </div>
      </div>
      <hr className="mx-4 md:mx-10 my-4" />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Video
            video={
              "https://utfs.io/f/M8crfG3am8lfL9D9rm9uKAaL1TB6NQhjD0kumYc2sR5vVnlz"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Video video={"/bgvideo.mp4"} />
        </SwiperSlide>
        <SwiperSlide>
          <Images image={"/img_10.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <Images image={"/img_13.jpg"} />
        </SwiperSlide>
      </Swiper>
      <div className="m-10 md:mx-20">
        <h1 className="text-xl md:text-2xl font-semibold my-4 text-green-950">
          Experience the Serenity of Tree Viewing at Novu Resort
        </h1>
        <p>
          This peaceful activity invites guests to explore the lush
          surroundings, showcasing a stunning array of tree species that form a
          vibrant and intricate ecosystem.
          <br />
          <br />
          As you embark on guided tours, knowledgeable naturalists will share
          fascinating insights about the local flora and fauna, revealing the
          unique characteristics, histories, and ecological roles of each tree.
          You will learn about their growth patterns, the wildlife they support,
          and their significance to the environment.
          <br />
          <br />
          Whether you opt for a leisurely stroll along winding paths or a more
          immersive hike through dense woodlands, tree viewing provides the
          perfect opportunity to unwind and connect with nature. Breathe in the
          fresh, invigorating air as you take in the sights and sounds of the
          resort’s picturesque landscape.
          <br />
          <br />
          Along the way, you might encounter a variety of birds and other
          wildlife, enhancing your experience with the rich tapestry of sounds
          and sights that nature offers. Take a moment to pause, reflect, and
          embrace the calming ambiance that surrounds you.
          <br />
          <br />
          As you traverse the beautiful grounds of Novu Resort, you will
          discover hidden nooks and tranquil spots perfect for relaxation or
          contemplation. Capture the stunning views with your camera or simply
          enjoy the beauty that nature has to offer.
          <br />
          <br />
          Experience the unparalleled tranquility of tree viewing at Novu
          Resort, where every moment spent among the trees is a chance to
          reconnect with the natural world and discover its beauty at its
          finest!
        </p>
      </div>
    </Layout>
  );
}

function Video({ video }) {
  return (
    <div className="flex flex-col items-center justify-center  w-full h-full mt-10">
      <div className="w-[90%] gap-10 ">
        <div className="w-[80vw] h-[27rem] mx-auto overflow-hidden sm:w-[90vw] ">
          <video
            className="object-cover w-full h-full md:h-[27rem]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

function Images({ image }) {
  return (
    <div className="flex flex-col items-center justify-center  w-full h-full my-10">
      <div className="w-[80vw] h-[27rem] mx-auto overflow-hidden sm:w-[90vw] ">
        <Image
          src={image}
          alt=""
          layout="responsive"
          width={1600} // Placeholder for width (adjust based on your actual image size)
          height={432} // Placeholder for height (proportional to 27rem)
          className="object-cover w-full h-full md:h-[27rem] "
        />
      </div>
    </div>
  );
}

export default page;
