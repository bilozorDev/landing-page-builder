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
