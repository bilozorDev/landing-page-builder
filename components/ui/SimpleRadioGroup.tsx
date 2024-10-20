import React from "react";
import useGetBrandColor from "../hooks/useGetBrandColor";
type SimpleRadioGroupProps = {
  options: {
    label: string;
    value: string;
  }[];
  value: string;
  setValue: (value: string) => void;
};

const SimpleRadioGroup = ({
  options,
  value="",
  setValue,
}: SimpleRadioGroupProps) => {
  const brandColor = useGetBrandColor();
  return (
    <div className="mt-6 space-y-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
      {options.map((option) => (
        <div key={option.value} className="flex items-center">
          <input
            checked={option.value === value}
            id={option.label}
            name={option.label}
            type="radio"
            value={option.value}
            onChange={() => setValue(option.value)}
            className={`h-4 w-4 border-gray-300 text-${brandColor} focus:ring-${brandColor}`}
          />
          <label
            htmlFor={option.label}
            className="ml-3 block text-sm font-medium leading-6 text-gray-900"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SimpleRadioGroup;
