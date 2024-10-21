import { useBodySettings } from "@/components/contexts/BodyTabSettings";
import { allAvailableOptions } from "@/components/utils/allAvailableOptions";
import React from "react";

const AddPartsToDisplay = () => {
  const { bodySettings, setBodySettings } = useBodySettings();
  const handleAddPart = (part: string) => {
    const array = bodySettings.parts;
    array.push(part);
    setBodySettings({
      ...bodySettings,
      parts: array,
    });
  };
  return (
    <div>
      <ul>
        {allAvailableOptions.body.parts.map((part) => (
          <li key={part}>
            <button onClick={() => handleAddPart(part)}>{part.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddPartsToDisplay;
