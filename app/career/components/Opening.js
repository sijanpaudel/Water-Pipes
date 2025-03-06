import React from "react";
import OpeningInner from "./OpeningInner";

const Opening = () => {
  return (
    <div className="py-[5vh] px-6 sm:px-12 md:px-[10vw] lg:px-[17vw] mb-[6vh]">
      <div className="flex flex-col items-center">
        <p className="text-center font-semibold text-lg sm:text-xl">OPENINGS</p>
        <hr className="w-[26vw] lg:w-[7vw] sm:w-[14vw] border-t-2 border-[#338C00] my-3" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 lg:grid-cols-3 gap-6 justify-items-center">
        <OpeningInner />
        <OpeningInner />
        <OpeningInner />
      </div>
    </div>
  );
};

export default Opening;
