import React from "react";
import Slider from "react-slick";
import { homeBannerData } from "@/constant"; 
import {  CarouselArrowleft, CarouselArrowright } from "@/assets";



const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <img
            src={CarouselArrowright.src}
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
                src={CarouselArrowleft.src}
                className={`${className} custom-arrow next-arrow block absolute lg:!w-11 lg:!h-11 md:!w-9 md:!h-9 !h-7 !w-7  md:ml-12 lg:ml-16 ml-10 z-999 !border-solid !border-2 !border-white rounded-sm !p-1 `}
                onClick={onClick}
                alt="Next Arrow"
            />
        </div>
    );
}

export default function HomeCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "slick-dots ",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="h-[500px] bg-black">
            <Slider {...settings}>
                {homeBannerData.map((item, index) => {
                    return (
                        <div key={index}>
                            <img className="w-full h-482 md:h-auto " src={item.BannerImage} alt="" />
                            
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

