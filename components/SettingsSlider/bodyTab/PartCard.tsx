import Drawer from "@/components/ui/Drawer";
import {
  ChevronRightIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import PartSettings from "./PartSettings";
import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import { useBodySettings } from "@/components/contexts/BodyTabSettings";
import { ActionTypes } from "@/components/reducers/bodyReducerTypes.t";
import ModalWindows from "@/components/ui/ModalWindows";
import { DialogTitle } from "@headlessui/react";

const PartCard = ({ part }: { part: SelectedComponent }) => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useBodySettings();
  const handleDelete = ({ part }: { part: SelectedComponent }) => {
    dispatch({ type: ActionTypes.DELETE_PART, payload: part });
    setShowModal(false);
  };
  return (
    <>
      <div className="relative flex flex-1 justify-between  items-center space-x-4 p-4 group ">
        <div>
          <div className="flex items-center gap-x-3">
            <h2 className="min-w-0 font-semibold leading-6 text-gray-600 capitalize">
              {part.name}
            </h2>
          </div>
        </div>
        <div className="flex-row flex space-x-4 ml-auto">
          <div
            className="flex ml-auto flex-row items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset "
            onClick={() => setShow(true)}
          >
            Settings
            <ChevronRightIcon
              aria-hidden="true"
              className="h-4 w-4 flex-none text-gray-400"
            />
          </div>
          <div
            className="flex ml-auto flex-row items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset text-red-500 hover:bg-red-500 hover:cursor-pointer hover:text-white"
            onClick={() => setShowModal(true)}
          >
            Remove
          </div>
        </div>
      </div>
      <Drawer show={show} setShow={setShow} showLocalStorage={false}>
        <PartSettings part={part} />
      </Drawer>
      <ModalWindows open={showModal} setOpen={setShowModal} title="">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <ExclamationTriangleIcon
                aria-hidden="true"
                className="h-6 w-6 text-red-600"
              />
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <DialogTitle
                as="h3"
                className="text-base font-semibold text-gray-900"
              >
                Confirm Deletion of{" "}
                <strong className="capitalize">{part.name}</strong> section
              </DialogTitle>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure you want to delete this part? All of your data
                  will be permanently removed. This action cannot be undone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            onClick={() => handleDelete({ part })}
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          >
            Deactivate
          </button>
          <button
            type="button"
            data-autofocus
            onClick={() => setShowModal(false)}
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            Cancel
          </button>
        </div>
      </ModalWindows>
    </>
  );
};

export default PartCard;
