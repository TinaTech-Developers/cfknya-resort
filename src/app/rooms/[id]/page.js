import EditRoomDetails from "@/components/EditRoomDetails";
import Layout from "@/components/Layout";
import { error } from "console";
import React from "react";

const getRoomById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/rooms/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new error("failed to fetch a room");
    }
    const room = res.json();
    console.log(room);
    return room;
  } catch (error) {
    console.log(error);
  }
};

export default async function RoomDetails({ params }) {
  const { id } = params;
  const { room } = await getRoomById(id);
  const { imageUrl, price, name, description } = room;

  return (
    <Layout>
      <EditRoomDetails
        id={id}
        description={description}
        name={name}
        imageUrl={imageUrl}
        price={price}
      />
    </Layout>
  );
}
