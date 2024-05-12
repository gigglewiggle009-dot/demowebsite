"use client"
import { HomeBanner } from "@/components";
import { SharedCard, SharedLayout } from "@/components/SharedComponent";
import { Clients , Services} from "@/components";

const page = () => {
  return (
    <SharedLayout>
      <HomeBanner />
      <Services />
      <Clients />
    </SharedLayout>
  );
};

export default page;
