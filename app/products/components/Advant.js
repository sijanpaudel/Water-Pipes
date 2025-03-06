import React from "react";

const Advant = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-8 p-6 md:p-12">
      <div className="flex flex-col gap-y-4">
        <h1 className="font-semibold text-2xl sm:text-3xl text-center lg:text-left">
          Advantages & Features of HDVC Pipes
        </h1>
        <div className="flex flex-col gap-y-2 text-sm sm:text-base">
          <p>Resistant to corrosion, rust, and chemical reactions.</p>
          <p>Simple joining methods (solvent welding, push-fit) reduce labor costs and installation time.</p>
          <p>Ideal for water supply, drainage, and industrial applications.</p>
          <p>Reduces scaling and sediment buildup, improving performance.</p>
          <p>High resistance to UV rays (for specially treated uPVC).</p>
          <p>Does not leach harmful substances into water.</p>
          <p>High tensile strength and can withstand high pressure.</p>
          <p>The smooth bore reduces friction, ensuring better water flow and minimal scaling or clogging.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="products/img.png"
          alt="HDVC Pipes"
          className="w-full max-w-md sm:max-w-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Advant;
