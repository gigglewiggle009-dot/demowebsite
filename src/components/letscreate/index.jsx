import React from "react";

import mainImage from "@/assets/img/png/autoScanMain.png";
import mainImageTablet from "@/assets/img/png/autoScanMainTablet.png";
import background from "@/assets/img/png/bgAutoScan.png";
import { SharedButton } from "../SharedComponent";
import { HothurFoundation } from "@/assets";

const LetsCreate = () => {
  return (
    <div className="pt-50 bg-black flex justify-center w-full border border-black">
      <div className="max-w-screen-desktop w-full text-center relative">
        <p className="font-semibold text-[72px] leading-9 tablet:leading-3 px-5 font-serif">
          Let's Create Something Great
        </p>
        <p className="font-medium text-[28px] py-24 font-serif">
          We shift you from today’s reality to tomorrow’s potential, ensuring
        </p>
        <div className="flex flex-col tablet:flex-row justify-center gap-5 mt-5 items-center text-18 font-medium">
          <div className="rounded-xl p-[2px]">
            <button className="bg-blue-500 p-4 rounded-lg text-white font-serif font-bold mb-8 ">
              LETS TALK WITH US
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={HothurFoundation.src}
            alt="img"
            className="block tablet:hidden mt-5 pt-3 pb-12"
          />
        </div>
        <img
          src={background.src}
          alt={"background"}
          className="absolute bottom-0 tablet:top-[22%] left-[10%]"
        />
      </div>
    </div>
  );
};

export default LetsCreate;
