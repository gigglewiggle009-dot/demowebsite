import React from "react";
import { BgAutoScan, HothurFoundation } from "@/assets";
import {motion} from "framer-motion"

const LetsCreate = () => {
  return (
    <div className="bg-black py-10">
      <div className="flex justify-center w-11/12 mx-auto">
        <div className="w-full text-center relative p-4 tablet:p-8">
          <p className="font-semibold text-7xl leading-9 tablet:leading-3 py-8 px-5 font-serif">
           
            {(
            " Let's Create Something Great"
          )
            .split(" ")
            .map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>
          <p className="font-medium text-[28px] py-10 font-serif">
            {(
            "We shift you from today's reality to tomorrow's potential,ensuring"
          )
            .split(" ")
            .map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>
          <div className="flex flex-col tablet:flex-row justify-center items-center text-18 font-medium">
            <div className="rounded-xl p-[2px]">
              <motion.button
               initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1,transition:{duration:1}}}
               whileHover={{scale:1.05}}
               whileTap={{scale:0.9}}
               className="bg-primaryBlue p-4 rounded-xl text-white font-serif font-bold mb-8">
                LET&apos;S TALK WITH US
              </motion.button>
            </div>
          </div>
          <motion.div 
          initial={{y:200,scale:0}}
          whileInView={{y:0,scale:1}}
          transition={{
            duration: 1,
            ease:"easeInOut"
          }}
          className="flex justify-center relative">
            <img
              src={HothurFoundation.src}
              alt="img"
            />
          </motion.div>
          <img
            src={BgAutoScan?.src}
            alt="background"
            className="absolute bottom-0 left-[7%]"
          />
        </div>
      </div>
    </div>
  );
};

export default LetsCreate;
