import React from "react";
import { useBannerSetting } from "../contexts/BannerTabSettings";
import useGetBrandColor from "../hooks/useGetBrandColor";

const Banner = () => {
  const { bannerSettings } = useBannerSetting();
  const brandColor = useGetBrandColor();
  if (!bannerSettings.display) return null;
  return (
    <div
      className={`flex items-center justify-center align-middle gap-x-6 bg-[${brandColor}] px-6 py-2.5 sm:px-3.5 `}
    >
      <p className="text-sm leading-6 text-white">
        <a href="#">
          {bannerSettings.data.text}&nbsp;
          <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
    </div>
  );
};

export default Banner;
