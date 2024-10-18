import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import MenuItems from "./MenuItems";
import AlignmentSelector from "./AlignmentSelector";

const HeaderTab = () => {
  
  return <>
  <SectionTitle title="Aligment" />
   <AlignmentSelector/>
   <SectionTitle title="Menu Items" />
   <MenuItems/>
  </>
};

export default HeaderTab;
