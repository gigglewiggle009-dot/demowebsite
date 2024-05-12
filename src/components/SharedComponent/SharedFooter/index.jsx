import { logo } from "@/assets";
import { GoArrowUpRight } from "react-icons/go";
import {
  footerNewsletter,
  footerOfficeInfo,
  footerTitle,
  socialNetwork,
} from "@/constant";
import Link from "next/link";
import { IoArrowRedoOutline } from "react-icons/io5";
import { RedLine } from "..";

export const SharedFooter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <footer className="bg-primaryBlack">
      <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-16">
        <div>
          <h1 className="text-xl">PromoDaddy Digital</h1>
          <div className="w-[80px] h-[80px] mt-8">
            <img src={logo.src} className="h-full w-full" alt="logo" />
          </div>
          <div className="mt-5 relative">
            <GoArrowUpRight className="h-8 w-8 absolute top-2 right-1 text-black " />
            <input
              type="email"
              placeholder="Your email here"
              className="text-lg text-black py-3 px-3 rounded-lg w-full outline-none"
            />
          </div>
          <p className="text-sm mt-4 leading-5">
            By signing up to receive emails from Motto, you agree to our Privacy
            Policy. We treat your info responsibly.
          </p>
        </div>
        <div>
          <h6 className="text-primaryWhite text-23 font-bold leading-30">
            {footerTitle?.linkOne.title}
          </h6>
          <div className="mt-0 mb-8">
            <RedLine />
          </div>
          <div className="space-y-2">
            {footerTitle?.linkOne.content.map((content, index) => (
              <Link
                key={index}
                href={content.link}
                className="block text-base w-fit transition-all duration-300 ease-in-out"
              >
                <span className="group relative inline-block">
                  <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
                    {content.name}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h6 className="text-primaryWhite text-23 font-bold leading-30">
            {footerTitle?.linkTwo.title}
          </h6>
          <div className="mt-0 mb-8">
            <RedLine />
          </div>
          <div className="space-y-2">
            {footerTitle?.linkTwo.content.map((content, index) => (
              <Link
                key={index}
                href={content.link}
                className="block text-base w-fit transition-all duration-300 ease-in-out"
              >
                <span className="group relative inline-block">
                  <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
                    {content.name}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-primaryWhite font-bold leading-30">
            <h6 className="text-primaryWhite text-23 font-bold leading-30">
              Contact
            </h6>
            <div className="mt-0 mb-8">
              <RedLine />
            </div>
            <p>Plot no. 26, mahaveer nagar vistar yojana, kota, 324005</p>
            <div className="mt-8">
              <a className="block" href="">
                +91 9602089182
              </a>
              <a className="block" href="">
                promodaddydigital@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto py-7 border-t border-brown ">
        <p className="text-center text-14 font-light text-primaryWhite">
          © 2024 PromoDaddy Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
