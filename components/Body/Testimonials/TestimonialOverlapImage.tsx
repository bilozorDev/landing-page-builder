import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const TestimonialOverlapImage = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  return (
    <div className="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                src={data.image?.image || part.selectedStyle?.defaultImgScr}
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <svg
                fill="none"
                viewBox="0 0 162 128"
                aria-hidden="true"
                className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
              >
                {/* SVG Path */}
                <path d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71..." />
              </svg>
              {data.testimonial?.text && (
                <blockquote className="text-xl/8 font-semibold text-white sm:text-2xl/9">
                  <p>{data.testimonial.text}</p>
                </blockquote>
              )}
              <figcaption className="mt-8 text-base">
                {data.authorName?.text && (
                  <div className="font-semibold text-white">
                    {data.authorName.text}
                  </div>
                )}
                {data.authorTitle?.text && (
                  <div className="mt-1 text-gray-400">
                    {data.authorTitle.text}
                  </div>
                )}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOverlapImage;
