import {
  SelectedComponent,
  StatsBlockList,
} from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const StatsSimpleDarkBg = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data: { stats?: { list: StatsBlockList[] } } =
    createDataObject(contentBlocks);
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {data.stats?.list.map((stat: StatsBlockList) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base/7 text-gray-400">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default StatsSimpleDarkBg;
