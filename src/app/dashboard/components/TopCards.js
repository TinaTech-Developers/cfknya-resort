"use client";
import React, { useState, useEffect } from "react";

export default function TopCards() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/reservations");
        const reservations = await response.json();

        if (Array.isArray(reservations.reservations)) {
          setReservations(reservations.reservations);
        } else {
          console.log("Unexpected data structure:", reservations);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // revenue for seven days
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  const weekly = (Array.isArray(reservations) ? reservations : []).reduce(
    (acc, current) => {
      const createdAtDate = new Date(current.createdAt); // Use the createdAt field

      console.log(`Created At: ${createdAtDate}, Total: ${current.total}`); // Debugging log

      // Check if createdAtDate is a valid date
      if (!isNaN(createdAtDate.getTime())) {
        if (createdAtDate >= sevenDaysAgo && createdAtDate <= today) {
          return acc + (parseFloat(current.total) || 0); // Ensure total is treated as a number
        }
      } else {
        console.warn(`Invalid date for reservation: ${current.createdAt}`); // Warning for invalid dates
      }

      return acc;
    },
    0
  );

  // revenue for month agoo
  const monthAgo = new Date(today);
  monthAgo.setMonth(today.getDate() - 30);
  const monthly = (Array.isArray(reservations) ? reservations : []).reduce(
    (acc, current) => {
      const createdAtDate = new Date(current.createdAt); // Use the createdAt field

      console.log(`Created At: ${createdAtDate}, Total: ${current.total}`); // Debugging log

      // Check if createdAtDate is a valid date
      if (!isNaN(createdAtDate.getTime())) {
        if (createdAtDate >= monthAgo && createdAtDate <= today) {
          return acc + (parseFloat(current.total) || 0); // Ensure total is treated as a number
        }
      } else {
        console.warn(`Invalid date for reservation: ${current.createdAt}`); // Warning for invalid dates
      }

      return acc;
    },
    0
  );

  console.log(`Total for the last 30 days: ${monthly}`); // Output the final totareservations

  // total revenue
  const allTotal = (Array.isArray(reservations) ? reservations : []).reduce(
    (acc, current) => acc + (current.total || 0),
    0
  );

  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4 mt-10">
      <div className=" lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">${weekly}</p>
          <p className="text-gray-600">Weekly Revenue</p>
        </div>
        <p className="bg-amber-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-amber-700 text-lg">+8%</span>
        </p>
      </div>
      <div className=" lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">${monthly}</p>
          <p className="text-gray-600">Monthly Revenue</p>
        </div>
        <p className="bg-amber-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-amber-700 text-lg">+78%</span>
        </p>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">${allTotal}</p>
          <p className="text-gray-600">Total Revenue</p>
        </div>
        <p className="bg-amber-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-amber-700 text-lg">+48%</span>
        </p>
      </div>
    </div>
  );
}
