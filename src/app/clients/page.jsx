import { clientbanner } from "@/assets";
import { SmallBanner } from "@/components/SharedComponent";
import LetsCreate from "@/components/letscreate";
import UserRecommend from "@/components/ourClient";
import React from "react";

function page() {
  return (
    <div>
      <SmallBanner
        bannerImage={clientbanner.src}
        sectionsName="Client"
        discriptions="Description"
      />
      <UserRecommend />
      <LetsCreate />
    </div>
  );
}

export default page;
