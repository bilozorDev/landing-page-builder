import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import React from "react";

const CTAHalfSplitWithImage = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  const brandColor = useGetBrandColor();

  return (
    <div className="relative bg-gray-900">
      <div
        className={`relative h-80 overflow-hidden bg-[${brandColor}] md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2`}
      >
        <img
          alt=""
          src={data?.image.image || part.selectedStyle?.defaultImgScr}
          className="h-full w-full object-cover"
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={brandColor} />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className={`text-base/7 font-semibold text-[${brandColor}]`}>
            {data.overline.text}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {data.headline.text}
          </p>
          <p className="mt-6 text-base/7 text-gray-300">
            {data.description.text}
          </p>
          {data.primary_button.link && data.primary_button.text && (
            <div className="mt-8">
              <a
                href={data.primary_button.link}
                className={`inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[${brandColor}]`}
              >
                {data.primary_button.text}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTAHalfSplitWithImage;
