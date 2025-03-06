import React from 'react'
import Meetinner from './Meetinner'

const Meet = () => {
  return (
    <div className='lg:h-[40vh] flex flex-col justify-center text-center gap-y-[7vh]'>
      <p className='font-semibold text-3xl'>MEET OUR TEAMS</p>
      <div className='meets grid lg:grid-cols-3 grid-cols-1 px-[20vw] gap-y-25 sm:gap-y-[5vh] content-center justify-items-center'>
        <Meetinner name={"MR. RAM SHARMA"} position={"CEO"} desc={"Established by Nepal Oil Corporation Limited in 1984, it was taken over by Panchakanya Group ."} />

        <Meetinner name={"MR. RAM SHARMA"} position={"CEO"} desc={"Established by Nepal Oil Corporation Limited in 1984, it was taken over by Panchakanya Group ."} />

        <Meetinner name={"MR. RAM SHARMA"} position={"CEO"} desc={"Established by Nepal Oil Corporation Limited in 1984, it was taken over by Panchakanya Group ."} />

      </div>
    </div>
  )
}

export default Meet
