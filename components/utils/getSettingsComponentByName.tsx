import React from "react";
import GeneralTab from "../SettingsSlider/generalTab";
import HeaderTab from "../SettingsSlider/headerTab";

const Body = () => <div>Body</div>;
const Footer = () => <div>Footsser</div>;

const getSettingsComponentByName = (
  name: "General" | "Header" | "Body" | "Footer"
): React.ReactElement | null => {
  const componentMap: { [key: string]: React.ReactElement } = {
    General: <GeneralTab />,
    Header: <HeaderTab />,
    Body: <Body />,
    Footer: <Footer />,
  };
  return componentMap[name] || null;
};

export default getSettingsComponentByName;
