import { footerTitle } from "@/constant";
import Link from "next/link";

export const SharedFooter = () => {
  return (
    <footer className="bg-primaryBlack py-4">
      <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-16 text-white">
        <div>
          <h5>
            Get valuable strategy, culture and brand insights straight to your
            inbox
          </h5>
          <input type="text" />
          <p>
            By signing up to receive emails from Motto, you agree to our Privacy
            Policy. We treat your info responsibly.
          </p>
        </div>
        <div>
          <h5>{footerTitle.linkOne.title}</h5>
          {footerTitle?.linkOne?.content.map((con, index) => (
            <Link key={index} href={con.link} className="block">
              {con.name}
            </Link>
          ))}
        </div>
        <div>
          <h5>{footerTitle.linkTwo.title}</h5>
          {footerTitle?.linkTwo?.content.map((con, index) => (
            <Link key={index} href={con.link} className="block">
              {con.name}
            </Link>
          ))}
        </div>
        <div>
          <h5>Contact</h5>
          <p>Plot no. 26, mahaveer nagar vistar yojana, kota, 324005</p>
          <a href="" className="block">
            +91 9602089182
          </a>
          <a href="" className="block">
            promodaddydigital@gmail.com
          </a>
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
