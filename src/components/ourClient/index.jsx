'use client'
import React from "react";
import classNames from "classnames";
import Image from "next/image";
import CustomCarousel from "../SharedComponent/customCarousel";

import BgInfluencer from "@/assets/svg/bgInfluencer.svg";
import { useRouter } from "next/navigation";
import { Influencer1, Influencer2, Influencer3, Influencer4, Influencer5, Influencer6, Influencer7, Influencer8 } from "@/assets";

const userData = [
    {
        image: Influencer5,
        name: "Sonu Sood",
        desc: "Indian Actor and Film Producer"
      },
      {
          image: Influencer2,
          name: "Mohammed Shami",
          desc: "Indian Cricketer"
        },
        {
          image: Influencer6,
          name: "Rashid Khan",
          desc: "Afghan Cricketer"
        },
        {
            image: Influencer1,
            name: "The Great Khali",
            desc: "Indian Professional Wrestler"
        },
        {
            image: Influencer3,
            name: "Amit Bhadana",
            desc: "Indian Comedian and Writer"
        },
        {
      image: Influencer4,
      name: "Kulsum Shadab Wahab",
      desc: "Founder of ARA LUMIERE"
    },
    
    {
      image: Influencer7,
      name: "Ebrahim Mhyn",
      desc: "Social Media Star"
    },
    {
      image: Influencer8,
      name: "Yogesh Lakhani",
      desc: "Film Actor"
    }
  ];

const UserRecommend = () => {
  const { locale } = useRouter();
  return (
    <div className="py-32 tablet:py-100 relative bg-black">
      <BgInfluencer className="absolute top-0 left-0 z-10 w-full h-full" />
      <p className=" text-7xl  font-semibold font-serif leading-67 text-center mb-32 z-20 relative">Our Happy Client</p>
      <div className="mx-4 z-20 relative">
        <CustomCarousel direction={locale === "he" ? "rtl" : "ltr"} loop={true}>
          {userData.map((item, index) => (
            <div
              className={classNames("overflow-hidden", {
                "mt-11": index % 2 !== 0,
              })}
              key={index}
            >
              <img src={item.image.src} alt="img" className="w-[250px] h-[390px] rounded-2xl object-cover" />
              <h1 className="text-4xl py-2 text-gray-500 font-semibold font-serif">{item.name}</h1>
              <p className="text-2xl text-blue-gray-400 font-semibold">{item.desc}</p>
            </div>
          ))}
        </CustomCarousel>
      </div>
    </div>
  );
};

export default UserRecommend;
