import React from 'react'

const OpeningInner = () => {
  return (
    <div className='lg:w-[21vw] lg:h-[15vh] sm:w-[40vw] w-[80vw] h-[18vh] sm:h-[14vh] rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1),0_-4px_6px_rgba(0,0,0,0.1)] p-3 flex flex-col justify-between bg-white'>
      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-2">
        <div className="text-center lg:text-left">
          <p className='font-semibold text-lg sm:text-xl'>Pipe Worker</p>
          <p className='font-medium text-xs text-gray-600'>On Site</p>
        </div>
        <p className='bg-[#338C00] text-white px-3 py-1 rounded-md text-xs sm:text-sm'>Available</p>
      </div>
      <div className='flex justify-center sm:ml-3 lg:justify-start items-center gap-2'>
        <p className='font-semibold text-sm sm:text-xs text-blue-600'>Learn More</p>
        <img className='w-3 sm:w-2' src="Vector.png" alt="Arrow" />
      </div>
    </div>
  )
}

export default OpeningInner
