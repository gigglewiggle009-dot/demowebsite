import { logo } from "@/assets";
import { footerTitle, socialNetwork } from "@/constant";
import Link from "next/link";

export const SharedFooter = () => {
  return (
    <footer className="bg-primaryBlack py-4">
      <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 py-16 text-white">
        <div>
          <h5 className="text-xl">PromoDaddy Digital</h5>
          <div className="h-[70px] w-[70px] mt-5">
            <img src={logo.src} alt="logo" className="h-full w-full" />
          </div>
          <p className="text-sm mt-5">
            Creates and manages targeted online ads on Google Search and partner
            websites
          </p>
          <h5 className="text-white font-light mt-5">Social Network</h5>
          <div className="flex gap-2 mt-6">
            {socialNetwork.map((logo, index) => (
              <a
                key={index}
                className="rounded-full p-3 cursor-pointer"
                href={logo.link}
              >
                <img
                  src={logo?.image.src}
                  className="h-4 w-4"
                  alt={logo.link}
                />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-xl">{footerTitle.linkOne.title}</h5>
          <div className="mt-5 space-y-3">
            {footerTitle?.linkOne?.content.map((con, index) => (
              <Link key={index} href={con.link} className="block text-base">
                {con.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-xl">{footerTitle.linkTwo.title}</h5>
          <div className="mt-5 space-y-3">
            {footerTitle?.linkTwo?.content.map((con, index) => (
              <Link key={index} href={con.link} className="block text-base">
                {con.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-xl">Contact</h5>
          <p className="mt-5">
            Plot no. 26, mahaveer nagar vistar yojana, kota, 324005
          </p>
          <div className="mt-5">
            <a href="" className="block">
              +91 9602089182
            </a>
            <a href="" className="block">
              promodaddydigital@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto py-7 border-t border-brown ">
        <p className="text-center font-light text-white">
          © 2024 PromoDaddy Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
