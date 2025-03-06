import Link from 'next/link'
import React from 'react'

const SemiFooter = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-24 py-10 min-h-[40vh] text-center sm:text-start font-medium text-base justify-items-center">
        <div className='pp max-w-sm'>
        <img className='text-center' src="image 1.png" alt="" />
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
        <p><Link href={"/about"}>About us</Link></p>
        <p><Link href={"/services"}>Services</Link></p>
        <p><Link href={"/products"}>Products</Link></p>
        <p><Link href={"/career"}>Career</Link></p>
        <p><Link href={"/contact"}>Contact Us</Link></p>
      </div>
      <div className='signup flex flex-col gap-[15]'>
        <p className='text-xl font-semibold max-w-sm'>Sign Up for News & Update</p>
        <div className='sm:text-end'>
        <button className='w-fit px-3 text-white bg-[#00227B]'>Sign Up</button>
        </div>
        <p>Connect with us.</p>
      </div>     
    </div>
  )
}

export default SemiFooter
