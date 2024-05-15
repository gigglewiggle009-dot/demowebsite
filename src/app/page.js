"use client";
import LetsCreate from "@/components/letscreate";
import UserRecommend from "@/components/ourClient";
import {
  Clients,
  Services,
  HomeBanner,
  TextMarque,
  HomeCarousel,
} from "@/components";

const page = () => {
  return (
    <>
      <HomeBanner />
      <TextMarque />
      <HomeCarousel />
      <Services />
      <Clients />
      <LetsCreate />
      <UserRecommend />
    </>
  );
};

export default page;
