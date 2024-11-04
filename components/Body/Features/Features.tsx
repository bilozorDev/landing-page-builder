import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import React from "react";
import FeaturesDefaultStyle from "./FeaturesDefaultStyle";
import FeaturesOneColumn from "./FeaturesOneColumn";
import FeaturesThreeColums from "./FeaturesThreeColums";
import FeaturesTextLeftListRight from "./FeaturesTextLeftListRight";
import FeaturesTwoColumnsNoIcon from "./FeaturesTwoColumnsNoIcon";

const Features = ({ part }: { part: SelectedComponent }) => {
  if (part.selectedStyle?.id === "default")
    return <FeaturesDefaultStyle part={part} />;
  if (part.selectedStyle?.id === "image-above-list")
    return <FeaturesOneColumn part={part} />;
  if (part.selectedStyle?.id === "just-list")
    return <FeaturesThreeColums part={part} />;
  if (part.selectedStyle?.id === "text-left-feature-right")
    return <FeaturesTextLeftListRight part={part} />;
  if (part.selectedStyle?.id === "no-icons")
    return <FeaturesTwoColumnsNoIcon part={part} />;
  return "No style selected";
};

export default Features;
