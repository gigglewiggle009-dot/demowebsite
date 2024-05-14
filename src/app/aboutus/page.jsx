import { aboutbanner } from "@/assets";
import { SmallBanner } from "@/components/SharedComponent";
import Director from "@/components/director";
import LetsCreate from "@/components/letscreate";
import NumberTalks from "@/components/numbertalks";
import React from "react";

function page() {
  return (
    <div>
      <SmallBanner
        sectionsName="About Us"
        discriptions="All about us"
        bannerImage={aboutbanner.src}
      />
      <NumberTalks />
      <Director />
      <LetsCreate />
    </div>
  );
}

export default page;
