import { createContext, ReactNode, useContext } from "react";
import useLocalStorageState from "use-local-storage-state";
import { BodyParts } from "../utils/allAvailableOptions.t";

const BodyTabSettings = createContext<{
  bodySettings: BodyParts;
  setBodySettings: React.Dispatch<React.SetStateAction<BodyParts>>;
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
  const [bodySettings, setBodySettings] = useLocalStorageState<BodyParts>(
    "bodySettings",
    {
      defaultValue: {
        parts: [],
      },
    }
  );
  return (
    <BodyTabSettings.Provider value={{ bodySettings, setBodySettings }}>
      {children}
    </BodyTabSettings.Provider>
  );
};

export const useBodySettings = () => {
  return useContext(BodyTabSettings);
};
