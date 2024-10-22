import React from "react";
import { useBodySettings } from "../contexts/BodyTabSettings";

const Body = () => {
  const { bodySettings } = useBodySettings();
  const { parts } = bodySettings;
  if (!parts.length) return "hello";
  return <>{parts.map((part) => part.name)}</>;
};

export default Body;
