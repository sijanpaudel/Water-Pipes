"use client"
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Information = () => {
    const [isFirstFocused, setIsFirstFocused] = useState(false);
    const [isLastFocused, setIsLastFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const [isMessageFocused, setIsMessageFocused] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => console.log(data);

    return (
        <div className='flex flex-col lg:flex-row min-h-screen p-6 md:p-12 bg-[#F9F9F9] gap-6'>
            <div className='w-full lg:w-2/5 text-white flex flex-col justify-between p-8 bg-[#00227B] rounded-lg'>
                <div>
                    <p className='font-semibold text-3xl'>Contact Information</p>
                    <p className='text-[#C9C9C9] text-lg mt-2'>Say something to start a live chat!</p>
                </div>
                <div className='flex flex-col gap-y-6 mt-6'>
                    <div className='flex items-center gap-3'>
                        <img src="_Icon/Vector1.png" alt="Phone Icon" />
                        <p>+1012 3456 789</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src="_Icon/Email1.png" alt="Email Icon" />
                        <p>demo@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src="_Icon/Map1.png" alt="Location Icon" />
                        <p>132 Dartmouth Street Boston, MA 02156 USA</p>
                    </div>
                </div>
                <div className='flex gap-6 mt-6'>
                    <div>
                    <img src="_Icon/Twitter.png" alt="Twitter" />
                    </div>
                    <div>
                    <img className='bg-white' src="Insta1.png" alt="Instagram" />
                    </div>
                    <div>
                    <img src="_Icon/Discord.png" alt="Discord" />
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-3/5 bg-white p-6 md:p-10 rounded-lg shadow-lg grid gap-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <label>
                        <span className={`${isFirstFocused ? "text-black" : "text-[#8D8D8D]"} mb-2 block`}>First Name</span>
                        <input onFocus={() => setIsFirstFocused(true)} placeholder='John' className='w-full border-b-2 border-[#8D8D8D] focus:border-black focus:outline-none' {...register("firstName", { onBlur: () => setIsFirstFocused(false) })} />
                    </label>
                    <label>
                        <span className={`${isLastFocused ? "text-black" : "text-[#8D8D8D]"} mb-2 block`}>Last Name</span>
                        <input onFocus={() => setIsLastFocused(true)} placeholder='Doe' className='w-full border-b-2 border-[#8D8D8D] focus:border-black focus:outline-none' {...register("lastName", { onBlur: () => setIsLastFocused(false) })} />
                    </label>
                    <label>
                        <span className={`${isEmailFocused ? "text-black" : "text-[#8D8D8D]"} mb-2 block`}>Email</span>
                        <input onFocus={() => setIsEmailFocused(true)} placeholder='name@email.com' className='w-full border-b-2 border-[#8D8D8D] focus:border-black focus:outline-none' {...register("email", { onBlur: () => setIsEmailFocused(false) })} />
                    </label>
                    <label>
                        <span className={`${isPhoneFocused ? "text-black" : "text-[#8D8D8D]"} mb-2 block`}>Phone Number</span>
                        <input onFocus={() => setIsPhoneFocused(true)} placeholder='Your Phone' className='w-full border-b-2 border-[#8D8D8D] focus:border-black focus:outline-none' {...register("phone", { onBlur: () => setIsPhoneFocused(false) })} />
                    </label>
                </div>
                <div>
                    <label className="block text-gray-700">Select Subject</label>
                    <div className='flex flex-wrap gap-4 mt-2'>
                        {["General Inquiry", "Support", "Feedback", "Other"].map((subject, index) => (
                            <label key={index} className='flex items-center gap-2'>
                                <input type="radio" value={index + 1} {...register("subject")} className='form-radio text-blue-500' />
                                {subject}
                            </label>
                        ))}
                    </div>
                </div>
                <label>
                    <span className={`${isMessageFocused ? "text-black" : "text-[#8D8D8D]"} mb-2 block`}>Message</span>
                    <textarea onFocus={() => setIsMessageFocused(true)} className='w-full border-b-2 border-[#8D8D8D] focus:border-black focus:outline-none' placeholder='Write your message' {...register("message", { onBlur: () => setIsMessageFocused(false) })}></textarea>
                </label>
                <div className='flex justify-end'>
                <button className='bg-[#00227B] text-white py-2 px-4 rounded-md self-end w-full md:w-auto md:py-2 md:px-4 text-sm'>Send Message</button>

                </div>
                </form>
        </div>
    );
};

export default Information;
