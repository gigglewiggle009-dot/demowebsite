"use client";
import LetsCreate from "@/components/letscreate";
import UserRecommend from "@/components/ourClient";
import { Clients , Services} from "@/components";
import HomeCarousel from "@/components/homeCarousel";
import { HomeBanner, TextMarque } from "@/components";

const page = () => {
  return (
    <>
      <HomeBanner />
      <TextMarque />
      {/* <HomeCarousel /> */}
      <Services />
      <Clients />
      <LetsCreate />
      <UserRecommend />
     
    </>
  );
};

export default page;
