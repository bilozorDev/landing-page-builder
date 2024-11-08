import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const NewsletterCenteredCard = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  console.log(data);
  const brandColor = useGetBrandColor();
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          {/* Heading */}
          <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {data.heading?.text || "Get notified when we’re launching"}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
            {data.description?.text}
          </p>

          {/* Form */}
          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              {data.inputPlaceholder?.text || "Email address"}
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder={data.inputPlaceholder?.text || "Enter your email"}
              autoComplete="email"
              className={`min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[${brandColor}] sm:text-sm/6`}
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {data.button?.text || "Notify me"}
            </button>
          </form>

          {/* Background SVG */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="gradient"
                cx={0.5}
                cy={0.5}
                r={0.5}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCenteredCard;
