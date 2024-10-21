import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import AddPartsToDisplay from "./AddPartsToDisplay";

const BodyTab = () => {
  return (
    <>
      <SectionTitle title="Available parts" />
      <AddPartsToDisplay />
    </>
  );
};

export default BodyTab;
