import { allAvailableOptions } from "../utils/allAvailableOptions";
import { BodyPart } from "../utils/allAvailableOptions.t";

const useGetAvailableStyles = (part: BodyPart) => {
  const currentPart = allAvailableOptions.body.parts.find(
    (el) => el.name == part.name
  );
  if (currentPart) return currentPart.availableStyles;
};

export default useGetAvailableStyles;
