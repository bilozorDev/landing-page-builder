import React from "react";
const General = () => <div>General</div>;
const Header = () => <div>Header</div>;
const Body = () => <div>Body</div>;
const Footer = () => <div>Footsser</div>;

const getSettingsComponentByName = (
  name: "General" | "Header" | "Body" | "Footer"
): React.ReactElement | null => {
  const componentMap: { [key: string]: React.ReactElement } = {
    General: <General />,
    Header: <Header />,
    Body: <Body />,
    Footer: <Footer />,
  };
  return componentMap[name] || null;
};

export default getSettingsComponentByName;
