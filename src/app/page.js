"use client";
import LetsCreate from "@/components/letscreate";
import NumberTalks from "@/components/numbertalks";
import UserRecommend from "@/components/ourClient";
import { HomeBanner } from "@/components";
import { SharedLayout, SharedTopBanner } from "@/components/SharedComponent";
import { Clients, Services } from "@/components";
import Director from "@/components/director";
import { FreeStart, ServiceImg } from "@/assets";

const page = () => {
  return (
    <>
      <HomeBanner />
      <SharedTopBanner bannerImage={ServiceImg} sectionsName={"Demo"} />
      <UserRecommend />
      <LetsCreate />
      <NumberTalks />
      <Services />
      <Clients />
      <Director />
    </>
  );
};

export default page;
