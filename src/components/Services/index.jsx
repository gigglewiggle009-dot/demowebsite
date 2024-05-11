'use client'
import { ServiceImg } from '@/assets';
import { serviceData } from '@/constant';
import { SharedHeading } from '../SharedComponent';
import { LuCheckCircle } from "react-icons/lu";

const Services = () => {
  return (
    <div className='bg-primaryBlack text-white'>
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-4">
          <div>
            <img src={ServiceImg.src} className="h-full w-full" alt="Service" />
          </div>
          <div className="mx-16">
            <div className="flex flex-col justify-center h-full w-full items-start space-y-8">
              <SharedHeading>{serviceData.header}</SharedHeading>
              <div className="text-base font-normal">{serviceData.details}</div>
              <div className='space-y-5'>
                {[serviceData.subtext1, serviceData.subtext2, serviceData.subtext3, serviceData.subtext4].map((text, index) => (
                  <div key={index} className="font-semibold flex items-center gap-7">
                    <LuCheckCircle className='text-green-700 text-3xl' />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
