import React from "react";
import { useBodySettings } from "../contexts/BodyTabSettings";

const Body = () => {
  const { bodySettings } = useBodySettings();
  return (
    <>
      {bodySettings.parts.length}
    </>
  );
};

export default Body;
