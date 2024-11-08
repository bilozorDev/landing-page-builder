import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import React from "react";
import CTADefaultStyle from "./CTADefaultStyle";
import CTAImageRightDarkBg from "./CTAImageRightDarkBg";
import CTASimpleLeftStacked from "./CTASimpleLeftStacked";
import CTACenteredOnDarkBg from "./CTACenteredOnDarkBg";
import CTASimpleJustifiedBetween from "./CTASimpleJustifiedBetween";
import CTAFullWidthDarkBg from "./CTAFullWidthDarkBg";
import CTAHalfSplitWithImage from "./CTAHalfSplitWithImage";

const CTA = ({ part }: { part: SelectedComponent }) => {
  if (part.selectedStyle?.id === "default")
    return <CTADefaultStyle part={part} />;
  if (part.selectedStyle?.id === "imageRightDarkBg")
    return <CTAImageRightDarkBg part={part} />;
  if (part.selectedStyle?.id === "simple-stacked-left")
    return <CTASimpleLeftStacked part={part} />;
  if (part.selectedStyle?.id === "simple-stacked-center-dark-bg")
    return <CTACenteredOnDarkBg part={part} />;
  if (part.selectedStyle?.id === "simple-justified-between")
    return <CTASimpleJustifiedBetween part={part} />;
  if (part.selectedStyle?.id === "full-width-stacked-center-dark-bg")
    return <CTAFullWidthDarkBg part={part} />;
  if (part.selectedStyle?.id === "image-left-text-rigth")
    return <CTAHalfSplitWithImage part={part} />;
  return <div>CTA</div>;
};

export default CTA;
