import { HomeBanner } from "@/components";
import { SharedLayout } from "@/components/SharedComponent";
import { Clients } from "@/components";
import Services from "@/components/Services";

const page = () => {
  return (
    <SharedLayout>
      <HomeBanner />
      <Services />
    </SharedLayout>
  );
};

export default page;
