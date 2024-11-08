import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import React from "react";
import HeroDefaultStyle from "./HeroDefaultStyle";
import HeroImageRight from "./HeroImageRight";
import HeroImageBottom from "./HeroImageBottom";
import HeroWithFullHeightImage from "./HeroWithFullHeightImage";
import { HeroStyles } from "./HeroStyles";

const Hero = ({ part }: { part: SelectedComponent }) => {
  if (part.selectedStyle?.id === HeroStyles.DEFAULT)
    return <HeroDefaultStyle part={part} />;
  if (part.selectedStyle?.id === HeroStyles.IMAGE_RIGHT)
    return <HeroImageRight part={part} />;
  if (part.selectedStyle?.id === HeroStyles.IMAGE_BOTTOM)
    return <HeroImageBottom part={part} />;
  if (part.selectedStyle?.id === HeroStyles.HERO_WITH_FULL_IMAGE_RIGHT)
    return <HeroWithFullHeightImage part={part} />;
  return "No style selected";
};

export default Hero;
