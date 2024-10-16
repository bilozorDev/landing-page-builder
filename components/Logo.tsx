import Link from "next/link";
import React from "react";
import { useGeneralSetting } from "./contexts/GeneralTabSettings";

const Logo = () => {
  const { generalSettings } = useGeneralSetting();
  const { color, shade } = generalSettings.colors.brandColor;
  return (
    <Link href="/" className="-m-1.5 p-1.5 cursor-pointer">
      <span className="sr-only">Your Company</span>
      {generalSettings.logo.src ? (
        <img
          className={`h-${generalSettings.logo.size} w-auto mx-auto`}
          src={generalSettings.logo.src}
          alt="Logo"
        />
      ) : (
        <img
          alt="Your Company"
          src={`https://tailwindui.com/plus/img/logos/mark.svg?color=${color}&shade=${shade}`}
          className={`h-${generalSettings.logo.size} w-auto`}
        />
      )}
    </Link>
  );
};

export default Logo;
