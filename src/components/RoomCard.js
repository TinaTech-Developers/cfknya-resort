"use client";
import Image from "next/image";
import { FaBed, FaStar, FaWifi } from "react-icons/fa";
import { MdBathtub } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";
import Link from "next/link";

export default function RoomCard({ room }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [book, setBook] = useState(room.name);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [arrivaldate, setArrivaldate] = useState("");
  const [deptdate, setDeptdate] = useState("");
  const [adultsNo, setAdultsNo] = useState("");
  const [kidsNo, setKidsNo] = useState("");
  const [price, setPrice] = useState(room.price);
  let [total, setTotal] = useState("");
  const handleBook = async (e) => {
    e.preventDefault();
    e.preventDefault();
    if (
      !name ||
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
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
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
      className="flex flex-col w-80 h-full shadow-2xl md:w-96 border  bg-transparent rounded-lg my-5 mx-auto text-gray-600 p-5 "
    >
      <Image
        src={room.imageUrl}
        height={300}
        width={400}
        alt=""
        className="w-80 md:w-96 h-52 object-cover"
      />
      <p className="p-2 bg-green-900 w-[7rem] text-center text-white -translate-y-6">
        ${room.price}/Night
      </p>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-xl">{room.name}</h1>{" "}
        <div className="flex items-center justify-center gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>{" "}
      </div>
      <div className="flex items-center justify-between my-4 gap-1">
        <div className="flex items-center justify-center gap-1">
          <FaBed /> 2 Bed
        </div>
        <div className="flex items-center justify-center gap-1">
          <MdBathtub /> 2 Bath
        </div>
        <div className="flex items-center justify-center gap-1">
          <FaWifi /> Free WiFi
        </div>
      </div>
      <p className="pb-4 truncate">{room.description}</p>
      <div className="flex items-center justify-between">
        <button
          onClick={() => setModalOpen(true)}
          className="p-2 text-white bg-orange-700"
        >
          Book Now
        </button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <form onSubmit={handleBook} className="">
            <h3 className="font-bold text-lg text-center py-2">
              {book} : ${Number(price) * Number(adultsNo)}
            </h3>
            <div className="flex flex-col items-center justify-center gap-4 ">
              <div className="w-full gap-2">
                <div className="fex flex-wrap md:grid md:grid-cols-2 gap-2">
                  <div className="col-span-1 py-1">
                    <label className="font-semibold">
                      Name<span className="text-red-700">*</span>
                    </label>
                    <input
                      placeholder="here"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="col-span-1 py-1">
                    <label className="font-semibold">
                      Surname<span className="text-red-700">*</span>
                    </label>
                    <input
                      placeholder="here"
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
                    placeholder="here"
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
                      placeholder="here"
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
                      placeholder="here"
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
                    placeholder="here"
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
              <div className="flex items-baseline justify-between gap-10">
                <button
                  type="submit"
                  className=" border relative py-2 px-6  bg-transparent text-gray-700 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-amber-950 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
                >
                  SUBMIT FORM
                </button>
                <div className="font-bold border p-4">
                  <label className="mx-auto">Total Cost :</label>
                  <input
                    value={total}
                    onChange={(e) => setTotal(Number(price) * Number(adultsNo))}
                    className="text-center"
                  />
                </div>
              </div>
              {/* <ToastContainer /> */}
              {/* <input /> */}
            </div>
          </form>
        </Modal>

        <Link
          key={room._id}
          href={`/rooms/${room._id}`}
          className="p-2 text-white bg-green-900"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
