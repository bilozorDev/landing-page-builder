import { createContext, ReactNode, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";
import { GeneralTabSettingsType } from "../@types/generalTabSettings.t";
import { allAvailableOptions } from "../utils/allAvailableOptions";
const GeneralTabSettings = createContext<{
  generalSettings: GeneralTabSettingsType;
  setGeneralSettings: React.Dispatch<
    React.SetStateAction<GeneralTabSettingsType>
  >;
}>({
  generalSettings: {
    metaData: {
      title: "My website",
      description: "Description",
    },
    colors: {
      brandColor: allAvailableOptions.general.predefinedColors[0],
    },
    logo: {
      src: "https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500",
      size: 20,
    },
  },
  setGeneralSettings: () => {},
});

export const GeneralTabSettingsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [generalSettings, setGeneralSettings] = useLocalStorageState(
    "generalSettings",
    {
      defaultValue: {
        metaData: {
          title: "My website",
          description: "Description ",
        },
        colors: {
          brandColor: allAvailableOptions.general.predefinedColors[0],
        },
        logo: {
          src: "",
          size: 20,
        },
      },
    }
  );
  return (
    <GeneralTabSettings.Provider
      value={{ generalSettings, setGeneralSettings }}
    >
      {children}
    </GeneralTabSettings.Provider>
  );
};

export const useGeneralSetting = () => {
  return useContext(GeneralTabSettings);
};
