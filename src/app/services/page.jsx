import { servicebanner } from "@/assets";
import { Clients, Services } from "@/components";
import { SmallBanner } from "@/components/SharedComponent";
import LetsCreate from "@/components/letscreate";
import React from "react";

function page() {
  return (
    <div>
      <SmallBanner
        sectionsName="Service"
        discriptions="Our service"
        bannerImage={servicebanner.src}
      />
      <Clients />
      <LetsCreate />
    </div>
  );
}

export default page;
