import React from 'react'

const ServiceInner = ({title, image, first, second}) => {
  return (
    <div className='border-1 p-2 rounded-2xl'>
    <img src={image} alt="" />
    <div className='flex flex-col items-center gap-y-3'>
      <p className='font-semibold text-2xl'>{title}</p>
      <p className='font-medium text-base'>{first}</p>
      <p>{second}</p>
    </div>
  </div>
  )
}

export default ServiceInner
