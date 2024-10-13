import classNames from "classnames";
import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

type StepTab = {
  name: string;
  component: React.ReactNode;
  current: boolean;
};
const General = () => <div>General</div>;
const Header = () => <div>Header</div>;
const Body = () => <div>Body</div>;
const Footer = () => <div>Footer</div>;

const tabs: StepTab[] = [
  { name: "General", component: <General />, current: true },
  { name: "Header", component: <Header />, current: false },
  { name: "Body", component: <Body />, current: false },
  { name: "Footer", component: <Footer />, current: false },
];
const SectionsTabs = () => {
  const [steps, setSteps] = useLocalStorageState("settingsSteps", {
    defaultValue: tabs,
  });

  const handleStepChange = (selectedTabName: string) => {
    setSteps((prevSteps) =>
      prevSteps.map((step) => ({
        ...step,
        current: step.name === selectedTabName, // Set current to true for the selected tab, false for others
      }))
    );
  };
  console.log(steps);
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          onChange={(e) => alert(e)}
          defaultValue={tabs.find((tab) => tab.current).name}
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
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
                    tab.current ? "bg-indigo-500" : "bg-transparent",
                    "absolute inset-x-0 bottom-0 h-0.5"
                  )}
                />
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SectionsTabs;
