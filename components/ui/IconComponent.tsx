import React, { useMemo } from "react";
import getHeroIcon from "../utils/getHeroIcon";
import useGetBrandColor from "../hooks/useGetBrandColor";

interface IconComponentProps {
  iconName: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ iconName }) => {
  const brandColor = useGetBrandColor();
  // Memoize the icon to prevent rerenders
  const Icon = useMemo(() => getHeroIcon(iconName), [iconName]);

  if (!Icon) return <span>Icon not found</span>;

  return <Icon className={`w-8 h-8 text-[${brandColor}]`} />;
};

export default IconComponent;
