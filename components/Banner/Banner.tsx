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
        {bannerSettings.data.href ? (
          <a href={bannerSettings.data.href}>
            {bannerSettings.data.name}&nbsp;
            <span aria-hidden="true">&rarr;</span>
          </a>
        ) : (
          bannerSettings.data.name
        )}
      </p>
    </div>
  );
};

export default Banner;
