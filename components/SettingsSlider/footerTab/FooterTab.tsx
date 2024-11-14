import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import StyleSelector from "./StyleSelector";
import FooterDataInput from "./FooterDataInput";

const FooterTab = () => {
  return (
    <>
      <SectionTitle title="Styles" />
      <StyleSelector />
      <SectionTitle title="Data" />
      <FooterDataInput />
    </>
  );
};

export default FooterTab;
