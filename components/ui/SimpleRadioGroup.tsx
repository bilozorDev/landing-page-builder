import React from "react";

type RadioOption = {
  id?: string;
  label: string; // Consider renaming to `label` for clarity
};

type RadioGroupProps = {
  options: RadioOption[];
  value: string | number;
  setValue: (value: string | number) => void;
};

const SimpleRadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  setValue,
}) => {
  return (
    <fieldset>
      <div className="mt-6 space-y-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        {options.map((option) => (
          <div key={option.id ?? option.label} className="flex items-center">
            <input
              checked={value === option.label}
              onChange={() => setValue(option.label)}
              id={option.id ?? option.label}
              name="radio-group" // Common name for all radio buttons in the group
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor={option.id ?? option.label}
              className="ml-3 block text-sm font-medium leading-6 text-gray-900"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default SimpleRadioGroup;
