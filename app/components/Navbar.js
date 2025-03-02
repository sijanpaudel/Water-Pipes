import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-[160] bg-[#00227B] flex flex-col justify-between'>
        <div className="upper flex justify-between">
            <div className="upper-first text-white mx-[133] my-[25px] flex gap-[40]">
                <div className="location ">
                    <img className='inline-block mr-[6]' src="_Icon/36.png" alt="" />
                    <p className='inline-block ml-[6]'>Bharatpur-4, Laxmipur, Chitwan, Nepal</p>
                </div>
                <div className="email-address">
                    <img className='inline-block mr-[6]' src="_Icon/42.png" alt="" />
                    <p className='inline-block ml-[6]'>info@panchashreepipes.com.np</p>
                </div>
            </div>
            <div className="upper-last flex mr-[312] h-[74] w-[153]">
                <img src="Frame 5.png" alt="" />
                <img src="Frame 6.png" alt="" />
                <img src="Frame 7.png" alt="" />
            </div>

        </div>

        <div className="lower flex px-10 py-[10] justify-between box-border bg-[#FFFFFF] h-full w-[1529] ml-[120] rounded-t-lg">
            <div className="pp flex">
                <img src="image 1.png" alt="" />
            </div>
            <div className="navs flex items-center">
                <ul className='flex font-semibold text-[#4D4D4D] gap-[57]'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/carrer">Career</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="call h-[41] my-[13] w-[142] border-2 rounded-md
 border-[#00227B] flex justify-center items-center
">
                <p className='text-[#00227B] font-semibold'>Get in call</p>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
