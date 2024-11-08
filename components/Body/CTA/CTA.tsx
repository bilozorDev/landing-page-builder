import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import React from "react";
import CTADefaultStyle from "./CTADefaultStyle";
import CTAImageRightDarkBg from "./CTAImageRightDarkBg";
import CTASimpleLeftStacked from "./CTASimpleLeftStacked";
import CTACenteredOnDarkBg from "./CTACenteredOnDarkBg";
import CTASimpleJustifiedBetween from "./CTASimpleJustifiedBetween";
import CTAFullWidthDarkBg from "./CTAFullWidthDarkBg";
import CTAHalfSplitWithImage from "./CTAHalfSplitWithImage";
import { CTAStyles } from "./CTAStyles.t";

const CTA = ({ part }: { part: SelectedComponent }) => {
  if (part.selectedStyle?.id === CTAStyles.DEFAULT)
    return <CTADefaultStyle part={part} />;
  if (part.selectedStyle?.id === CTAStyles.IMAGE_RIGHT_DARK_BG)
    return <CTAImageRightDarkBg part={part} />;
  if (part.selectedStyle?.id === CTAStyles.SIMPLE_STACKED_LEFT)
    return <CTASimpleLeftStacked part={part} />;
  if (part.selectedStyle?.id === CTAStyles.SIMPLE_STACKED_CENTER_DARK_BG)
    return <CTACenteredOnDarkBg part={part} />;
  if (part.selectedStyle?.id === CTAStyles.SIMPLE_JUSTIFIED_BETWEEN)
    return <CTASimpleJustifiedBetween part={part} />;
  if (part.selectedStyle?.id === CTAStyles.FULL_WIDTH_STACKED_CENTER_DARK_BG)
    return <CTAFullWidthDarkBg part={part} />;
  if (part.selectedStyle?.id === CTAStyles.IMAGE_LEFT_TEXT_RIGHT)
    return <CTAHalfSplitWithImage part={part} />;
  return <div>CTA</div>;
};

export default CTA;
