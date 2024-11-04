import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import IconComponent from "@/components/ui/IconComponent";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const FeaturesOneColumn = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  const brandColor = useGetBrandColor();
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className={`text-base/7 font-semibold text-[${brandColor}]`}>
            {data.subtitle.text}
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
            {data.headline.text}
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            {data.description.text}
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            alt="App screenshot"
            src={part.image || "https://placehold.co/1920x1080"}
            width={1920}
            height={1080}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {data.features.list.map((feature) => (
            <div key={feature.name} className="flex">
              <div className="mr-4">
                <IconComponent iconName={feature.icon || "PhoneIcon"} />
              </div>
              <div className="flex-1">
                <dt className="inline font-semibold text-gray-900 space-x-4">
                  {feature.name}
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FeaturesOneColumn;
