"use client"
import LetsCreate from "@/components/letscreate";
import NumberTalks from "@/components/numbertalks";
import UserRecommend from "@/components/ourClient";
import { HomeBanner } from "@/components";
import {SharedLayout } from "@/components/SharedComponent";
import { Clients , Services} from "@/components";
import Director from "@/components/director";

const page = () => {
  return (
    <>
      <HomeBanner />
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
