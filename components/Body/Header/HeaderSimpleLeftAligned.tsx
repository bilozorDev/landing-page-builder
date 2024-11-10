import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const HeaderSimpleLeftAligned = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  const brandColor = useGetBrandColor();
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {data.subheading?.text && (
            <p className={`text-base/7 font-semibold text-[${brandColor}]`}>
              {data.subheading.text}
            </p>
          )}
          {data.headline?.text && (
            <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              {data.headline.text}
            </h2>
          )}
          {data.description?.text && (
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              {data.description.text}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderSimpleLeftAligned;
