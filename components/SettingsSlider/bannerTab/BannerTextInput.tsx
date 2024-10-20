import { useBannerSetting } from "@/components/contexts/BannerTabSettings";
import SingleTextInput from "@/components/ui/SingleTextInput";
import React from "react";

const BannerTextInput = () => {
  const { bannerSettings, setBannerSettings } = useBannerSetting();
  const handleUpdate = (e) => {
    console.log(e);
    setBannerSettings({
      ...bannerSettings,
      data: { ...bannerSettings.data, text: e },
    });
  };
  return (
    <SingleTextInput
      label="Banner text"
      value={bannerSettings.data.text}
      onChange={handleUpdate}
    />
    

  );
};

export default BannerTextInput;
