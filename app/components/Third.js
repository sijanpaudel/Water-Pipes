import React from 'react'
import Card from './Card'

const Third = () => {
  return (
    <div className='h-[500] p-[40]'>
      <div className='flex flex-col text-center'>
        <p className='text-[#338C00] text-lg'>Our</p>
        <p className='#525252 font-bold text-3xl'>PRODUCT RANGE</p>
      </div>
      <div className='text-center mt-[40]'>
      <div className="flex flex-wrap gap-4 justify-center p-6">
      <Card 
        title="HDVC Pipes" 
        image="Rectangle 7.png" 
        description="High-density polyethylene pipes for water supply and irrigation" 
      />
      <Card 
        title="Pressure Pipes" 
        image="Rectangle 7.png" 
        description="Strong, durable pipes designed for high-pressure applications." 
      />
      <Card 
        title="Conduit Pipes" 
        image="Rectangle 7.png" 
        description="Protective piping for electrical and industrial use." 
      />
    </div>
      </div>
    </div>
  )
}

export default Third
