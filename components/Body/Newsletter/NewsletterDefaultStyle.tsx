import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import IconComponent from "@/components/ui/IconComponent";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const NewsletterDefaultStyle = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  console.log(data);
  const brandColor = useGetBrandColor();
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* Left Content Section */}
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              {data.heading?.text || "Subscribe to our newsletter"}
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              {data.description?.text ||
                "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore."}
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
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
                className={`flex-none rounded-md bg-[${brandColor}] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[${brandColor}]`}
              >
                {data.button?.text || "Subscribe"}
              </button>
            </div>
          </div>

          {/* Features Section */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            {data.features?.list.map((feature, index) => (
              <div key={index} className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  {"icon" in feature && (
                    <IconComponent iconName={feature.icon || "PhoneIcon"} />
                  )}
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  {feature.name}
                </dt>
                {"description" in feature && (
                  <dd className="mt-2 text-base/7 text-gray-400">
                    {feature.description}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Background Decorative SVG */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className={`aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[${brandColor}] opacity-30`}
        />
      </div>
    </div>
  );
};

export default NewsletterDefaultStyle;
