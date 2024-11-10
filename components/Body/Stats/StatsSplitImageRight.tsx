import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import {
  SelectedComponent,
  StatsBlockList,
} from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const StatsSplitImageRight = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data: {
    subheading?: { text: string };
    heading?: { text: string };
    description?: { text: string };
    stats?: { list: StatsBlockList[] };
    image?: { image: string };
  } = createDataObject(contentBlocks);
  const brandColor = useGetBrandColor();
  return (
    <div className="relative bg-white">
      <img
        src={data.image?.image || part.selectedStyle?.defaultImgScr}
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            {data.subheading?.text && (
              <h2 className={`text-base/8 font-semibold text-[${brandColor}]`}>
                {data.subheading.text}
              </h2>
            )}
            {data.heading?.text && (
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {data.heading.text}
              </p>
            )}
            {data.description?.text && (
              <p className="mt-6 text-lg/8 text-gray-600">
                {data.description.text}
              </p>
            )}
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {data.stats?.list.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
                >
                  <dt className="text-sm/6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSplitImageRight;
