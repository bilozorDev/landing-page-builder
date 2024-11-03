import {
  ContentBlockList,
  SelectedComponent,
  SelectionVariation,
} from "../utils/allAvailableOptions.t";

export enum ActionTypes {
  ADD_NEW_PART = "ADD_NEW_PART",
  UPDATE_STYLE = "UPDATE_STYLE",
  HANDLE_PARTS_REORDER = "HANDLE_PARTS_REORDER",
  SIMPLE_TEXT_UPDATE = "SIMPLE_TEXT_UPDATE",
  TEXT_WITH_LINK_UPDATE = "TEXT_WITH_LINK_UPDATE",
  UPDATE_BUTTON = "UPDATE_BUTTON",
  UPLOAD_IMAGE = "UPLOAD_IMAGE",
  HANDLE_LIST_REORDER = "HANDLE_LIST_REORDER",
  DELETE_LIST_ITEM = "DELETE_LIST_ITEM",
}

export type HandleListReorder = {
  type: ActionTypes.HANDLE_LIST_REORDER;
  payload: { id: string; newOrder: ContentBlockList[]; index: number };
};

export type DeleteListItem = {
  type: ActionTypes.DELETE_LIST_ITEM;
  payload: { idOfPart: string; idOfListItem: string };
};

export type UploadImage = {
  type: ActionTypes.UPLOAD_IMAGE;
  payload: { imageSrc: string; id: string };
};

export type AddNewPartAction = {
  type: ActionTypes.ADD_NEW_PART;
  payload: SelectedComponent;
};

export type SelectNewComponentStyleAction = {
  type: ActionTypes.UPDATE_STYLE;
  payload: { style: SelectionVariation; id: string };
};

export type HandlePartsReorder = {
  type: ActionTypes.HANDLE_PARTS_REORDER;
  payload: SelectedComponent[];
};

export type SimpleTextUpdate = {
  type: ActionTypes.SIMPLE_TEXT_UPDATE;
  payload: { newText: string; id: string; index: number };
};

export type TextWithLinkUpdate = {
  type: ActionTypes.TEXT_WITH_LINK_UPDATE;
  payload: {
    updatedValue: { text: string; link: string };
    id: string;
    index: number;
  };
};

export type UpdateButton = {
  type: ActionTypes.UPDATE_BUTTON;
  payload: {
    updatedValue: { text: string; link: string };
    id: string;
    index: number;
  };
};

export type Actions =
  | AddNewPartAction
  | SelectNewComponentStyleAction
  | HandlePartsReorder
  | SimpleTextUpdate
  | TextWithLinkUpdate
  | UpdateButton
  | UploadImage
  | HandleListReorder
  | DeleteListItem;
