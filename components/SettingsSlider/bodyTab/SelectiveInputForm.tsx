import { useBodySettings } from "@/components/contexts/BodyTabSettings";
import { ActionTypes } from "@/components/reducers/bodyReducerTypes.t";
import SingleTextInput from "@/components/ui/SingleTextInput";
import TextInputWithLink from "@/components/ui/TextInputWithLink";
import {
  ContentBlock,
  ContentBlockTypes,
} from "@/components/utils/allAvailableOptions.t";

type SelectiveInputType = {
  obj: ContentBlock;
  id: string;
  index: number;
};

const SelectiveInputForm = ({ obj, id, index }: SelectiveInputType) => {
  const { dispatch, bodySettings } = useBodySettings();
  const handleSimpleTextUpdate = (newText: string) => {
    dispatch({
      type: ActionTypes.SIMPLE_TEXT_UPDATE,
      payload: { newText, id, index },
    });
  };

  const handleTextWithLink = (updatedValue: { text: string; link: string }) => {
    dispatch({
      type: ActionTypes.TEXT_WITH_LINK_UPDATE,
      payload: { updatedValue, id, index },
    });
  };

  const handleButton = (updatedValue: { text: string; link: string }) => {
    dispatch({
      type: ActionTypes.UPDATE_BUTTON,
      payload: { updatedValue, id, index },
    });
  };

  const currentValue = bodySettings.parts.find((part) => part.id === id)
    ?.contentBlocks[index];

  switch (obj.type) {
    case ContentBlockTypes.text: {
      return (
        <SingleTextInput
          label={obj.blockName}
          onChange={handleSimpleTextUpdate}
          value={currentValue?.text || ""}
        />
      );
    }
    case ContentBlockTypes.textWithLink: {
      return (
        <TextInputWithLink
          onChange={handleTextWithLink}
          value={currentValue as { text: string; link: string }}
        />
      );
    }
    case ContentBlockTypes.button: {
      return (
        <>
          <div className="flex relative items-center space-x-4">
            <p className="mt-4  capitalize whitespace-nowrap">
              {obj.blockName}
            </p>
            <div className="w-full h-4 border-b border-gray-300"></div>
          </div>
          <TextInputWithLink
            label="Label"
            onChange={handleButton}
            value={currentValue as { text: string; link: string }}
          />
        </>
      );
    }

    default:
      console.log("not valid", obj);
      return "not valid";
  }
};

export default SelectiveInputForm;
