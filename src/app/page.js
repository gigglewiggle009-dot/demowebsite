import { SharedLayout } from "@/components/SharedComponent";
import { Clients } from "@/components";
import Services from "@/components/Services";

const page = () => {
  return (
    <SharedLayout>
      <Services />
      <Clients />
    </SharedLayout>
  );
};

export default page;
