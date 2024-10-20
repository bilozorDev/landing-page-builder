import { styleOption } from "@/components/@types/styleOption.t";
import { useBannerSetting } from "@/components/contexts/BannerTabSettings";
import RadioGroupWithDesc from "@/components/ui/RadioGroupWithDesc";
import { allAvailableOptions } from "@/components/utils/allAvailableOptions";
import React from "react";

const StyleSelector = () => {
  const { bannerSettings, setBannerSettings } = useBannerSetting();
  const { style } = bannerSettings;
  const handleUpdate = (e: styleOption) => {
    setBannerSettings({ ...bannerSettings, style: e });
  };
  return (
    <RadioGroupWithDesc
      options={allAvailableOptions.banner.styles}
      value={style}
      handleSelect={handleUpdate}
    />
  );
};

export default StyleSelector;
