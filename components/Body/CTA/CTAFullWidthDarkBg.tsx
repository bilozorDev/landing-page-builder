import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const CTAFullWidthDarkBg = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  const brandColor = useGetBrandColor();
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Headline */}
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {data.headline?.text ||
              "Boost your productivity. Start using our app today."}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300">
            {data.description?.text ||
              "Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea."}
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {data.primary_button?.link && (
              <a
                href={data.primary_button.link}
                className={`rounded-md bg-[${brandColor}] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[${brandColor}]`}
              >
                {data.primary_button.text || "Get started"}
              </a>
            )}
            {data.secondary_button?.link && (
              <a
                href={data.secondary_button.link}
                className="text-sm/6 font-semibold text-white"
              >
                {data.secondary_button.text || "Learn more"}{" "}
                <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Background SVG with dynamic gradient */}
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      >
        <circle
          r={512}
          cx={512}
          cy={512}
          fill={`url(#dynamic-gradient-${brandColor})`}
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id={`dynamic-gradient-${brandColor}`}>
            <stop stopColor={brandColor} />
            <stop offset={1} stopColor={brandColor} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CTAFullWidthDarkBg;
