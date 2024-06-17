import React from "react";
import FillButton from "./FillButton";

function Inquiry() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-5 w-[90%] md:h-36 h-full gap-4 border bg-white shadow-2xl mx-auto -translate-y-16 -z-50">
      <div className="col-span-1 mx-auto">
        <input type="date" className="p-2 w-56 border md:my-12 mx-4 mt-10" />
      </div>
      <div className="col-span-1 mx-auto">
        <input type="date" className="p-2 w-56 border md:my-12 mx-4" />
      </div>
      <div className="col-span-1 mx-auto">
        <input type="date" className="p-2 w-56 border md:my-12 mx-4" />
      </div>
      <div className="col-span-1 mx-auto">
        <input type="date" className="p-2 w-56 border md:my-12 mx-4" />
      </div>
      <div className="col-span-1 mx-auto my-12">
        {/* <button
          type="submit"
          className="bg-[#000818] text-white uppercase p-2 px-4"
        >
          Submit
        </button> */}
        {/* className="bg-[#000818] text-white uppercase p-2 px-4" */}
        <div className="p-2 px-4">
          <FillButton name={"Submit"} onClick={""} link={""} />
        </div>
      </div>
    </div>
  );
}

export default Inquiry;
