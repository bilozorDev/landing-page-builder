import { useBannerSetting } from "@/components/contexts/BannerTabSettings";
import RadioGroupWithDesc from "@/components/ui/RadioGroupWithDesc";
import { allAvailableOptions } from "@/components/utils/allAvailableOptions";
import { SelectionVariation } from "@/components/utils/allAvailableOptions.t";
import React from "react";

const StyleSelector = () => {
  const { bannerSettings, setBannerSettings } = useBannerSetting();
  const { style } = bannerSettings;
  const handleUpdate = (e: SelectionVariation) => {
    setBannerSettings({ ...bannerSettings, style: e });
  };
  return (
    <RadioGroupWithDesc
      availableStyles={allAvailableOptions.banner.availableStyles}
      value={style}
      handleSelect={handleUpdate}
    />
  );
};

export default StyleSelector;
