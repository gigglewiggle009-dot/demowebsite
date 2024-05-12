import { navTitle } from "@/constant";
import Link from "next/link";
import { SharedButton } from "../SharedComponent";
import { logo } from "@/assets";

export const MobileDrawer = () => {
  return (
    <div className="px-10 pt-10">
      <div className="h-[70px] w-[70px]">
        <img src={logo.src} alt="logo" className="h-full w-full" />
      </div>
      <div className="space-y-2 mt-5">
        {navTitle.map((nav, index) => (
          <Link
            href={nav.link}
            key={index}
            className="block w-fit font-bold text-sm"
          >
            {nav.name}
          </Link>
        ))}
      </div>
      <div className="mt-5">
        <SharedButton
          text="WORKS WITH US"
          className="font-bold text-sm text-white bg-primaryBlack px-5 py-4 rounded-none"
        />
      </div>
    </div>
  );
};
