import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import AddPartsToDisplay from "./AddPartsToDisplay";
import SelectedParts from "./SelectedParts";

const BodyTab = () => {
  return (
    <>
      <SectionTitle title="Available parts" />
      <AddPartsToDisplay />
      <SectionTitle title="Selected parts" />
      <SelectedParts />
    </>
  );
};

export default BodyTab;
