import useGetAvailableStyles from "@/components/hooks/useGetAvailableStyles";

import React from "react";
import RadioGroupWithDesc from "@/components/ui/RadioGroupWithDesc";
import { useBodySettings } from "@/components/contexts/BodyTabSettings";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  SelectedComponent,
  SelectionVariation,
} from "@/components/utils/allAvailableOptions.t";

const PartSettings = ({ part }: { part: SelectedComponent }) => {
  const { bodySettings, setBodySettings } = useBodySettings();
  const availableStyles = useGetAvailableStyles(part);
  const handleStyleUpdate = (style: SelectionVariation) => {
    const updatedObj: SelectedComponent = {
      ...part,
      selectedStyle: style,
    };
    const newArray = bodySettings.parts.map((item) =>
      item.id === part.id ? updatedObj : item
    );

    setBodySettings((prev) => ({
      ...prev,
      parts: newArray,
    }));
  };
  if (!availableStyles) return "no available styles";
  else {
    return (
      <div className="px-4 sm:px-6">
        <SectionTitle title="Style" />
        <RadioGroupWithDesc
          availableStyles={availableStyles}
          handleSelect={handleStyleUpdate}
          value={part.selectedStyle || availableStyles[0]}
        />
        <SectionTitle title="Data" />
      </div>
    );
  }
};

export default PartSettings;
