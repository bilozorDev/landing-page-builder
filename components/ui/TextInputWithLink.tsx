import React, { ChangeEvent } from "react";
import useGetBrandColor from "../hooks/useGetBrandColor";
type SingleTextInput = {
  value: {
    text: string;
    link: string;
  };
  onChange: (value: { text: string; link: string }) => void;
  label?: string
};

const TextInputWithLink = ({ value, onChange, label="Text" }: SingleTextInput) => {
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, text: e.target.value });
  };

  const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...value, link: e.target.value });
  };
  return (
    <div className="flex flex-row items-center space-x-4 w-full justify-between mt-4">
      <div className="isolate -space-y-px rounded-md shadow-sm flex-1">
        <div
          className={`relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-[${useGetBrandColor}]`}
        >
          <label
            htmlFor="text"
            className="block text-xs font-medium text-gray-500"
          >
            {label}
          </label>
          <input
            name="text"
            type="text"
            value={value.text}
            onChange={handleTextChange}
            placeholder="Text"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
        <div
          className={`relative rounded-md rounded-t-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-[${useGetBrandColor}]`}
        >
          <label
            htmlFor="href"
            className="block text-xs font-medium text-gray-500"
          >
            Link
          </label>
          <input
            name="href"
            type="text"
            value={value.link}
            onChange={handleLinkChange}
            placeholder="#newsletter"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};

export default TextInputWithLink;
