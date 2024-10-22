import { createContext, ReactNode, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";
import { BodyTabSettingsType } from "../@types/bodyTabSettingsType.t";

const BodyTabSettings = createContext<{
  bodySettings: BodyTabSettingsType;
  setBodySettings: React.Dispatch<React.SetStateAction<BodyTabSettingsType>>;
}>({
  bodySettings: {
    parts: [],
  },
  setBodySettings: () => {},
});

export const BodyTabSettingsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [bodySettings, setBodySettings] =
    useLocalStorageState<BodyTabSettingsType>("bodySettings", {
      defaultValue: {
        parts: [],
      },
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
