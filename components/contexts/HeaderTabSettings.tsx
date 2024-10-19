import { ReactNode, useContext, createContext } from "react";
import useLocalStorageState from "use-local-storage-state";
import { v4 } from "uuid";
import { HeaderTabSettingsType } from "../@types/headerTabSettings.t";

type AlignmentType = "start" | "center" | "end";
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
    alignment: "start",
  },
  setHeaderSettings: () => {},
});

export const HeaderTabSettingsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [headerSettings, setHeaderSettings] =
    useLocalStorageState<HeaderTabSettingsType>("headerSettings", {
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
        alignment: "start",
      },
    });
  return (
    <HeaderTabSettings.Provider value={{ headerSettings, setHeaderSettings }}>
      {children}
    </HeaderTabSettings.Provider>
  );
};

export const useHeaderSettings = () => {
  return useContext(HeaderTabSettings);
};
