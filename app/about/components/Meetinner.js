import React from 'react'

const Meetinner = ({name, position, desc}) => {
  return (
    <div className='lg:w-[13vw] lg:h-[20vh] p-3 w-[50vw] h-[20vh] rounded-xl shadow-[0_4px_6px_rgba(0,0,0,0.1),0_-4px_6px_rgba(0,0,0,0.1)]'>
        <div className='flex justify-center -translate-y-12'>
        <img src="Group 19.png" className='absolute' alt="" />
        </div>
    <p className='font-normal text-base mt-[4vh] '>{name}</p>
    <p className='text-sm font-normal text-[#338C00]'>{position}</p>
    <p className='font-light text-xs'>{desc}</p>
  </div>
  )
}

export default Meetinner
