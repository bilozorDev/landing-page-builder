import Drawer from "@/components/ui/Drawer";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import PartSettings from "./PartSettings";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";

const PartCard = ({ part }: { part: SelectedComponent }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="relative flex flex-1 justify-between items-center space-x-4 p-4 group ">
        <div>
          <div className="flex items-center gap-x-3">
            <h2 className="min-w-0 font-semibold leading-6 text-gray-600 capitalize">
              {part.name}
            </h2>
          </div>
        </div>
        <div
          className="flex flex-row items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset "
          onClick={() => setShow(true)}
        >
          Settings
          <ChevronRightIcon
            aria-hidden="true"
            className="h-4 w-4 flex-none text-gray-400"
          />
        </div>
      </div>
      <Drawer show={show} setShow={setShow} showLocalStorage={false}>
        <PartSettings part={part} />
      </Drawer>
    </>
  );
};

export default PartCard;
