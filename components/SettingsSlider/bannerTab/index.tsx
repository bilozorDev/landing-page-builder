import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import StyleSelector from "./StyleSelector";
import DisplayToggle from "./DisplayToggle";
import BannerTextInput from "./BannerTextInput";

const BannerTab = () => {
  return (
    <>
      <SectionTitle title="Text" />
      <BannerTextInput />
      <SectionTitle title="Display" />
      <DisplayToggle />
      <SectionTitle title="Style" />
      <StyleSelector />
    </>
  );
};

export default BannerTab;
