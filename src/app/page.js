"use client"
import LetsCreate from "@/components/letscreate";
import NumberTalks from "@/components/numbertalks";
import UserRecommend from "@/components/ourClient";
import { HomeBanner, } from "@/components";
import { Clients , Services} from "@/components";
import Director from "@/components/director";
import HomeCarousel from "@/components/homeCarousel";

const page = () => {
  return (
    <>
      <HomeBanner />
      <HomeCarousel />
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
