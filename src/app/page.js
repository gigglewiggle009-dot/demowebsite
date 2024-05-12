"use client"
import LetsCreate from "@/components/letscreate";
import NumberTalks from "@/components/numbertalks";
import UserRecommend from "@/components/ourClient";
import { HomeBanner } from "@/components";
import {SharedLayout } from "@/components/SharedComponent";
import { Clients , Services} from "@/components";

const page = () => {
  return (
    <SharedLayout>
      <HomeBanner />
      <UserRecommend />
      <LetsCreate />
      <NumberTalks />
      <Services />
      <Clients />
    </SharedLayout>
  );
};

export default page;
