import { useBodySettings } from "@/components/contexts/BodyTabSettings";
import { allAvailableOptions } from "@/components/utils/allAvailableOptions";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const AddPartsToDisplay = () => {
  const { bodySettings, setBodySettings } = useBodySettings();
  const handleAddPart = (part) => {
    const array = bodySettings.parts;
    array.push(part);
    setBodySettings({
      ...bodySettings,
      parts: array,
    });
  };
  const { parts } = allAvailableOptions.body;
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-200">
        {parts.map((part) => (
          <li
            key={part.id}
            className="relative flex items-center space-x-4 p-4 group hover:bg-gray-50 transition-all duration-75"
          >
            <div className="min-w-0 flex-auto">
              <div className="flex items-center gap-x-3">
                <h2 className="min-w-0 font-semibold leading-6 text-gray-600 capitalize">
                  {part.name}
                </h2>
              </div>
              <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-500">
                <p className="truncate">
                  Available styles {part.options?.styleSelections.length}
                </p>
                <svg
                  viewBox="0 0 2 2"
                  className="h-0.5 w-0.5 flex-none fill-gray-300"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
              </div>
            </div>
            <div className="flex-none rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">
              View
            </div>
            <div
              className="flex flex-row items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset "
              onClick={() => handleAddPart(part)}
            >
              Add
              <ChevronRightIcon
                aria-hidden="true"
                className="h-4 w-4 flex-none text-gray-400"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddPartsToDisplay;
