import { CheckCircleIcon } from "@heroicons/react/20/solid";
import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const CTADefaultStyle = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  const brandColor = useGetBrandColor();

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            {/* Section Image */}
            <img
              alt="Team member"
              src={
                data.section_image?.image || part.selectedStyle?.defaultImgScr
              }
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            />

            <div className="w-full flex-auto">
              {/* Headline */}
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {data.headline?.text}
              </h2>

              {/* Description */}
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                {data.description?.text}
              </p>

              {/* Benefits List */}
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-white sm:grid-cols-2"
              >
                {data.benefits?.list.map((item) => (
                  <li key={item.id} className="flex gap-x-3">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="h-7 w-5 flex-none"
                    />
                    {item.name}
                  </li>
                ))}
              </ul>

              {/* Job Postings Link */}
              {data.job_postings_link?.link && (
                <div className="mt-10 flex">
                  <a
                    href={data.job_postings_link.link}
                    className={`text-sm/6 font-semibold text-[${brandColor}] hover:opacity-80` }
                  >
                    {data.job_postings_link.text}{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Background Design Element */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className={`aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[${brandColor}] opacity-25`}
          />
        </div>
      </div>
    </div>
  );
};

export default CTADefaultStyle;
