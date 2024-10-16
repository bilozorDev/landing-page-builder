import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import React from "react";

const MetaDataUpdate = () => {
  const brandColor = useGetBrandColor();

  return (
    <form>
      <div className="isolate -space-y-px rounded-md shadow-sm">
        <div
          className={`relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-[${brandColor}]`}
        >
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-500"
          >
            Website name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Website builder"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div
          className={`relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-[${brandColor}]`}
        >
          <label
            htmlFor="desc"
            className="block text-xs font-medium text-gray-500"
          >
            Website Description
          </label>
          <input
            id="desc"
            name="desc"
            type="text"
            placeholder="Awesome website to build your own website"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <button
        type="submit"
        className={`inline-flex mt-5 items-center rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed bg-[${brandColor}] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      >
        Save
      </button>
    </form>
  );
};

export default MetaDataUpdate;
