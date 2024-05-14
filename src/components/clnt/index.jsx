// Contact.js
import React from 'react';
import { contactData } from '@/constant';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className='lg:py-16'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-x-8 gap-y-8 my-16 lg:w-5/6 w-11/12 mx-auto'>
                {contactData.map((item, index) => (
                    <div className='bg-contactbg h-208 transition delay-150 duration-300 ease-in-out group rounded-lg overflow-hidden relative hover:border-b-3 border-solid border-btnColor' key={index}>
                        <div className='xl:p-8 group-hover:p-6 p-4 group-hover:space-y-2 space-y-9 font-semibold'>
                            <img className={`my-2 transition-all h-16 w-16 group-hover:scale-75 group-hover:-translate-y-6 transform`} src={item.image} alt='Contact Image' />
                            <p className='text-19 transition-all group-hover:-translate-y-6 group-hover:text-base'>{item.heading}</p>
                            <div className={`email-container hidden group-hover:-translate-y-4 flex-col group-hover:flex`}>
                                {item?.details?.map((d, i) => (
                                    <div key={i}>
                                        {/* Render the image dynamically */}
                                        <p href={d?.link} className='font-normal text-black'>{d?.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
