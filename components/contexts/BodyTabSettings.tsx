import { BodyTabSettingsType } from "../@types/BodyTabSettingsType.t";
import { createContext, ReactNode, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";

const BodyTabSettings = createContext<{
  bodySettings: BodyTabSettingsType;
  setBodySettings: React.Dispatch<React.SetStateAction<BodyTabSettingsType>>;
}>({
  bodySettings: {},
  setBodySettings: () => {},
});

export const BodyTabSettingsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [bodySettings, setBodySettings] =
    useLocalStorageState<BodyTabSettingsType>("bodySettings", {
      defaultValue: {},
    });
  return (
    <BodyTabSettings.Provider value={{ bodySettings, setBodySettings }}>
      {children}
    </BodyTabSettings.Provider>
  );
};

export const useBodySettings = () => {
  return useContext(BodyTabSettings);
};
