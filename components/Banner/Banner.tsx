import React from "react";
import { useBannerSetting } from "../contexts/BannerTabSettings";
import useGetBrandColor from "../hooks/useGetBrandColor";

const Banner = () => {
  const { bannerSettings } = useBannerSetting();
  const brandColor = useGetBrandColor();
  if (!bannerSettings.display) return null;
  const selectedStyleCSS =
    bannerSettings.style.id === "brand-bg"
      ? `bg-[${brandColor}] text-white`
      : `bg-gray-200 border-b border-gray-300 text-gray-600 font-semibold`;
  return (
    <div
      className={`${selectedStyleCSS} flex items-center justify-center align-middle gap-x-6 px-6 py-2.5 sm:px-3.5 `}
    >
      <p className="text-sm leading-6 ">
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
