import { Radio, RadioGroup } from "@headlessui/react";
import classNames from "classnames";
import React from "react";
import { SelectionVariation } from "../utils/allAvailableOptions.t";

type RadioGroupWithDesc = {
  availableStyles: SelectionVariation[];
  value: SelectionVariation;
  handleSelect: (e: SelectionVariation) => void;
};

const RadioGroupWithDesc = ({
  availableStyles,
  value,
  handleSelect,
}: RadioGroupWithDesc) => {
  return (
    <fieldset>
      <RadioGroup
        value={value}
        onChange={handleSelect}
        className="-space-y-px rounded-md bg-white"
      >
        {availableStyles.map((option, optionIdx) => (
          <Radio
            key={option.id}
            value={option}
            aria-label={option.name}
            aria-description={option.description}
            className={classNames(
              optionIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
              optionIdx === availableStyles.length - 1
                ? "rounded-bl-md rounded-br-md"
                : "",
              "group relative flex cursor-pointer border border-gray-200 p-4 focus:outline-none data-[checked]:z-10 data-[checked]:border-gray-300 data-[checked]:bg-gray-100"
            )}
          >
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-indigo-600 group-data-[focus]:ring-2 group-data-[focus]:ring-gray-600 group-data-[focus]:ring-offset-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            <span className="ml-3 flex flex-col">
              <span className="block text-sm font-medium text-gray-900 group-data-[checked]:text-gray-900">
                {option.name}
              </span>
              <span className="block text-sm text-gray-500 group-data-[checked]:text-gray-700">
                {option.description}
              </span>
            </span>
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  );
};

export default RadioGroupWithDesc;
