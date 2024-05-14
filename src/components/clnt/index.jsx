// Contact.js
import React from "react";
import { contactData } from "@/constant";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="py-20 bg-primaryBlack">
      <div className="w-5/6 mx-auto grid grid-cols-3 gap-x-8 gap-y-8">
        {contactData.map((item, index) => (
          <div
            className="bg-[#ecefff] cursor-pointer border-primaryBlue h-[208px] transition-all duration-300 ease-in-out group rounded-lg overflow-hidden relative"
            key={index}
          >
            <div className="xl:p-8 group-hover:p-6 duration-300 transform p-2 group-hover:space-y-2 space-y-9 font-semibold">
              <img
                className="my-2 h-16 w-16 transition-all duration-300 transform"
                src={item.image.src}
                alt="Contact Image"
              />
              <p className="text-19 text-primaryBlack transition-all duration-300">
                {item.heading}
              </p>
              <div className="email-container hidden group-hover:flex flex-col">
                {item?.details?.map((d, i) => (
                  <div key={i}>
                    <p href={d} className="font-normal text-black text-base">
                      {d}
                    </p>
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
