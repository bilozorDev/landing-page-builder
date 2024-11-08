import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import React from "react";
import FeaturesDefaultStyle from "./FeaturesDefaultStyle";
import FeaturesOneColumn from "./FeaturesOneColumn";
import FeaturesThreeColums from "./FeaturesThreeColums";
import FeaturesTextLeftListRight from "./FeaturesTextLeftListRight";
import FeaturesTwoColumnsNoIcon from "./FeaturesTwoColumnsNoIcon";
import { FeatureStyles } from "./FeatureStyles.t";

const Features = ({ part }: { part: SelectedComponent }) => {
  if (part.selectedStyle?.id === FeatureStyles.DEFAULT)
    return <FeaturesDefaultStyle part={part} />;
  if (part.selectedStyle?.id === FeatureStyles.IMAGE_ABOVE_LIST)
    return <FeaturesOneColumn part={part} />;
  if (part.selectedStyle?.id === FeatureStyles.JUST_LIST)
    return <FeaturesThreeColums part={part} />;
  if (part.selectedStyle?.id === FeatureStyles.TEXT_LEFT_FEATURE_RIGHT)
    return <FeaturesTextLeftListRight part={part} />;
  if (part.selectedStyle?.id === FeatureStyles.NO_ICONS)
    return <FeaturesTwoColumnsNoIcon part={part} />;
  return "No style selected";
};

export default Features;
