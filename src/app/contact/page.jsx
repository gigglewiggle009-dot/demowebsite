import { contactbanner } from "@/assets";
import { SmallBanner } from "@/components/SharedComponent";
import Contact from "@/components/clnt";
import LetsCreate from "@/components/letscreate";
import React from "react";

function page() {
  return (
    <div>
      <SmallBanner
        bannerImage={contactbanner.src}
        sectionsName="Contact Us"
        discriptions="Contact us"
      />
      <Contact />
      <LetsCreate />
    </div>
  );
}

export default page;
