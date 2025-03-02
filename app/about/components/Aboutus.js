import React from 'react'

const Aboutus = () => {
  return (
    <div className="relative h-[50vh]">
    <div className="absolute inset-0 bg-[url('/pipes.jpeg')] opacity-50 bg-cover bg-center"></div>
  
    <div className="absolute inset-0 bg-[#00227B80] "></div>
  
    {/* Content on top */}
    <div className="relative z-10  h-full text-white flex-col flex justify-center items-center">
      <div className='flex flex-col justify-center items-center w-[35vw] text-center'>
      <p className='text-3xl font-semibold'>ABOUT US</p>
      <p className='font-normal text-sm'>Panchashree Pipes is a trusted Nepali manufacturer of durable, high-quality pipes for agriculture, plumbing, and industry, ensuring reliability and excellence.</p>
      </div>
    </div>
  </div>
  
  )
}

export default Aboutus
