import React from 'react'

const Second = () => {
  return (
    <div className='grid grid-cols-2 bg-amber-400 justify-between items-center relative w-full h-[70vh] font-bold'>
      <div className='absolute inset-0 bg-fixed bg-cover z-0'>
        <img className='w-full h-full object-cover opacity-15' src="bg.png" alt="" />
      </div>
      <div className='relative z-10 grid row-span-3'>
        <div className='relative'>
          <img className='h-[60vh] w-[100vw]' src="about image.png" alt="" />
        </div>
        <div className="absolute font-bold flex flex-col justify-center items-center text-white mt-1 rounded-tr-3xl z-20 right-0 top-0 w-[6vw] h-[13vh] bg-[#00227B]">
          <div className='text-lg'>11K+</div>
          <div className='text-xs'>Projects Completed</div>
        </div>

      </div>
      <div className='relative bg-red-500 mx-[15vw]'>
        <div className="about w-[50%]">
          <p>About</p>
          <p>Leading Manufacturer of HDPE PE 100 NS Certified Pipes in Nepal</p>
        </div>
        <div className="content">
          <p>Panchashree Pipes and Industries Pvt. Ltd. based in Bharatpur, Nepal, is dedicated to manufacturing high-quality HDPE PE 100 NS certified pipes. Our aim is your satisfaction.</p>
          <span className='flex'>
            <img src="Frame 10.png " alt="" />
            <img src="Frame 11.png" alt="" />
          </span>
          <p>Learn More</p>
        </div>
      </div>
    </div>
  )
}

export default Second
