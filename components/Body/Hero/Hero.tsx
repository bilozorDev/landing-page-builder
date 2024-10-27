import { SelectedComponent } from "@/components/utils/allAvailableOptions.t";
import React, { useEffect, useState } from "react";
import HeroDefaultStyle from "./HeroDefaultStyle";
import HeroImageRight from "./HeroImageRight";
import HeroImageBottom from "./HeroImageBottom";
import HeroWithEmailSignup from "./HeroWithEmailSignup";
import HeroWithFullHeightImage from "./HeroWithFullHeightImage";

const Hero = ({ part }: { part: SelectedComponent }) => {
  if (part.selectedStyle?.id === "default")
    return <HeroDefaultStyle part={part} />;
  if (part.selectedStyle?.id === "image_right")
    return <HeroImageRight part={part} />;
  if (part.selectedStyle?.id === "image_bottom")
    return <HeroImageBottom part={part} />;
  if (part.selectedStyle?.id === "hero_with_full_image_right")
    return <HeroWithFullHeightImage part={part} />;
  return "No style selected";
};

export default Hero;
