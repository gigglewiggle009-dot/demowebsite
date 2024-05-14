export const SmallBanner = ({ bannerImage, sectionsName, discriptions }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bannerImage})` }}
        className="relative block bg-no-repeat bg-cover bg-center z-10"
      >
        <div className="bg-gradient h-[482px] px-0">
          <div className="w-11/12 tablet:w-10/12 h-full m-auto">
            <div className="relative text-start z-30 h-full flex flex-col items-center justify-end pb-12 space-y-3">
              <h2 className="text-3xl text-center md:text-3xl xl:text-50 text-white md:leading-[0.8em] font-extrabold capitalize">
                {sectionsName}
              </h2>
              <div className="text-white md:w-3/5 xl:w-2/5 text-center text-sm md:text-base px-12 mx-auto">
                {discriptions}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
