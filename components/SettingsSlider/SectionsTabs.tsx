import classNames from "classnames";
import React, { Fragment } from "react";
import useLocalStorageState from "use-local-storage-state";
import useGetBrandColor from "../hooks/useGetBrandColor";
import { allAvailableOptions } from "../utils/allAvailableOptions";
import GeneralTab from "./generalTab";
import HeaderTab from "./headerTab";
import BannerTab from "./bannerTab";
import BodyTab from "./bodyTab";
import FooterTab from "./footerTab/FooterTab";

const SectionsTabs = () => {
  const [steps, setSteps] = useLocalStorageState("settingsSteps", {
    defaultValue: allAvailableOptions.steps,
  });
  const brandColor = useGetBrandColor();

  const handleStepChange = (selectedTabName: string) => {
    setSteps((prevSteps) =>
      prevSteps.map((step) => ({
        ...step,
        current: step.name === selectedTabName,
      }))
    );
  };

  return (
    <>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>

        <select
          id="tabs"
          name="tabs"
          onChange={(e) => handleStepChange(e.target.value)}
          defaultValue={steps.find((tab) => tab.current)?.name || ""}
          className={`block w-full rounded-md border-gray-300 focus:border-[${brandColor}] focus:ring-[${brandColor}]`}
        >
          {steps.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav
          aria-label="Tabs"
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
        >
          {steps.map((tab) => {
            return (
              <div
                key={tab.name}
                onClick={() => handleStepChange(tab.name)}
                className={classNames(
                  tab.current
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700",
                  "group hover:cursor-pointer relative min-w-0 flex-1 overflow-hidden bg-white px-4 py-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
                )}
              >
                <span>{tab.name}</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    tab.current ? `bg-[${brandColor}]` : "bg-transparent",
                    "absolute inset-x-0 bottom-0 h-0.5"
                  )}
                />
              </div>
            );
          })}
        </nav>
      </div>
      <div className="px-4 sm:px-6">
        {steps.map((step) => (
          <Fragment key={step.name}>
            {step.current ? getSettingsComponentByName(step.name) : null}
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default SectionsTabs;

const getSettingsComponentByName = (
  name: string
): React.ReactElement | null => {
  const componentMap: { [key: string]: React.ReactElement } = {
    General: <GeneralTab />,
    Header: <HeaderTab />,
    Banner: <BannerTab />,
    Body: <BodyTab />,
    Footer: <FooterTab />,
  };
  return componentMap[name] || null;
};
