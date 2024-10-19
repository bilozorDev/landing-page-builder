import React from "react";
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
  value,
  setValue,
}: SimpleRadioGroupProps) => {
  return (
    <div className="mt-6 space-y-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
      {options.map((option) => (
        <div key={option.value} className="flex items-center">
          <input
            defaultChecked={option.value === value}
            id={option.value}
            name="notification-method"
            type="radio"
            value={option.value}
            onChange={() => setValue(option.value)}
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor={option.value}
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
