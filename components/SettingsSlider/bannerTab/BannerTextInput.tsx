import { menuItem } from "@/components/@types/menuItem.t";
import { useBannerSetting } from "@/components/contexts/BannerTabSettings";
import InputItemWithLink from "@/components/ui/InputForm";
import { data } from "framer-motion/client";
import React from "react";

const BannerTextInput = () => {
  const { bannerSettings, setBannerSettings } = useBannerSetting();
  const handleUpdates = (updatedItem: menuItem) => {
    setBannerSettings({
      ...bannerSettings,
      data: updatedItem,
    });
  };

  return (
    <>
      <InputItemWithLink
        item={bannerSettings.data}
        onChange={handleUpdates}
      />
    </>
  );
};

export default BannerTextInput;
