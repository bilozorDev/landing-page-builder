import { useBodySettings } from "@/components/contexts/BodyTabSettings";
import Drawer from "@/components/ui/Drawer";
import { allAvailableOptions } from "@/components/utils/allAvailableOptions";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import HeroPreview from "./previews/HeroPreview";
import FeaturesPreview from "./previews/FeaturesPreview";
import NewsletterPreview from "./previews/NewsletterPreview";
import StatsPreview from "./previews/StatsPreview";
import { BodyPart, Parts } from "@/components/utils/allAvailableOptions.t";
import { v4 } from "uuid";

const AddPartsToDisplay = () => {
  const { bodySettings, setBodySettings } = useBodySettings();
  const handleAddPart = (part: BodyPart) => {
    const newId = v4();
    part.id = part.name + "-" + newId;
    const newArray: Parts = bodySettings.parts;
    newArray.push(part);
    setBodySettings({ ...bodySettings, parts: newArray });
  };

  const { parts } = allAvailableOptions.body;
  const [show, setShow] = useState(false);
  const [selectedPart, setSelectedPart] = useState("");

  const PartsMap = {
    hero: <HeroPreview />,
    features: <FeaturesPreview />,
    newsletter: <NewsletterPreview />,
    stats: <StatsPreview />,
  };
  return (
    <>
      <div>
        <div className="divide-y divide-gray-200">
          {parts.map((part) => (
            <div
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
              <div
                className="flex-none rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset"
                onClick={() => {
                  setShow(true);
                  setSelectedPart(part.name);
                }}
              >
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
            </div>
          ))}
        </div>
      </div>
      <Drawer show={show} setShow={setShow} showLocalStorage={false}>
        {PartsMap[selectedPart] && PartsMap[selectedPart]}
      </Drawer>
    </>
  );
};

export default AddPartsToDisplay;