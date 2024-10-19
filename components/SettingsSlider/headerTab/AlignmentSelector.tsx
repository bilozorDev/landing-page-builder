import { useHeaderSettings } from "@/components/contexts/HeaderTabSettings";
import SimpleRadioGroup from "@/components/ui/SimpleRadioGroup";
import { allAvailableOptions } from "@/components/utils/allAvailableOptions";
import React from "react";

const AlignmentSelector = () => {
  const { headerSettings, setHeaderSettings } = useHeaderSettings();
  const handleSetValue = (newAlignment: string) => {
    setHeaderSettings({ ...headerSettings, alignment: newAlignment });
  };
  return (
    <div className="flex justify-center">
      {/* @ts-expect-error 
      just because */}
      <SimpleRadioGroup
        options={allAvailableOptions.header.aligment}
        value={headerSettings.alignment}
        setValue={handleSetValue}
      />
    </div>
  );
};

export default AlignmentSelector;
