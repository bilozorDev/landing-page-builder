import { createContext, ReactNode, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";
import { BannerTabSettingsType } from "../@types/bannerTabSettings.t";
import { v4 } from "uuid";
const BannerTabSettings = createContext<{
  bannerSettings: BannerTabSettingsType;
  setBannerSettings: React.Dispatch<
    React.SetStateAction<BannerTabSettingsType>
  >;
}>({
  bannerSettings: {
    display: true,
    style: [
      {
        id: v4(),
        name: "2 Columns",
        description: "List of features in 2 columns",
        selected: true,
      },
      {
        id: v4(),
        name: "3 Columns",
        description: "List of features in 3 columns",
        selected: false,
      },
    ],
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
        style: [
          {
            id: v4(),
            name: "2 Columns",
            description: "List of features in 2 columns",
            selected: true,
          },
          {
            id: v4(),
            name: "3 Columns",
            description: "List of features in 3 columns",
            selected: false,
          },
        ],
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
