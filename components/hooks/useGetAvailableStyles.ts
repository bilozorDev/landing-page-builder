import { allAvailableOptions } from "../utils/allAvailableOptions";
import { SelectedComponent } from "../utils/allAvailableOptions.t";

const useGetAvailableStyles = (part: SelectedComponent) => {
  const currentPart = allAvailableOptions.body.availableComponents.find(
    (el) => el.name == part.name
  );
  if (currentPart) return currentPart.availableStyles;
};

export default useGetAvailableStyles;
