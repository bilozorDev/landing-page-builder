import { ReactNode, useContext, createContext } from "react";
import useLocalStorageState from "use-local-storage-state";
import { v4 } from "uuid";
import { HeaderTabSettingsType } from "../@types/headerTabSettings.t";
const HeaderTabSettings = createContext<{
  headerSettings: HeaderTabSettingsType;
  setHeaderSettings: React.Dispatch<
    React.SetStateAction<HeaderTabSettingsType>
  >;
}>({
  headerSettings: {
    menuItems: [
      {
        name: "Product",
        id: v4(),
        href: "#",
      },
      { name: "Features", href: "#", id: v4() },
      { name: "Marketplace", href: "#", id: v4() },
      { name: "Company", href: "#", id: v4() },
    ],
  },
  setHeaderSettings: () => {},
});

export const HeaderTabSettingsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [headerSettings, setHeaderSettings] = useLocalStorageState(
    "headerSettings",
    {
      defaultValue: {
        menuItems: [
          {
            name: "Product",
            id: v4(),
            href: "#",
          },
          { name: "Features", href: "#", id: v4() },
          { name: "Marketplace", href: "#", id: v4() },
          { name: "Company", href: "#", id: v4() },
        ],
      },
    }
  );
  return (
    <HeaderTabSettings.Provider value={{ headerSettings, setHeaderSettings }}>
      {children}
    </HeaderTabSettings.Provider>
  );
};

export const useHeaderSettings = () => {
  return useContext(HeaderTabSettings);
};
