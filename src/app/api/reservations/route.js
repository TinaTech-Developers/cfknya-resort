import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Reservations from "../../../../models/reservations";

export async function POST(request) {
  const {
    fullName,
    surname,
    address,
    country,
    city,
    email,
    arrivaldate,
    deptdate,
    kidsNo,
    adultsNo,
    book,
    price,
    total,
  } = await request.json();

  await connectMongoDB();

  // Check for overlapping reservations
  const existingReservations = await Reservations.find({
    book: book,
    $or: [
      { arrivaldate: { $lte: deptdate }, deptdate: { $gte: arrivaldate } },
      { arrivaldate: { $gte: arrivaldate }, deptdate: { $lte: deptdate } },
    ],
  });

  if (existingReservations.length > 0) {
    return NextResponse.json(
      {
        message: `This room is booked from ${arrivaldate} to ${deptdate}. You may book dates after this period if you are flexible.

`,
      },
      { status: 400 }
    );
  }

  // Create new reservation
  await Reservations.create({
    fullName,
    surname,
    address,
    country,
    city,
    email,
    arrivaldate,
    deptdate,
    kidsNo,
    adultsNo,
    book,
    price,
    total,
  });

  return NextResponse.json({ message: "Reservation Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const reservations = await Reservations.find();
  return NextResponse.json({ reservations });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Reservations.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Reservation Successfully Deleted" },
    { status: 200 }
  );
}
