import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import MenuItems from "./MenuItems";
import AlignmentSelector from "./AlignmentSelector";
import CTA from "./CTA";

const HeaderTab = () => {
  return (
    <>
      <SectionTitle title="Aligment" />
      <AlignmentSelector />
      <SectionTitle title="Menu Items" />
      <MenuItems />
      <SectionTitle title="CTA" />
      <CTA />
      
    </>
  );
};

export default HeaderTab;
