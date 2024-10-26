import useGetAvailableStyles from "@/components/hooks/useGetAvailableStyles";

import React from "react";
import RadioGroupWithDesc from "@/components/ui/RadioGroupWithDesc";
import { useBodySettings } from "@/components/contexts/BodyTabSettings";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  SelectedComponent,
  SelectionVariation,
} from "@/components/utils/allAvailableOptions.t";
import SelectiveInputForm from "./SelectiveInputForm";

const PartSettings = ({ part }: { part: SelectedComponent }) => {
  const { setBodySettings } = useBodySettings();
  const availableStyles = useGetAvailableStyles(part);
  const handleStyleUpdate = (style: SelectionVariation) => {
    setBodySettings((prev) => ({
      ...prev,
      parts: prev.parts.map((item) =>
        item.id === part.id ? { ...item, selectedStyle: style } : item
      ),
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
        {part.contentBlocks.map((item, index) => (
          <SelectiveInputForm obj={item} key={index} />
        ))}
      </div>
    );
  }
};

export default PartSettings;
