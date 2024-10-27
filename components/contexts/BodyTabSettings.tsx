import React, {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useEffect,
} from "react";
import { SelectedBodyParts } from "../utils/allAvailableOptions.t";
import bodyReducer from "../reducers/bodyReducer";
import { Actions } from "../reducers/bodyReducerTypes.t";

// Define the initial state
const initialState: SelectedBodyParts = {
  parts: [],
};

// Function to load state from localStorage
const loadInitialState = (): SelectedBodyParts => {
  try {
    const storedState = localStorage.getItem("bodySettings");
    return storedState ? JSON.parse(storedState) : initialState;
  } catch (error) {
    console.error("Failed to load state from localStorage:", error);
    return initialState;
  }
};

// Create the context
const BodyTabSettings = createContext<{
  bodySettings: SelectedBodyParts;
  dispatch: React.Dispatch<Actions>;
}>({
  dispatch: () => null,
  bodySettings: initialState,
});

// Provider component
export const BodyTabSettingsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [bodySettings, dispatch] = useReducer(
    bodyReducer,
    initialState,
    loadInitialState
  );

  // Save state to localStorage whenever it changes
  useEffect(() => {
    try {
      const serializedState = JSON.stringify(bodySettings);
      localStorage.setItem("bodySettings", serializedState);
    } catch (error) {
      console.error("Failed to save state to localStorage:", error);
    }
  }, [bodySettings]);

  return (
    <BodyTabSettings.Provider value={{ bodySettings, dispatch }}>
      {children}
    </BodyTabSettings.Provider>
  );
};

// Custom hook to use the context
export const useBodySettings = () => {
  return useContext(BodyTabSettings);
};
