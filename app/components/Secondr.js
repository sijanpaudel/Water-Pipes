import React from 'react'

const Secondr = () => {
  return (
    <div className='box-border py-[4vh]opacity-15	 px-[9vw] bg-no-repeat flex gap-x-[5vw] bg-cover h-[70vh] w-[99vw]'>
      <div className="bg-[url(/about.png)] flex justify-center w-[40vw] bg-contain bg-no-repeat">
        <div className="projects font-semibold flex flex-col justify-center items-center text-white translate-x-[10vw] bg-[#00227B] w-[7vw] h-[15vh] rounded-tr-4xl">
            <p className='text-lg'>11K+</p>
            <p className='text-xs'>Projects Completed</p>
        </div>
      </div>
      <div className="content  box-border flex justify-center px-7 flex-col">
        <div>
        <p className='text-[#338C00] text-sm'>About</p>
        <p className='font-semibold text-3xl flex flex-col'>
            <span className='text-[#525252]'>Leading Manufacturer of</span>
            <span className='text-[#00227B]'>HDPE PE 100 NS Certified</span> 
            <span className='text-[#525252]'> Pipes in Nepal</span></p>
        </div>
        <div className="content">
          <p>Panchashree Pipes and Industries Pvt. Ltd. based in Bharatpur, Nepal, is dedicated to manufacturing high-quality HDPE PE 100 NS certified pipes. Our aim is your satisfaction.</p>
          <span className='flex'>
            <img src="Frame 10.png" alt="" />
            <img src="Frame 11.png" alt="" />
          </span>
          <p className='w-[5vw] flex justify-center items-center rounded-sm bg-[#00227B] text-xs h-[3vh] text-white'>Learn More</p>
        </div>
      </div>
    </div>
  )
}

export default Secondr
