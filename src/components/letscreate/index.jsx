import React from "react";


import  {BgAutoScan, HothurFoundation}  from "@/assets";

const LetsCreate = () => {

    return (
        <div className="bg-black">
            <div className='py-8 flex justify-center w-11/12 mx-auto '>
            <div className='max-w-screen-desktop w-full text-center relative'>
                <p className='font-semibold text-[72px] leading-9 tablet:leading-3 px-5 font-serif'>Let&apos;s Create Something Great</p>
                <p className='font-medium text-[28px] py-24 font-serif'>We shift you from today&apos;s reality to tomorrows potential, ensuring</p>
                <div className='flex flex-col tablet:flex-row justify-center gap-5 mt-5 items-center text-18 font-medium'>
                    <div className='rounded-xl p-[2px]'>
                        <button className="bg-blue-500 p-4 rounded-lg text-white font-serif font-bold mb-8 ">LET&apos;S TALK WITH US</button>
                    </div>
                </div>
                <div className='flex justify-center '>
                    <img src={HothurFoundation.src} alt="img" className='block  mt-5 pt-3 pb-12' />
                </div>
                <img src={BgAutoScan?.src} alt={"background"} className='absolute bottom-0 tablet:top-[42%] ' />
            </div>
        </div>
        </div>
    );
};

export default LetsCreate;
