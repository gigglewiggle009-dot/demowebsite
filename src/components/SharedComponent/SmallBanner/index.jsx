'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SmallBanner = ({ bannerImage, sectionsName, discriptions }) => {
  const param = usePathname();

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bannerImage})` }}
        className="relative block bg-no-repeat bg-cover bg-center z-10"
      >
        <div className="bg-gradient h-[482px] px-0">
          <div className="w-11/12 tablet:w-10/12 h-full m-auto">
            <div className="absolute inset-0 bg-gradient">
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                <h2 className="text-3xl text-center md:text-4xl xl:text-5xl text-white font-extrabold capitalize">
                  {sectionsName}
                </h2>
                <div className="text-white text-center text-sm md:text-base px-6 md:px-12">
                  {discriptions}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-[5%] bg-white px-8 text-black py-3 rounded-t-xl space-x-2 text-base">
            <Link href={'/'}>Home</Link>
            <span>/</span>
            <Link href={param} className="text-primaryBlue capitalize">{sectionsName}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
