import { createContext, ReactNode, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";
import { BannerTabSettingsType } from "../@types/bannerTabSettings.t";
import { allAvailableOptions } from "../utils/allAvailableOptions";
const BannerTabSettings = createContext<{
  bannerSettings: BannerTabSettingsType;
  setBannerSettings: React.Dispatch<
    React.SetStateAction<BannerTabSettingsType>
  >;
}>({
  bannerSettings: {
    display: true,
    style: allAvailableOptions.banner.styles[0],
    data: {
      text: "",
      cta: {
        text: "",
        href: "",
      },
    },
  },
  setBannerSettings: () => {},
});

export const BannerTabSettingsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [bannerSettings, setBannerSettings] = useLocalStorageState(
    "bannerSettings",
    {
      defaultValue: {
        display: true,
        style: allAvailableOptions.banner.styles[0],
        data: {
          text: "GeneriCon 2023 Join us in Denver from June 7 – 9 to see what’s coming next.",
          cta: {
            text: "Register now",
            href: "#",
          },
        },
      },
    }
  );
  return (
    <BannerTabSettings.Provider value={{ bannerSettings, setBannerSettings }}>
      {children}
    </BannerTabSettings.Provider>
  );
};

export const useBannerSetting = () => {
  return useContext(BannerTabSettings);
};
