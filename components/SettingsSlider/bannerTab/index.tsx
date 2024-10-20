import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import StyleSelector from "./StyleSelector";

const BannerTab = () => {
  return (
    <>
      <SectionTitle title="Style" />
      <StyleSelector />
    </>
  );
};

export default BannerTab;
