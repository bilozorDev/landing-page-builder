import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import SelectedParts from "./SelectedParts";
import AvailablePartsToAdd from "./AvailablePartsToAdd";

const BodyTab = () => {
  return (
    <>
      <SectionTitle title="Available parts" />
      <AvailablePartsToAdd />
      <SectionTitle title="Selected parts" />
      <SelectedParts />
    </>
  );
};

export default BodyTab;
