"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroCard from "./HeroCard";
import Inquiry from "./Inquiry";

export default function Hero() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        <SwiperSlide>
          <HeroCard
            head={"Best of The Bests"}
            text={"Welcome To Our Luxury Villas"}
            text1={"Click The Button Below for Bookings"}
          />
          <Inquiry />
        </SwiperSlide>

        <SwiperSlide>
          <HeroCard />
          <Inquiry />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
