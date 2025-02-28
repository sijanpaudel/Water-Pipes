import React from 'react'

const SemiFooter = () => {
  return (
    <div className='flex justify-around flex-wrap items-start my-[7vh] h-[40vh] font-medium text-base'>
      <div className='pp w-[15vw]'>
        <img src="image 1.png" alt="" />
        <p className='mt-2'>We Are Manufacturing Company of HDPE Pipe PE 100 NS certified</p>
      </div>
      <div className='office flex flex-col gap-[17]'>
        <p className='text-xl font-semibold'>Office Address</p>
        <span>
            <img className='inline-block mr-4' src="_Icon/Map.png" alt="Address" />
            <p className='inline-block'>Bharatpur, Nepal</p>
        </span>
        <span>
            <img className='inline-block mr-4' src="_Icon/Email.png"  alt="Email" />
            <p className='inline-block'>info@panchalshreepipes.com</p>
        </span>
        <span>
            <img className='inline-block mr-4' src="_Icon/Vector.png" alt="" />
            <p className='inline-block'>9855082605</p>
        </span>
      </div>
      <div className='Company flex flex-col gap-[17]'>
        <p className='font-semibold text-xl'>Company</p>
        <p>About us</p>
        <p>Services</p>
        <p>Products</p>
        <p>Career</p>
        <p>Contact Us</p>
      </div>
      <div className='signup flex flex-col gap-[15] w-[14vw]'>
        <p className='text-xl font-semibold w-[10vw]'>Sign Up for News & Update</p>
        <div className='text-end'>
        <button className='w-fit px-3 text-white bg-[#00227B]'>Sign Up</button>
        </div>
        <p>Connect with us.</p>
      </div>
    </div>
  )
}

export default SemiFooter
