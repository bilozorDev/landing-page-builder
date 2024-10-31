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
import { ActionTypes } from "@/components/reducers/bodyReducerTypes.t";
import ImageUpload from "./ImageUpload";

const PartSettings = ({ part }: { part: SelectedComponent }) => {
  const { dispatch } = useBodySettings();
  const availableStyles = useGetAvailableStyles(part);
  const handleStyleUpdate = (style: SelectionVariation) => {
    dispatch({
      type: ActionTypes.UPDATE_STYLE,
      payload: { id: part.id, style: style },
    });
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
        {part.image && (
          <>
            <SectionTitle title="Image" />
            <ImageUpload part={part} />
          </>
        )}
        <SectionTitle title="Data" />
        <div className="space-y-4">
          {part.contentBlocks.map((item, index) => (
            <SelectiveInputForm
              obj={item}
              key={index}
              id={part.id}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default PartSettings;
