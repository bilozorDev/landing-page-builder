import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import {
  SelectedComponent,
  StatsBlockList,
} from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const StatsWithDesc = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data: {
    subheading?: { text: string };
    heading?: { text: string };
    description?: { text: string };
    stats?: { list: StatsBlockList[] };
  } = createDataObject(contentBlocks);
  const brandColor = useGetBrandColor();
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our mission
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-base/7 text-gray-600">
                {data.description?.text}
              </p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {data.stats?.list.map((stat) => (
                  <div key={stat.id} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsWithDesc;
