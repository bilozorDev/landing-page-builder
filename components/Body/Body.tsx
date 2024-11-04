import React, { useEffect, useState } from "react";
import { useBodySettings } from "../contexts/BodyTabSettings";
import { SelectedComponent } from "../utils/allAvailableOptions.t";
import Features from "./Features/Features";
import Newsletter from "./Newsletter/Newsletter";
import CTA from "./CTA/CTA";
import Stats from "./Stats/Stats";
import Testimonials from "./Testimonials/Testimonials";
import Team from "./Team/Team";
import LogoCloud from "./LogoCloud/LogoCloud";
import Hero from "./Hero/Hero";
import FAQ from "./FAQ/FAQ";

const Body = () => {
  const { bodySettings } = useBodySettings();
  const { parts } = bodySettings;
  // to prevent hydration error
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const componentMap: {
    [key: string]: React.ComponentType<{ part: SelectedComponent }>;
  } = {
    hero: Hero,
    features: Features,
    newsletter: Newsletter,
    CTA: CTA,
    stats: Stats,
    testimonials: Testimonials,
    team: Team,
    logos: LogoCloud,
    FAQ
    : FAQ,
  };
  if (!hasMounted) {
    return null;
  }
  return (
    <div>
      {parts.map((part) => {
        const Component =
          (componentMap[part.name] as React.ComponentType<{
            part: SelectedComponent;
          }>) || (() => <>wrong component type {part.name}</>); // Fallback to DefaultComponent if part.name doesn't match any key
        return (
          <div key={part.id}>
            <Component part={part} />
          </div>
        );
      })}
    </div>
  );
};

export default Body;
