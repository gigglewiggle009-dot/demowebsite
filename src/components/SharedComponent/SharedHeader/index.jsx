"use client";
import { logo } from "@/assets";
import { navTitle } from "@/constant";
import Link from "next/link";
import { SharedButton } from "..";
import { MobileDrawer } from "@/components/MobileDrawer";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { usePathname } from "next/navigation";
import styles from "@/components/HomeBanner/style.module.scss";

export const SharedHeader = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="py-5 bg-primaryBlack sticky top-0 z-[999]">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center justify-between">
          <div className="h-[70px] w-[70px]">
            <img src={logo.src} alt="logo" className="h-full w-full" />
          </div>
          <div className="hidden lg:flex items-center gap-[140px] justify-around">
            <div className="flex items-center gap-10">
              {navTitle.map((nav, index) => (
                <Link
                  href={nav.link}
                  key={index}
                  className={`w-fit font-bold text-white text-sm ${
                    path === nav.link ? "text-primary" : null
                  }`}
                >
                  {nav.name}
                </Link>
              ))}
            </div>
            <div>
              <SharedButton
                text="WORKS WITH US"
                className="text-white font-bold text-sm bg-primaryBlue px-4 py-1 rounded-lg *:"
              >
                WORKS WITH US
              </SharedButton>
            </div>
          </div>
          <button className="block lg:hidden text-white" onClick={toggleDrawer}>
            Show
          </button>
          <div className="block lg:hidden">
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="!w-[250px] sm:!w-[400px]"
            >
              <MobileDrawer />
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};
