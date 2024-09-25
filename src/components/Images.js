import Image from "next/image";
import Link from "next/link";

const Images = ({ image, heading, description, link }) => {
  return (
    <div className="flex flex-col items-center justify-center  w-full h-full my-10">
      <div className="w-[90%] gap-10 ">
        <Image
          src={image}
          alt=""
          height={400}
          width={500}
          className="w-[100%] h-[27rem] object-cover "
        />

        <Link
          className="mt-10 text-xl md:text-2xl font-bold underline hover:text-green-700"
          href={link}
        >
          {heading}
        </Link>
        <p className="my-4">{description}</p>
      </div>
    </div>
  );
};

export default Images;
