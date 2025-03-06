import React from 'react'
import Seminav from './components/Seminav'
import Service from './components/Service'

const page = () => {
  return (
    <div>
      <Seminav/>
      <Service/>
      <div className='banner h-[40vh] font-medium text-5xl text-white bg-[#00227B] my-8 flex justify-center items-center'>
      Banner Ad
      </div>
    </div>
  )
}

export default page
