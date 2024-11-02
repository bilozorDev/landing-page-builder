import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import React from "react";
import FeaturesDefaultStyle from "./FeaturesDefaultStyle";

const Features = ({ part }: { part: SelectedComponent }) => {
  if (part.selectedStyle?.id === "default")
    return <FeaturesDefaultStyle part={part} />;
  return "No style selected";
};

export default Features;
