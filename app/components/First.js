import React from 'react';

const First = () => {
    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div className="absolute inset-0 bg-fixed z-10">
                <img src="image 32.png" className="w-full h-[60vh] md:h-[70vh] object-cover" alt="Background" />
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center text-white px-6 pt-10 md:pt-20 lg:pt-28">
                {/* Text Section */}
                <div className="max-w-2xl text-center md:text-left">
                    <p className="text-[#338C00] mb-2 text-sm md:text-base">
                        100% Satisfaction Guarantee
                    </p>
                    <h1 className="font-bold text-3xl md:text-5xl leading-tight">
                        <span className="text-[#1E1E1E]">WE ARE TOP </span>
                        <span className="text-[#00227B]">PIPES MANUFACTURER</span>
                    </h1>
                    <button className="mt-4 px-5 py-2 bg-[#00227B] rounded-lg text-white text-sm md:text-base">
                        Learn More
                    </button>
                </div>

                {/* Image Section */}
                <div className="flex justify-center w-full mt-6 md:mt-10">
                    <img src="Frame 28.png" className="w-full max-w-4xl object-contain" alt="Product Showcase" />
                </div>
            </div>
        </div>
    );
};

export default First;
