import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useBodySettings } from "../contexts/BodyTabSettings";
import { SelectedComponent } from "../utils/allAvailableOptions.t";
import Features from "./Features/Features";
const Hero = dynamic(() => import("./Hero/Hero"), {
  ssr: false,
});

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
  };
  if (!hasMounted) {
    return null;
  }
  return (
    <div >
      {parts.map((part) => {
        const Component =
          (componentMap[part.name] as React.ComponentType<{
            part: SelectedComponent;
          }>) || (() => <>wrong component type</>); // Fallback to DefaultComponent if part.name doesn't match any key
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
