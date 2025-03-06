import React from 'react';

const Fourth = () => {
  return (
    <div className="mt-8 relative w-full px-4 flex flex-col items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-no-repeat z-0">
        <img className="w-full h-full object-cover opacity-15" src="bg.png" alt="Background" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center">
        <p className="text-[#338C00] text-lg md:text-xl">Our</p>
        <p className="text-[#525252] font-bold text-2xl md:text-4xl">Application Areas</p>
      </div>

      {/* Image and Text Overlay */}
      <div className="relative z-20 mt-6 md:mt-10 flex flex-col items-center w-full">
        {/* Larger Image with Responsive Padding */}
        <div className="relative w-full max-w-4xl md:max-w-5xl px-2">
          <img className="w-full h-auto mx-auto" src="Group 1.png" alt="Group" />

          {/* Bottom Left Overlay (No Background Color) */}
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white text-left">
            <p className="font-semibold text-lg md:text-2xl">Agriculture</p>
            <p className="font-medium text-sm md:text-lg">100K+ Projects Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
