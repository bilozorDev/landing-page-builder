import { menuItem } from "@/components/@types/menuItem.t";
import { useHeaderSettings } from "@/components/contexts/HeaderTabSettings";
import InputItemWithLink from "@/components/ui/InputForm";
import React from "react";

const CTA = () => {
  const { headerSettings, setHeaderSettings } = useHeaderSettings();
  const handleUpdate = (updatedItem: menuItem) => {
    setHeaderSettings({ ...headerSettings, cta: updatedItem });
  };
  return (
    <InputItemWithLink item={headerSettings.cta} onChange={handleUpdate} />
  );
};

export default CTA;
