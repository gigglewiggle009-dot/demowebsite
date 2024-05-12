import LetsCreate from "@/components/letscreate";
import NumberTalks from "@/components/numbertalks";
import UserRecommend from "@/components/ourClient";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <UserRecommend />
      <LetsCreate />
      <NumberTalks />
    </div>
  );
}
