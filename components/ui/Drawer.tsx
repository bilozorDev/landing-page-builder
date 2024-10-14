"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ReactNode, useEffect } from "react";
import ClearLocalStorage from "../utils/ClearLocalStorage";
import { showOpen } from "../@types/showOpen.t";

const Drawer = ({
  show,
  setShow,
  children,
}: showOpen & { children: ReactNode }) => {
  // to make content behind the drawer scrollable
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        document.documentElement.style.overflow = "unset";
      }, 1000);
    }
  }, [show]);
  return (
    <Dialog open={show} onClose={setShow} className="relative z-10">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="bg-gray-50 px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between space-x-3">
                  <div className="space-y-1">
                    <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                      Landing Page Config <ClearLocalStorage />
                    </DialogTitle>
                    <p className="text-sm text-gray-500">
                      Get started by filling in the information below to create
                      your new project.
                    </p>
                  </div>
                  <div className="flex h-7 items-center">
                    <button
                      type="button"
                      onClick={() => setShow(false)}
                      className="relative text-gray-400 hover:text-gray-500"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
export default Drawer;
