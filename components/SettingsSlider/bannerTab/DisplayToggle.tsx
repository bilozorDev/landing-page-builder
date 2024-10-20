import { useBannerSetting } from "@/components/contexts/BannerTabSettings";
import ToggleSwitch from "@/components/ui/ToggleSwitch";
import React from "react";

const DisplayToggle = () => {
  const { bannerSettings, setBannerSettings } = useBannerSetting();
  const handleChange = () => {
    setBannerSettings({ ...bannerSettings, display: !bannerSettings.display });
  };
  return (
    <ToggleSwitch value={bannerSettings.display} onChange={handleChange} text="Show banner"/>
  );
};

export default DisplayToggle;
