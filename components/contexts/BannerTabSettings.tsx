import { createContext, ReactNode, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";
import { BannerTabSettingsType } from "../@types/bannerTabSettings.t";
import { allAvailableOptions } from "../utils/allAvailableOptions";
import { v4 } from "uuid";
const BannerTabSettings = createContext<{
  bannerSettings: BannerTabSettingsType;
  setBannerSettings: React.Dispatch<
    React.SetStateAction<BannerTabSettingsType>
  >;
}>({
  bannerSettings: {
    display: true,
    style: allAvailableOptions.banner.availableStyles[0],
    data: {
      name: "",
      href: "",
      id: v4(),
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
        style: allAvailableOptions.banner.availableStyles[0],
        data: {
          name: "GeneriCon 2023 Join us in Denver from June 7 – 9 to see what’s coming next.",
          href: "",
          id: v4(),
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
