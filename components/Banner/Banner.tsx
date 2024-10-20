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
          <strong className="font-semibold">GeneriCon 2023</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          Join us in Denver from June 7 – 9 to see what’s coming next&nbsp;
          <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
    </div>
  );
};

export default Banner;
