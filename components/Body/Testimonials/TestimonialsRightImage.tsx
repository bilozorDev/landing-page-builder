import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const TestimonialsRightImage = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  return (
    <section className="isolate overflow-hidden bg-white px-6 lg:px-8">
      <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
        <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />

        <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <svg
              fill="none"
              viewBox="0 0 162 128"
              aria-hidden="true"
              className="absolute -top-12 left-0 -z-10 h-32 stroke-gray-900/10"
            >
              {/* SVG Path */}
              <path d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71..." />
            </svg>
            {data.testimonial?.text && (
              <blockquote className="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
                <p>{data.testimonial.text}</p>
              </blockquote>
            )}
          </div>
          <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
            <img
              src={data.image?.image || part.selectedStyle?.defaultImgScr}
              className="rounded-xl bg-indigo-50 lg:rounded-3xl"
            />
          </div>
          <figcaption className="text-base lg:col-start-1 lg:row-start-3">
            {data.authorName?.text && (
              <div className="font-semibold text-gray-900">
                {data.authorName.text}
              </div>
            )}
            {data.authorTitle?.text && (
              <div className="mt-1 text-gray-500">{data.authorTitle.text}</div>
            )}
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default TestimonialsRightImage;
