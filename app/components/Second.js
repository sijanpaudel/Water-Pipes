import React from 'react'

const Second = () => {
  return (
    <div className='flex justify-around items-center relative w-full h-[60vh] font-bold'>
      <div className='absolute inset-0 bg-fixed bg-cover z-0'>
        <img className='w-full h-full object-cover opacity-15' src="bg.png" alt="" />
      </div>
      <div className='relative z-10'>
        <div className='relative'>
          <img className='h-[50vh]' src="about image.png" alt="" />
        </div>
        <div className="absolute font-bold flex flex-col justify-center items-center text-white mt-1 rounded-tr-3xl z-20 right-0 top-0 w-[6vw] h-[13vh] bg-[#00227B]">
          <div className='text-lg'>11K+</div>
          <div className='text-xs'>Projects Completed</div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Second
