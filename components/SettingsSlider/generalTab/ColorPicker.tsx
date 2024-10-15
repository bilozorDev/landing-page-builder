import { useGeneralSetting } from "@/components/contexts/GeneralTabSettings";
import classNames from "classnames";
import React from "react";
const predefinedColors = [
  "#dc2626", // red-600
  "#d97706", // amber
  "#059669", // emerald
  "#0284c7", // blue
  "#6366F1", // Fuchsia
  "#e11d48", // rose
  "#0891b2", // cyan
  "#52525b", // Zinc
];

const ColorPicker = () => {
  const { generalSettings, setGeneralSettings } = useGeneralSetting();
  const { brandColor } = generalSettings.colors;
  const handleSelect = (color: string) => {
    setGeneralSettings({
      ...generalSettings,
      colors: {
        brandColor: color,
      },
    });
  };

  return (
    <div className=" flex flex-row  justify-between items-center">
      <p className="text-black text-lg">Brand Color:</p>
      <div className="grid grid-cols-4 sm:flex sm:flex-row gap-3 ">
        {predefinedColors.map((color) => {
          return (
            <div
              key={color}
              className={classNames(
                `w-10 h-10 bg-[${color}] rounded-full hover:cursor-pointer hover:ring-2 hover:ring-offset-2 transition-all duration-100 hover:ring-[${color}]`,
                color === brandColor
                  ? `ring-2 ring-offset-4 ring-[${color}]`
                  : null
              )}
              onClick={() => handleSelect(color)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
