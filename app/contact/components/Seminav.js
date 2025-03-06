import React from 'react'

const Seminav = () => {
  return (
    <div className="relative h-[50vh]">
    <div className="absolute inset-0 bg-[url('/pipes.jpeg')] opacity-50 bg-cover bg-center"></div>
  
    <div className="absolute inset-0 bg-[#00227B80] "></div>
  
    {/* Content on top */}
    <div className="relative z-10  h-full text-white flex-col flex justify-center items-center">
      <div className='flex flex-col justify-center items-center w-[35vw] text-center'>
      <p className='text-3xl font-semibold'>Contact Us</p>
      <p className='font-normal text-sm'>Get in touch with us for inquiries, orders, or expert consultation. We’re here to provide the best piping solutions tailored to your needs.</p>
      </div>
    </div>
  </div>
  )
}

export default Seminav
