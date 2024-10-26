import { createContext, ReactNode, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";
import { SelectedBodyParts } from "../utils/allAvailableOptions.t";

const BodyTabSettings = createContext<{
  bodySettings: SelectedBodyParts;
  setBodySettings: React.Dispatch<React.SetStateAction<SelectedBodyParts>>;
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
    useLocalStorageState<SelectedBodyParts>("bodySettings", {
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
