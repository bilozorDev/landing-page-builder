import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import {
  ContentBlock,
  SelectedComponent,
} from "@/components/utils/allAvailableOptions.t";
import React from "react";

const HeroImageBottom = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
console.log(part)
  const brandColor = useGetBrandColor();
  return (
    <div className="relative isolate pt-14">
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
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
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
                  className={`rounded-md bg-[${brandColor}] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[${brandColor}]`}
                >
                  {data["main button"].text}
                </a>
              )}
              {data["secondary button"].link &&
                data["secondary button"].text && (
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
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                alt="App screenshot"
                src={part.image || "https://placehold.co/1920x1080"}
                width={1920}
                height={1080}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
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

export default HeroImageBottom;

const createDataObject = (contentBlocks: ContentBlock[]) => {
  return contentBlocks.reduce((acc, block) => {
    acc[block.blockName] = block;
    return acc;
  }, {} as Record<string, ContentBlock>);
};