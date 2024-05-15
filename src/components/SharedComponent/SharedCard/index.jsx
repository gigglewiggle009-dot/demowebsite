import React from 'react';
import VideoBg from "@/assets/svg/videoBackground.svg";


export const SharedCard = ({ item, director, management }) => {
    
    return (
        <div className='flex flex-col gap-5 shadow-xl relative rounded-xl overflow-hidden cursor-pointer bg-cardBg border bottom-2 border-[#5D4D6D] opacity-100 hover:scale-105 duration-300 transform'>

            <img className={`w-full bg-white z-10 ${director ? 'h-[700px] object-cover' : 'h-[220px]'}`} src={item?.img} alt="Al Saif" />
            <div className='px-5 mb-5'>
                {director ? (
                    <>
                        <h1 className='text-3xl font-semibold text-center text-gray-400 bg-pri'>{item?.header}</h1>
                    </>
                ) : (
                    <>
                        <h1 className='text-base font-semibold'>{item?.header}</h1>
                        <p className='text-sm mt-4'>{item?.text}</p>
                    </>
                )}
                {/* Management Condition */}
                {management && (
                    <>
                        <h1 className='text-3xl font-semibold text-center text-gray-400'>{item?.header}</h1>
                        <p className='text-sm mt-4'>{item?.text}</p>
                    </>
                )}
            </div>
        </div>
    );
};
