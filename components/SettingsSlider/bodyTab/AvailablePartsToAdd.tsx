import { useBodySettings } from "@/components/contexts/BodyTabSettings";
import Drawer from "@/components/ui/Drawer";
import { allAvailableOptions } from "@/components/utils/allAvailableOptions";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import HeroPreview from "./previews/HeroPreview";
import FeaturesPreview from "./previews/FeaturesPreview";
import NewsletterPreview from "./previews/NewsletterPreview";
import StatsPreview from "./previews/StatsPreview";
import { v4 } from "uuid";
import {
  AvailableComponentToAdd,
  SelectedComponent,
} from "@/components/utils/allAvailableOptions.t";
import { ActionTypes } from "@/components/reducers/bodyReducerTypes.t";

const AvailablePartsToAdd = () => {
  const { dispatch } = useBodySettings();
  const handleAddPart = (part: AvailableComponentToAdd) => {
    const uniqueId = `${part.name}-${v4()}`; // unique ID for new part
    const newPart: SelectedComponent = {
      id: uniqueId,
      name: part.name,
      selectedStyle: part.availableStyles[0],
      contentBlocks: [...part.contentBlocks],
      image: part.availableStyles[0].image
        ? part.availableStyles[0].defaultImgScr
        : "",
    };

    dispatch({ type: ActionTypes.ADD_NEW_PART, payload: newPart });
  };

  const { availableComponents } = allAvailableOptions.body;
  const [show, setShow] = useState(false);
  const [selectedPart, setSelectedPart] = useState<keyof typeof PartsMap | "">(
    ""
  );

  return (
    <>
      <div>
        <div className="divide-y divide-gray-200">
          {availableComponents.map((component) => (
            <div
              key={component.name}
              className="relative flex items-center space-x-4 p-4 group hover:bg-gray-50 transition-all duration-75"
            >
              <div className="min-w-0 flex-auto">
                <div className="flex items-center gap-x-3">
                  <h2 className="min-w-0 font-semibold leading-6 text-gray-600 capitalize">
                    {component.name}
                  </h2>
                </div>
                <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-500">
                  <p className="truncate">
                    Available styles {component?.availableStyles.length}
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
                  setSelectedPart(component.name as keyof typeof PartsMap);
                }}
              >
                View
              </div>
              <div
                className="flex flex-row items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset "
                onClick={() => handleAddPart(component)}
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
        {selectedPart && PartsMap[selectedPart]}
      </Drawer>
    </>
  );
};

export default AvailablePartsToAdd;

const PartsMap = {
  hero: <HeroPreview />,
  features: <FeaturesPreview />,
  newsletter: <NewsletterPreview />,
  stats: <StatsPreview />,
  
};
