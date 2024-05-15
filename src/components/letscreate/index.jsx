import React from "react";
import { BgAutoScan, HothurFoundation } from "@/assets";

const LetsCreate = () => {
  return (
    <div className="bg-black py-10">
      <div className="flex justify-center w-11/12 mx-auto">
        <div className="w-full text-center relative p-4 tablet:p-8">
          <p className="font-semibold text-7xl leading-9 tablet:leading-3 py-8 px-5 font-serif">
            Let&apos;s Create Something Great
          </p>
          <p className="font-medium text-[28px] py-10 font-serif">
            We shift you from today&apos;s reality to tomorrow&apos;s potential,
            ensuring
          </p>
          <div className="flex flex-col tablet:flex-row justify-center items-center text-18 font-medium">
            <div className="rounded-xl p-[2px]">
              <button className="bg-blue-500 p-4 rounded-lg text-white font-serif font-bold mb-8">
                LET&apos;S TALK WITH US
              </button>
            </div>
          </div>
          <div className="flex justify-center relative">
            <img
              src={HothurFoundation.src}
              alt="img"
            />
          </div>
          <img
            src={BgAutoScan?.src}
            alt="background"
            className="absolute bottom-0 left-[10%]"
          />
        </div>
      </div>
    </div>
  );
};

export default LetsCreate;
