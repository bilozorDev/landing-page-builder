import { createContext, ReactNode, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";
import { allAvailableOptions } from "../utils/allAvailableOptions";
import { SelectionVariation } from "../utils/allAvailableOptions.t";

type FooterTabSettingsType = {
  style: SelectionVariation;
  text: string;
};
const FooterTabSettings = createContext<{
  footerSettings: FooterTabSettingsType;
  setFooterSettings: React.Dispatch<
    React.SetStateAction<FooterTabSettingsType>
  >;
}>({
  footerSettings: {
    style: allAvailableOptions.footer.availableStyles[0],
    text: "",
  },
  setFooterSettings: () => {},
});

export const FooterTabSettingsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [footerSettings, setFooterSettings] =
    useLocalStorageState<FooterTabSettingsType>("footerSettings", {
      defaultValue: {
        style: allAvailableOptions.footer.availableStyles[0],
        text: "",
      },
    });
  return (
    <FooterTabSettings.Provider value={{ footerSettings, setFooterSettings }}>
      {children}
    </FooterTabSettings.Provider>
  );
};

export const useFooterSetting = () => {
  return useContext(FooterTabSettings);
};
