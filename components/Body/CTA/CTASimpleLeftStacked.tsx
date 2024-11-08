import React from "react";
import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";

const CTASimpleLeftStacked = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  const brandColor = useGetBrandColor();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Headline */}
        <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {data.headline?.text}
        </h2>

        {/* Buttons */}
        <div className="mt-10 flex items-center gap-x-6">
          {data.primary_button?.link && (
            <a
              href={data.primary_button.link}
              className={`rounded-md bg-[${brandColor}] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[${brandColor}]`}
            >
              {data.primary_button.text}
            </a>
          )}
          {data.secondary_button?.link && (
            <a
              href={data.secondary_button.link}
              className="text-sm/6 font-semibold text-gray-900"
            >
              {data.secondary_button.text} <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTASimpleLeftStacked;
