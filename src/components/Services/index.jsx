'use client'
import { ServiceImg } from '@/assets';
import { serviceData } from '@/constant';

const Services = () => {
  return (
    <div className="w-full mx-auto bg-primaryGray">
      <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-4">
        <div>
          <img src={ServiceImg.src} className="h-full w-full" alt="Service" />
        </div>
        <div className="mx-16">
          <div className="flex flex-col justify-center h-full w-full items-start space-y-8">
            <div className="text-5xl font-bold">{serviceData.header}</div>
            <div className="text-lg font-normal">{serviceData.details}</div>
            <div className='space-y-5'>
              {[serviceData.subtext1, serviceData.subtext2, serviceData.subtext3, serviceData.subtext4].map((text, index) => (
                <div key={index} className="font-semibold">{text}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
