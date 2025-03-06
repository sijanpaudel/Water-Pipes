import React from 'react';
import Card from './Card';

const Third = () => {
  return (
    <div className='min-h-[500px] p-10'>
      {/* Title Section */}
      <div className='flex flex-col items-center text-center'>
        <p className='text-[#338C00] text-lg'>Our</p>
        <p className='text-[#525252] font-bold text-3xl'>PRODUCT RANGE</p>
      </div>

      {/* Cards Section */}
      <div className='flex flex-wrap justify-center gap-6 mt-10 px-4'>
        <Card 
          title="HDVC Pipes" 
          image="Rectangle 7.png" 
          description="High-density polyethylene pipes for water supply and irrigation." 
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
  );
};

export default Third;
