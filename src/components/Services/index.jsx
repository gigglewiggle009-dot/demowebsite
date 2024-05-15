"use client";
import { ServiceImg } from "@/assets";
import { serviceData } from "@/constant";
import { SharedHeading } from "../SharedComponent";
import { LuCheckCircle } from "react-icons/lu";
import { motion } from 'framer-motion'

export const Services = () => {
  return (
    <div className="bg-primaryBlack text-white overflow-hidden">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-4">
          <motion.div
           initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1,ease:'easeOut' }}
          >
            <img src={ServiceImg.src} className="h-full w-full" alt="Service" />
          </motion.div>
          <div className="mx-16">
            <motion.div
             initial={{ x: 100, opacity: 0 }}
            animate='animate'
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1,ease:'easeOut' }}
             className="flex flex-col justify-center h-full w-full items-start space-y-8  ">
              <SharedHeading>{serviceData.header}</SharedHeading>
              <div className="text-base font-normal">{serviceData.details}</div>
              <div className="space-y-5">
                {[
                  serviceData.subtext1,
                  serviceData.subtext2,
                  serviceData.subtext3,
                  serviceData.subtext4,
                ].map((text, index) => (
                  <div
                    key={index}
                    className="font-semibold flex items-center gap-7 text-blue-500"
                  >
                    <LuCheckCircle className="text-green text-3xl" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
