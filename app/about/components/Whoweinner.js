"use client"
import React from 'react'
import useViewport from "./useViewport";

const Whoweinner = ({titleblack, titleblue, logo, content, image, contentFirst}) => {
const width = useViewport();

  return (
    <>
    {(!contentFirst && width>1024) &&<div className='flex justify-center'>
    <img src={image} alt="" />
</div>}
<div className= {`flex justify-center ${contentFirst?"items-end lg:text-end":"items-start lg:text-start"} text-center gap-5  flex-col`}>
    <div className=''>
        <p className='text-3xl font-semibold inline-block mr-5'>{titleblack} <span className='text-[#00227B]'>{titleblue}</span> </p>
        <img className='inline-block pb-2' src={logo} alt="" />
    </div>
    <p>{content}</p>
</div>
{(contentFirst || width<1024) &&
<div>
    <img src={image} alt="" />
</div>}
</>
  )
}

export default Whoweinner
