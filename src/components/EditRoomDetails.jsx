"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBed, FaWifi } from "react-icons/fa";
import {
  MdBathtub,
  MdLocationCity,
  MdLocationPin,
  MdLocationSearching,
} from "react-icons/md";
import FillButton from "./FillButton";

function EditRoomDetails({ id, name, price, imageUrl, description }) {
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);
  const [newImage, setNewImage] = useState(imageUrl);
  const [newDescription, setNewDescription] = useState(description);

  // const [book, setBook] = useState(room.name);
  // const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [arrivaldate, setArrivaldate] = useState("");
  const [deptdate, setDeptdate] = useState("");
  const [adultsNo, setAdultsNo] = useState("");
  const [kidsNo, setKidsNo] = useState("");
  // const [price, setPrice] = useState(room.price);
  let [total, setTotal] = useState("");

  return (
    <div className="mt-28 m-5">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold">Laxury Room</h1>
        <p className="flex items-center gap-5 text-gray-600">
          <MdLocationSearching size={28} color="red" />
          Inyanga, Zimbabwe
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 mt-5">
        <div className="col-span-1 md:col-span-3">
          <Image
            src={imageUrl}
            alt="room image"
            height={400}
            width={400}
            className="h-[30rem] w-full object-cover"
          />
          <div className="bg-black h-28 w-full"></div>
          <div className="border p-5 ">
            <h1 className="text-2xl font-semibold capitalize">
              Room description
            </h1>
            <p className="text-gray-500">{description}</p>
            <hr className="my-4" />
            <div>
              <h2 className="text-xl">About room</h2>

              <div className="grid grid-cols-3 mt-5">
                <div className="col-span-1 flex items-center justify-start gap-1">
                  <FaBed /> 2 Bed
                </div>
                <div className="col-span-1 flex items-center justify-start gap-1">
                  <MdBathtub /> 2 Bath
                </div>
                <div className="flex items-center justify-start gap-1">
                  <FaWifi /> Free WiFi
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify- items-center gap-4 mt-10 md:mt-0 col-span-2 h-full w-full md:mx-5 border mx-auto p-5">
          <h1 className="text-5xl font-bold mt-4">LOGO.</h1>
          <h1 className="text-xl ">CFK-NYA Resort</h1>
          <FillButton name={"Whatsapp Us"} link={""} onClick={""} />

          <p className="text-green-600 text-start">
            Complete this form for booking...
          </p>
          <div className="w-full gap-2">
            <div className="fex flex-wrap md:grid md:grid-cols-2 gap-2">
              <div className="col-span-1 py-1">
                <label className="font-semibold">
                  Name<span className="text-red-700">*</span>
                </label>
                <input
                  placeholder="Fullname"
                  type="text"
                  // value={}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="col-span-1 py-1">
                <label className="font-semibold">
                  Surname<span className="text-red-700">*</span>
                </label>
                <input
                  placeholder="surname"
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="col-span-1 py-1">
              <label className="font-semibold">
                Address<span className="text-red-700">*</span>
              </label>
              <input
                placeholder="Address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <div className="fex flex-wrap md:grid md:grid-cols-2 gap-2">
              <div className="col-span-1 py-1">
                <label className="font-semibold">
                  City<span className="text-red-700">*</span>
                </label>
                <input
                  placeholder="City"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="col-span-1 py-1">
                <label className="font-semibold">
                  Country<span className="text-red-700">*</span>
                </label>
                <input
                  placeholder="Country"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="col-span-1 py-1">
              <label className="font-semibold">
                Email<span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <div className="fex flex-wrap md:grid md:grid-cols-2 gap-2">
              <div className="col-span-1 py-1">
                <label className="font-semibold">
                  Arrival Date<span className="text-red-700">*</span>
                </label>
                <input
                  value={arrivaldate}
                  onChange={(e) => setArrivaldate(e.target.value)}
                  type="date"
                  name="arrivaldate"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="col-span-1 py-1">
                <label className="font-semibold">
                  Departure Date<span className="text-red-700">*</span>
                </label>
                <input
                  value={deptdate}
                  onChange={(e) => setDeptdate(e.target.value)}
                  type="date"
                  name="deptdate"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="fex flex-wrap md:grid md:grid-cols-2 gap-2">
              <div className="col-span-1 py-1">
                <label className="font-semibold">
                  Number of Adults<span className="text-red-700">*</span>
                </label>
                <input
                  value={adultsNo}
                  onChange={(e) => setAdultsNo(e.target.value)}
                  type="text"
                  name="adults"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="col-span-1 py-1">
                <label className="font-semibold">
                  Number of children
                  <span className="text-red-700">*</span>
                </label>
                <input
                  value={kidsNo}
                  onChange={(e) => setKidsNo(e.target.value)}
                  type="text"
                  name="kids"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </div>
          <FillButton name={"Submit"} link={""} onClick={""} />
          <p className="text-center text-sm text-gray-600 ">
            {
              "By submitting this booking, you agree to the cfknyaresort.co.zw/terms' "
            }
            <span className="text-red-700">Terms & Conditions</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EditRoomDetails;
