import {
  ContentBlock,
  SelectedBodyParts,
} from "../utils/allAvailableOptions.t";
import { Actions, ActionTypes } from "./bodyReducerTypes.t";

const bodyReducer = (state: SelectedBodyParts, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PART: {
      return {
        ...state,
        parts: [...state.parts, action.payload],
      };
    }
    case ActionTypes.HANDLE_PARTS_REORDER: {
      return { ...state, parts: action.payload };
    }
    case ActionTypes.UPDATE_STYLE: {
      const { id, style } = action.payload;
      return {
        ...state,
        parts: state.parts.map((item) =>
          item.id == id ? { ...item, selectedStyle: style } : item
        ),
      };
    }
    case ActionTypes.SIMPLE_TEXT_UPDATE: {
      const { id, index, newText } = action.payload;

      return {
        ...state,
        parts: state.parts.map((part) => {
          if (part.id !== id) return part;
          // get current contentBlock we updating
          const contentBlock = part.contentBlocks[index];
          const updatedContentBlock: ContentBlock = {
            ...contentBlock,
            text: newText,
          };
          //updated object in Array
          const updatedContentBlocks = [
            ...part.contentBlocks.slice(0, index),
            updatedContentBlock,
            ...part.contentBlocks.slice(index + 1),
          ];
          return {
            ...part,
            contentBlocks: updatedContentBlocks,
          };
        }),
      };
    }
    case ActionTypes.TEXT_WITH_LINK_UPDATE: {
      const { id, index, updatedValue } = action.payload;

      return {
        ...state,
        parts: state.parts.map((part) => {
          if (part.id !== id) return part;

          // Get the contentBlock to update
          const contentBlock = part.contentBlocks[index];

          // Only update if the contentBlock type is 'textWithLink'
          if (contentBlock.type !== "textWithLink") {
            console.warn(
              `ContentBlock at index ${index} in part with id ${id} is not of type 'textWithLink'.`
            );
            return part;
          }

          // Create the updated contentBlock
          const updatedContentBlock: ContentBlock = {
            ...contentBlock,
            text: updatedValue.text,
            link: updatedValue.link,
          };

          // Create the updated contentBlocks array
          const updatedContentBlocks = [
            ...part.contentBlocks.slice(0, index),
            updatedContentBlock,
            ...part.contentBlocks.slice(index + 1),
          ];

          // Return the updated part
          return {
            ...part,
            contentBlocks: updatedContentBlocks,
          };
        }),
      };
    }

    default:
      return state;
  }
};

export default bodyReducer;
