import {
  SelectedComponent,
  StatsBlockList,
} from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const StatsWithTitleAndDesc = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data: { heading?: { text: string }, description?: { text: string }, stats?: { list: StatsBlockList[] } } =
    createDataObject(contentBlocks);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            {data.heading?.text && (
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {data.heading.text}
              </h2>
            )}
            {data.description?.text && (
              <p className="mt-4 text-lg/8 text-gray-600">
                {data.description.text}
              </p>
            )}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {data.stats?.list.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm/6 font-semibold text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default StatsWithTitleAndDesc;
