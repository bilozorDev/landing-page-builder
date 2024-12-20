import {
  ContentBlock,
  ContentBlockTypes,
  SelectedBodyParts,
} from "../utils/allAvailableOptions.t";
import { Actions, ActionTypes } from "./bodyReducerTypes.t";

const bodyReducer = (state: SelectedBodyParts, action: Actions) => {
  switch (action.type) {
    case ActionTypes.DELETE_PART: {
      return {
        ...state,
        parts: state.parts.filter((part) => part.id !== action.payload.id),
      };
    }
    case ActionTypes.ADD_LIST_ITEM: {
      const { idOfPart, ...newItem } = action.payload;
      return {
        ...state,
        parts: state.parts.map((part) => {
          if (part.id !== idOfPart) return part;
          const updatedContentBlocks = part.contentBlocks.map(
            (contentBlock) => {
              if (
                contentBlock.type !== ContentBlockTypes.simpleList &&
                contentBlock.type !== ContentBlockTypes.featureWithIcon
              )
                return contentBlock;

              const updatedList = [...contentBlock.list, newItem];
              return {
                ...contentBlock,
                list: updatedList,
              };
            }
          );
          return {
            ...part,
            contentBlocks: updatedContentBlocks,
          };
        }),
      };
    }
    case ActionTypes.DELETE_LIST_ITEM: {
      const { idOfPart, idOfListItem } = action.payload;

      return {
        ...state,
        parts: state.parts.map((part) => {
          if (part.id !== idOfPart) return part;
          const updatedContentBlocks = part.contentBlocks.map(
            (contentBlock) => {
              if (
                contentBlock.type !== ContentBlockTypes.simpleList &&
                contentBlock.type !== ContentBlockTypes.featureWithIcon
              )
                return contentBlock;
              const updatedList = contentBlock.list.filter(
                (listItem) => listItem.id !== idOfListItem
              );
              return {
                ...contentBlock,
                list: updatedList,
              };
            }
          );
          return {
            ...part,
            contentBlocks: updatedContentBlocks,
          };
        }),
      };
    }
    case ActionTypes.HANDLE_LIST_REORDER: {
      const { newOrder, id, index } = action.payload;
      return {
        ...state,
        parts: state.parts.map((part) => {
          if (part.id !== id) return part;
          const updatedContentBlock: ContentBlock = {
            ...part.contentBlocks[index],
            list: newOrder,
          };
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
    case ActionTypes.UPLOAD_IMAGE: {
      const { id, imageSrc } = action.payload;
      console.log("imageSrc", imageSrc);
      return {
        ...state,
        parts: state.parts.map((item) =>
          item.id == id
            ? {
                ...item,
                contentBlocks: item.contentBlocks.map((contentBlock) =>
                  contentBlock.type === "image"
                    ? { ...contentBlock, image: imageSrc }
                    : contentBlock
                ),
              }
            : item
        ),
      };
    }
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
          item.id == id
            ? {
                ...item,
                selectedStyle: style,
                image: style.image ? style.defaultImgScr : "",
              }
            : item
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
    case ActionTypes.UPDATE_BUTTON: {
      const { id, index, updatedValue } = action.payload;
      return {
        ...state,
        parts: state.parts.map((part) => {
          if (part.id !== id) return part;
          // Get the contentBlock to update
          const contentBlock = part.contentBlocks[index];

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
