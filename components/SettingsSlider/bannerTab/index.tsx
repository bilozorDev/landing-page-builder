import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import StyleSelector from "./StyleSelector";
import DisplayToggle from "./DisplayToggle";

const BannerTab = () => {
  return (
    <>
      <SectionTitle title="Display" />
      <DisplayToggle />
      <SectionTitle title="Style" />
      <StyleSelector />
    </>
  );
};

export default BannerTab;
