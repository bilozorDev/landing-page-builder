import useGetAvailableStyles from "@/components/hooks/useGetAvailableStyles";
import { BodyPart, Style } from "@/components/utils/allAvailableOptions.t";
import React from "react";
import RadioGroupWithDesc from "@/components/ui/RadioGroupWithDesc";
import { useBodySettings } from "@/components/contexts/BodyTabSettings";
import SectionTitle from "@/components/ui/SectionTitle";

const PartSettings = ({ part }: { part: BodyPart }) => {
  const { bodySettings, setBodySettings } = useBodySettings();
  const availableStyles = useGetAvailableStyles(part);

  const handStyleUpdate = (style: Style) => {
    const updatedObj: BodyPart = {
      ...part,
      data: { ...part.data, selectedStyle: style },
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
          handleSelect={handStyleUpdate}
          value={part.data.selectedStyle}
        />
        <SectionTitle title="Data" />
      </div>
    );
  }
};

export default PartSettings;
