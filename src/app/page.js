"use client";
import LetsCreate from "@/components/letscreate";
import NumberTalks from "@/components/numbertalks";
import UserRecommend from "@/components/ourClient";
import { HomeBanner, TextMarque } from "@/components";
import { SharedLayout, SharedTopBanner } from "@/components/SharedComponent";
import { Clients, Services } from "@/components";
import Director from "@/components/director";
import { FreeStart, ServiceImg } from "@/assets";

const page = () => {
  return (
    <>
      <HomeBanner />
      <TextMarque />
      {/* <SharedTopBanner bannerImage={ServiceImg} sectionsName={"Demo"} /> */}
      <Services />
      <Clients />
      <UserRecommend />
      <LetsCreate />
      {/* <NumberTalks /> */}
      {/* <Director /> */}
    </>
  );
};

export default page;
