import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const HeroImageRight = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);

  const brandColor = useGetBrandColor();
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href={data.news.link || ""} className="inline-flex space-x-6">
              <span
                className={`rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-[${brandColor}] ring-1 ring-inset ring-indigo-600/10`}
              >
                What&apos;s new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>{data.news.text}</span>
                {data.news.link && (
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400"
                  />
                )}
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            {data?.headline.text}
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            {data?.description.text}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            {data["main button"].link && data["main button"].text && (
              <a
                href={data["main button"].link}
                className={`rounded-md bg-[${brandColor}] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {data["main button"].text}
              </a>
            )}
            {data["secondary button"].link && data["secondary button"].text && (
              <a
                href={data["secondary button"].link}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {data["secondary button"].text}
                <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                alt="App screenshot"
                src={data.image.image || part.selectedStyle?.defaultImgScr}

                width={1920}
                height={1080}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImageRight;
