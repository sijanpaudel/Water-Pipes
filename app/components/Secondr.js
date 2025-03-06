import React from 'react';

const Second = () => {
  return (
    <div className="relative  w-full min-h-[70vh] font-bold flex flex-col md:grid md:grid-cols-2 items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center z-0">
        <img className="w-full h-full object-cover opacity-15" src="bg.png" alt="Background" />
      </div>

      {/* Left Section (Image with Badge) */}
      <div className="relative flex justify-center w-full max-w-[90%] md:max-w-xl mx-auto z-10">
        <img className="w-full object-contain max-h-[60vh] " src="about image.png" alt="About Us" />

        {/* Badge */}
        <div className="absolute top-4 right-4 lg:right-[100px] md:top-[1px] text-white flex flex-col justify-center items-center rounded-tr-3xl z-20 w-16 h-16 md:w-24 md:h-24 bg-[#00227B] shadow-lg">
          <div className="text-sm md:text-xl">11K+</div>
          <div className="text-[10px] md:text-sm text-center">Projects Completed</div>
        </div>
      </div>

      {/* Right Section (Text) */}
      <div className="relative w-full px-4 md:px-8 py-8 md:py-12 lg:px-20 text-center md:text-left z-10">
        <div className="mb-4">
          <p className="font-medium text-sm text-[#338C00]">About</p>
          <div className="md:text-lg font-bold text-4xl ">
            <p className='text-[#525252]'>Leading Manufacturer of </p> <p className='text-[#00227B]'>HDPE PE 100 NS Certified </p><p className='text-[#525252]'>Pipes in Nepal</p>
          </div>
        </div>
        
        <div className="text-xs sm:text-sm md:text-base">
          <p className="mb-4 font-medium text-base">
            Panchashree Pipes and Industries Pvt. Ltd. based in Bharatpur, Nepal, is dedicated to manufacturing high-quality HDPE PE 100 NS certified pipes. Our aim is your satisfaction.
          </p>

          {/* Icons */}
          <div className="flex justify-center md:justify-start gap-3 mb-4">
            <img className="w-40 h-20 sm:w-50 sm:h-25" src="Frame 10.png" alt="Icon 1" />
            <img className="w-40 h-20 sm:w-50 sm:h-25" src="Frame 11.png" alt="Icon 2" />
          </div>

          {/* Learn More */}
          <p className="text-white w-30 flex justify-center items-center py-1 rounded-md bg-[#00227B] text-sm font-semibold cursor-pointer hover:underline">Learn More</p>
        </div>
      </div>
    </div>
  );
};

export default Second;
