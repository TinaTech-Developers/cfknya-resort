"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Testimonials() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  return (
    <div className="bg-scroll bg-[url('/banner.jpg')] object-cover h-[340px] mt-14">
      <div className="bg-scroll bg-black bg-opacity-70 h-[340px] py-10">
        <Swiper
          centeredSlides={true}
          // slidesPerView={2}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className=""
        >
          <SwiperSlide>
            <div className="flex flex-col w-[100%]">
              <figure className="max-w-screen-md mx-auto text-center py-6 w-[100%]">
                <svg
                  className="w-10 h-10 mx-auto mb-3 text-gray-40 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                  <p className="text-2xl italic font-medium text-gray-900 dark:text-white bg-white p-4 rounded-lg m-4">
                    {
                      "I had a great experience working with Compulink Systems. They were professional, knowledgeable, and very responsive to my needs. I would highly recommend them to anyone looking for reliable and efficient ICT services."
                    }
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-gray-300">
                      Tinashe P
                    </cite>
                    <cite className="ps-3 text-sm text-white">
                      Developer at Compulink
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="flex flex-col">
              <figure className="max-w-screen-md mx-auto text-center py-6 w-[100%]">
                <svg
                  className="w-10 h-10 mx-auto mb-3 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                  <p className="text-2xl italic font-medium text-gray-900 dark:text-white bg-white p-4 rounded-lg m-4">
                    {
                      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
                    }
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                  {/* <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"> */}
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-gray-300">
                      Panashe Gorejena
                    </cite>
                    <cite className="ps-3 text-sm text-white">
                      Procurement Manager
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
