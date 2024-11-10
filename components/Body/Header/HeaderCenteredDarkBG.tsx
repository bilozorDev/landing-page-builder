import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const HeaderCenteredDarkBG = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  const brandColor = useGetBrandColor();
  return (
    <div className="bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        {data.subheading?.text && (
          <p className={`text-base/7 font-semibold text-[${brandColor}]`}>
            {data.subheading.text}
          </p>
        )}
        {data.headline?.text && (
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            {data.headline.text}
          </h2>
        )}
        {data.description?.text && (
          <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
            {data.description.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeaderCenteredDarkBG;
