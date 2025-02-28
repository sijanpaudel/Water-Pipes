import React from 'react'

const Card = ({title, image, description}) => {
  return (
    <div className='border-[#A2A2A2] border-1 w-[400] flex justify-center'>
      <div className='flex flex-col text-start p-5'>
        <img className='w-[360] flex' src={image} alt="" />
        <div className='flex flex-col gap-y-2 mt-5'>
            <h2 className='font-semibold text-xl'>{title}</h2>
            <div className='font-medium text-base'>{description}</div>
            <div className=''>
                <p className='inline-block'>Learn More</p>
                <img className='inline-block ml-2' src="Vector.png" alt="" />
                </div>
        </div>
      </div> 
    </div>
  )
}

export default Card
