import React from 'react'

const First = () => {
    return (
        <>
            <div className="relative">
                <div className="absolute inset-0 bg-fixed z-10">
                    <img src="image 32.png" className="w-full h-[600px]" alt="" />
                </div>

                <div className="flex flex-col relative z-20 pt-6 pl-6 text-white">
                    <div  className='ml-[197] mt-[157] w-[520] h-[228]'>   
                        <p className='text-[#338C00] my-1'>100% Satisfaction Guarentee</p>
                        <h1 className='font-bold text-5xl my-1'><span className='text-[#1E1E1E]'>WE ARE TOP</span> <span className='text-[#00227B]'>PIPES MANUFACTURER</span></h1>
                        <button className='w-[142] h-[41] my-2 bg-[#00227B] rounded-lg'>Learn More</button>
                    </div>
        
                    <div className='flex justify-center'>
                        <img src="Frame 28.png" className='h-[330] w-[920]' alt="" />
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default First
