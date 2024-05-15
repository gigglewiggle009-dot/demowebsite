import React from "react";
import Slider from "react-slick";
import { homeBannerData } from "@/constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { arrow } from "@/assets";

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <img
      src={arrow.src}
      className={`${className} custom-arrow next-arrow block absolute lg:!w-11 lg:!h-11 md:!w-9 md:!h-9 !h-7 !w-7 lg:mr-16 md:mr-12 mr-10 2xl:mt-4 !border-solid !border-2 !border-white z-999 rounded-sm !p-1 2x:p-4`}
      onClick={onClick}
      alt="Next Arrow"
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className="  ">
      <img
        src={arrow.src}
        className={`${className} custom-arrow next-arrow block absolute lg:!w-11 lg:!h-11 md:!w-9 md:!h-9 !h-7 !w-7  md:ml-12 lg:ml-16 ml-10 z-999 !border-solid !border-2 !border-white rounded-sm !p-1 `}
        onClick={onClick}
        alt="Next Arrow"
      />
    </div>
  );
};

export const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots ",
    nextArrow: <SampleNextArrow dir={true} />,
    prevArrow: <SamplePrevArrow dir={false} />,
  };

  return (
    <div className="bg-white pb-32">
      <div className="h-[500px]">
        <Slider {...settings}>
          {homeBannerData.map((item, index) => {
            return (
              <div key={index}>
                <img
                  className="w-full h-[482px]  "
                  src={item.BannerImage}
                  alt=""
                />
                <h1>number {index}</h1>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
