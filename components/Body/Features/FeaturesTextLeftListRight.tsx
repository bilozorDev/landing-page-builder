import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import IconComponent from "@/components/ui/IconComponent";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const FeaturesTextLeftListRight = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  const brandColor = useGetBrandColor();
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h3 className={`text-base/7 font-semibold text-[${brandColor}]`}>
              {data.subtitle.text}
            </h3>
            <h2 className=" text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {data.headline.text}
            </h2>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {data.features.list.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg ">
                  {"icon" in feature && <IconComponent iconName={feature.icon || "PhoneIcon"} />}
                  </div>
                  {feature.name}
                </dt>
                {"description" in feature && (
                  <dd className="mt-1 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTextLeftListRight;
