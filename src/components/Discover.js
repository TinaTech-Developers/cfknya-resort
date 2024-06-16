import Image from "next/image";
import React from "react";

function Discover() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:mt-20">
      <div className="col-span-1 text-white p-10 bg-blue-950">
        <div className="flex items-center  gap-2 my-4">
          <h1 className="text-lg  uppercase">our rooms</h1>
          <div className="w-10 h-1 bg-orange-900"></div>
        </div>
        <p className="text-3xl font-bold">Discover A Brand Luxurious Hotel</p>
        <p className="my-10">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className="flex items-center justify-between">
          <button className="p-2 text-white bg-blue-800">Book Now</button>
          <button className="p-2 text-white bg-orange-950">View Details</button>
        </div>
      </div>
      <div className="col-span-1">
        <Image
          src={"/img_1.jpg"}
          alt=""
          height={500}
          width={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Discover;
