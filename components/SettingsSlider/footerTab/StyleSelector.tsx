import { useFooterSetting } from "@/components/contexts/FooterTabSettings";
import RadioGroupWithDesc from "@/components/ui/RadioGroupWithDesc";
import { allAvailableOptions } from "@/components/utils/allAvailableOptions";
import { SelectionVariation } from "@/components/utils/allAvailableOptions.t";
import React from "react";

const StyleSelector = () => {
  const { footerSettings, setFooterSettings } = useFooterSetting();
  const { style } = footerSettings;
  const handleUpdate = (e: SelectionVariation) => {
    setFooterSettings((prev) => ({ ...prev, style: e }));
    console.log(footerSettings.style);
    console.log("e", e);
  };
  return (
    <>
      <RadioGroupWithDesc
        availableStyles={allAvailableOptions.footer.availableStyles}
        handleSelect={handleUpdate}
        value={style}
      />
    </>
  );
};

export default StyleSelector;
