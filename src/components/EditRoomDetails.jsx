"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBed, FaWifi } from "react-icons/fa";
import { MdBathtub, MdLocationSearching } from "react-icons/md";
import FillButton from "./FillButton";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

function EditRoomDetails({ id, name, price, imageUrl, description }) {
  const API_BASE_URL =
    process.env.API_BASE_URL ||
    "http://localhost:3000" ||
    "www.cfknyaresort.co.zw";

  // const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);
  const [newImage, setNewImage] = useState(imageUrl);
  const [newDescription, setNewDescription] = useState(description);

  const [book, setBook] = useState(name);
  const [fullName, setFullName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [arrivaldate, setArrivaldate] = useState("");
  const [deptdate, setDeptdate] = useState("");
  const [adultsNo, setAdultsNo] = useState("");
  const [kidsNo, setKidsNo] = useState("");
  // const [price, setPrice] = useState(price);
  let [total, setTotal] = useState(price * adultsNo);

  const handleBook = async (e) => {
    e.preventDefault();
    e.preventDefault();
    if (
      !fullName ||
      !surname ||
      !address ||
      !country ||
      !email ||
      !arrivaldate ||
      !deptdate ||
      !kidsNo ||
      !adultsNo ||
      !book
    ) {
      alert("Fill all fields");
      return;
    }
    try {
      const res = await fetch(`${API_BASE_URL}/api/reservations`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          surname,
          address,
          country,
          email,
          arrivaldate,
          deptdate,
          kidsNo,
          adultsNo,
          book,
          price,
          total,
        }),
      });
      if (res.ok) {
        onClick();
      }
    } catch (error) {
      console.log("Error ");
    }
    const onClick = () => {
      toast("Your Booking Was Successful, We will respond to your email", {
        type: "success",
        position: toast.POSITION.TOP_CENTER,
      });
    };
  };

  return (
    <div className="mt-28 m-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">Laxury Room</h1>
          <p className="flex items-center gap-5 text-gray-600">
            <MdLocationSearching size={28} color="red" />
            Inyanga, Zimbabwe
          </p>
        </div>
        <Link
          href={"/rooms"}
          className="flex items-center justify-center gap-1 border px-3 py-2 bg-green-900 text-white"
        >
          <ArrowBigLeft />
          Back
        </Link>
      </div>
      <hr className="w-[100%] px-4 mx-auto my-4" />
      <div className="grid grid-cols-1 md:grid-cols-5 mt-5">
        <div className="col-span-1 md:col-span-3 border">
          <Image
            src={imageUrl}
            alt="room image"
            height={400}
            width={400}
            className="h-[24rem] w-full object-cover"
          />
          <div className="bg-black h-44 w-full -mt-2">
            <Image
              src={imageUrl}
              alt=""
              height={200}
              width={200}
              className="h-44 w-44 object-cover p-2 mt-2"
            />
          </div>
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
        <div className="flex flex-col justify- items-center gap-4 mt-10 md:mt-0 col-span-2 h-full w-full md:mx-5 border mx-auto p-5 ">
          <Image
            src={"/logo.jpeg"}
            alt="Novu Resort"
            height={100}
            width={200}
            className="h-44 w-44 object-cover"
          />

          <FillButton name={"Whatsapp Us"} link={""} onClick={""} />

          <p className="text-green-600 text-start">
            Complete this form for booking...
          </p>
          <form onSubmit={handleBook}>
            <div className="w-full gap-2 mb-4">
              <div className="fex flex-wrap md:grid md:grid-cols-2 gap-2">
                <div className="col-span-1 py-1">
                  <label className="font-semibold">
                    Name<span className="text-red-700">*</span>
                  </label>
                  <input
                    placeholder="Fullname"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
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
            <button
              type="submit"
              className=" border relative py-2 px-6  bg-transparent text-gray-700 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-orange-700 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
            >
              SUBMIT FORM
            </button>
            <ToastContainer />
          </form>
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
