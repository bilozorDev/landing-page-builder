import React from "react";
import getHeroIcon from "../utils/getHeroIcon";

interface IconComponentProps {
  iconName: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ iconName }) => {
  const Icon = getHeroIcon(iconName);

  if (!Icon) return <span>Icon not found</span>;

  return <Icon />;
};

export default IconComponent;
