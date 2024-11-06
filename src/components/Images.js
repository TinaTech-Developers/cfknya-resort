import Image from "next/image";
import Link from "next/link";

const Images = ({ image, heading, description, link }) => {
  return (
    <div className="flex flex-col items-center justify-center  w-full h-full my-10">
      <div className="w-[90%] gap-10 ">
        <div className="w-[90vw] h-[27rem] mx-auto overflow-hidden sm:w-[90vw] ">
          <Image
            src={image}
            alt=""
            layout="responsive"
            width={1600} // Placeholder for width (adjust based on your actual image size)
            height={432} // Placeholder for height (proportional to 27rem)
            className="object-cover w-full h-full md:h-[27rem] "
          />
        </div>

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
