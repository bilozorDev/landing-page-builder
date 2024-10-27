import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import {
  ContentBlock,
  SelectedComponent,
} from "@/components/utils/allAvailableOptions.t";
import React from "react";

const createDataObject = (contentBlocks: ContentBlock[]) => {
  return contentBlocks.reduce((acc, block) => {
    acc[block.blockName] = block;
    return acc;
  }, {} as Record<string, ContentBlock>);
};

const HeroDefaultStyle = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);

  const brandColor = useGetBrandColor();
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className={`relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[${brandColor}] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]`}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            {data.news.text}{" "}
            {data.news.link && (
              <a
                href={data.news.link}
                className={`font-semibold text-[${brandColor}]`}
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            )}
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            {data?.headline.text}
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            {data?.description.text}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
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
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className={`relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[${brandColor}] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]`}
        />
      </div>
    </div>
  );
};

export default HeroDefaultStyle;
