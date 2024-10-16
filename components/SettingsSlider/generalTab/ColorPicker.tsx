import { Color } from "@/components/@types/predefinedColors.t";
import { useGeneralSetting } from "@/components/contexts/GeneralTabSettings";
import useGetBrandColor from "@/components/hooks/useGetBrandColor";
import { predefinedColors } from "@/components/utils/predefinedColors";
import classNames from "classnames";
import React from "react";

const ColorPicker = () => {
  const { generalSettings, setGeneralSettings } = useGeneralSetting();

  const handleSelect = (color: Color) => {
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
              key={color.hex}
              className={classNames(
                `w-10 h-10 bg-[${color.hex}] rounded-full hover:cursor-pointer hover:ring-2 hover:ring-offset-2 transition-all duration-100 hover:ring-[${color}]`,
                color.hex === generalSettings.colors.brandColor.hex
                  ? `ring-2 ring-offset-4 ring-[${color.hex}]`
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
