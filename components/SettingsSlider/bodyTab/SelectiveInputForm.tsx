import { useBodySettings } from "@/components/contexts/BodyTabSettings";
import { ActionTypes } from "@/components/reducers/bodyReducerTypes.t";
import SingleTextInput from "@/components/ui/SingleTextInput";
import TextInputWithLink from "@/components/ui/TextInputWithLink";
import {
  ContentBlock,
  ContentBlockList,
  ContentBlockTypes,
} from "@/components/utils/allAvailableOptions.t";
import ListEditSettings from "./ListEditSettings";
import BlurredWrap from "@/components/ui/BlurredWrap";
import IconComponent from "@/components/ui/IconComponent";
import { useState } from "react";
import ModalWindows from "@/components/ui/ModalWindows";
import AddListItem from "./AddListItem";

type SelectiveInputType = {
  obj: ContentBlock;
  id: string;
  index: number;
};

const SelectiveInputForm = ({ obj, id, index }: SelectiveInputType) => {
  const { dispatch, bodySettings } = useBodySettings();
  const [showMoadl, setShowModal] = useState(false);

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

  const handleReorder = (newOrder: ContentBlockList[]) => {
    dispatch({
      type: ActionTypes.HANDLE_LIST_REORDER,
      payload: { newOrder, id, index },
    });
  };

  const handleDelete = (idOfListItem: string) => {
    dispatch({
      type: ActionTypes.DELETE_LIST_ITEM,
      payload: { idOfPart: id, idOfListItem },
    });
  };

  const handleAddListItem = (newItem: ContentBlockList) => {
    dispatch({
      type: ActionTypes.ADD_LIST_ITEM,
      payload: { idOfPart: id, ...newItem },
    });
    setShowModal(false);
  };
  const requiredContent =
    bodySettings.parts.find((part) => part.id === id)?.selectedStyle
      ?.requiredBlocks || [];
  console.log(requiredContent);
  const currentValue = bodySettings.parts.find((part) => part.id === id)
    ?.contentBlocks[index];
  switch (obj.type) {
    case ContentBlockTypes.statsList: {
      if (
        checkIfContentRequired({
          item: obj.blockName,
          arrayToCheck: requiredContent,
        })
      )
        return <>This is stats list</>;
    }
    case ContentBlockTypes.simpleList: {
      if (
        checkIfContentRequired({
          item: obj.blockName,
          arrayToCheck: requiredContent,
        })
      )
        return (
          <ListEditSettings
            part={obj}
            handleReorder={handleReorder}
            handleDelete={handleDelete}
          />
        );
    }
    case ContentBlockTypes.image: {
      break;
    }
    case ContentBlockTypes.featureWithIcon: {
      if (
        checkIfContentRequired({
          item: obj.blockName,
          arrayToCheck: requiredContent,
        })
      )
        return (
          <>
            <ListEditSettings
              part={obj}
              handleReorder={handleReorder}
              handleDelete={handleDelete}
            />
            <div onClick={() => setShowModal(true)}>
              <BlurredWrap text="Add feature">
                <div className="pl-7 opacity-45 flex relative group justify-start w-full items-center space-x-6 mt-4">
                  {}
                  <div>
                    <IconComponent iconName="LockClosedIcon" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Feature Name</p>
                    <div className="block text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere laudantium dolorem explicabo.
                    </div>
                  </div>
                </div>
              </BlurredWrap>
            </div>
            <ModalWindows
              open={showMoadl}
              setOpen={setShowModal}
              title="Add Feature"
            >
              <AddListItem handleAddListItem={handleAddListItem} />
            </ModalWindows>
          </>
        );
    }
    case ContentBlockTypes.text: {
      if (
        checkIfContentRequired({
          item: obj.blockName,
          arrayToCheck: requiredContent,
        })
      )
        return (
          <SingleTextInput
            label={obj.blockName}
            onChange={handleSimpleTextUpdate}
            value={currentValue?.text || ""}
          />
        );
    }
    case ContentBlockTypes.textWithLink: {
      if (
        checkIfContentRequired({
          item: obj.blockName,
          arrayToCheck: requiredContent,
        })
      )
        return (
          <TextInputWithLink
            onChange={handleTextWithLink}
            value={currentValue as { text: string; link: string }}
          />
        );
    }
    case ContentBlockTypes.button: {
      if (
        checkIfContentRequired({
          item: obj.blockName,
          arrayToCheck: requiredContent,
        })
      )
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
      return null;
  }
};

export default SelectiveInputForm;

const checkIfContentRequired = ({
  item,
  arrayToCheck,
}: {
  item: string;
  arrayToCheck: string[];
}) => {
  return arrayToCheck.includes(item);
};
