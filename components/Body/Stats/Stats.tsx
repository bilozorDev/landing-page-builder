import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import React from "react";
import { StatsStyles } from "./StatsStyles.t";
import StatsDefaultStyle from "./StatsDefaultStyle";
import StatsSimpleDarkBg from "./StatsSimpleDarkBg";
import StatsWithTitleAndDesc from "./StatsWithTitleAndDesc";
import StatsWithTitleAndDescOnDarkBg from "./StatsWithTitleAndDescOnDarkBg";
import StatsOnImageBg from "./StatsOnImageBg";
import StatsSplitImageRight from "./StatsSplitImageRight";
import StatsWithDesc from "./StatsWithDesc";

const Stats = ({ part }: { part: SelectedComponent }) => {
  if (part.selectedStyle?.id === StatsStyles.DEFAULT)
    return <StatsDefaultStyle part={part} />;
  if (part.selectedStyle?.id === StatsStyles.SIMPLE_DARK_BG)
    return <StatsSimpleDarkBg part={part} />;
  if (part.selectedStyle?.id === StatsStyles.WITH_TITLE_AND_DESCRIPTION)
    return <StatsWithTitleAndDesc part={part} />;
  if (part.selectedStyle?.id === StatsStyles.WITH_TITLE_AND_DESC_ON_DARK_BG)
    return <StatsWithTitleAndDescOnDarkBg part={part} />;
  if (
    part.selectedStyle?.id === StatsStyles.WITH_TITLE_AND_DESC_IMAGE_BACKGROUND
  )
    return <StatsOnImageBg part={part} />;
  if (part.selectedStyle?.id === StatsStyles.SPLIT_IMAGE_RIGHT)
    return <StatsSplitImageRight part={part} />;
  if (part.selectedStyle?.id === StatsStyles.WITH_DESCRIPTION)
    return <StatsWithDesc part={part} />;
  return <div>Stats</div>;
};

export default Stats;
