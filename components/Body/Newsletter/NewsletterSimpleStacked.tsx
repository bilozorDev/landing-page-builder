import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { createDataObject } from "@/components/utils/createDataObject";
import React from "react";

const NewsletterSimpleStacked = ({ part }: { part: SelectedComponent }) => {
  const { contentBlocks } = part;
  const data = createDataObject(contentBlocks);
  console.log(data);
  const brandColor = useGetBrandColor();
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          {data.heading?.text ||
            "Want product news and updates? Sign up for our newsletter."}
        </h2>
        <form className="mt-10 max-w-md">
          <div className="flex gap-x-4">
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
              className={`min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[${brandColor}] sm:text-sm/6`}
            />
            <button
              type="submit"
              className={`flex-none rounded-md bg-[${brandColor}] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[${brandColor}]`}
            >
              {data.button?.text || "Subscribe"}
            </button>
          </div>
          <p className="mt-4 text-sm/6 text-gray-900">
            {data.privacyText?.text || "We care about your data. Read our"}{" "}
            <a
              href={data.privacyLink?.link || "#"}
              className={`font-semibold text-[${brandColor}] hover:opacity-80`}
            >
              {data.privacyLink?.text || "privacy policy"}
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};
export default NewsletterSimpleStacked;
