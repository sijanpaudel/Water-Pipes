import React from 'react';

const Fourth = () => {
  return (
    <div className='mt-[150px] relative'>
      {/* Background Image */}
      <div className='absolute inset-0 bg-fixed bg-cover z-0'>
        <img className='w-full h-full object-cover opacity-15' src="bg.png" alt="Background" />
      </div>

      {/* Text Content */}
      <div className='relative z-10 flex flex-col text-center'>
        <p className='text-[#338C00] mt-10 text-lg'>Our</p>
        <p className='text-[#525252] font-bold text-3xl'>PRODUCT RANGE</p>
      </div>

      {/* Image and Additional Text */}
      <div className='relative z-20 mt-10'>
        <div className='flex justify-center'>
          <img className='mx-auto' src="Group 1.png" alt="Group" />
        </div>
        <div className='absolute inset-x-0 bottom-12 left-110 flex '>
          <div className='text-white text-center'>
            <p className='font-semibold text-3xl'>Agriculture</p>
            <p className='font-medium text-xl'>100K+ Projects Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;