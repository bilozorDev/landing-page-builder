import {
  SelectedComponent,
  SelectionVariation,
} from "../utils/allAvailableOptions.t";

export enum ActionTypes {
  ADD_NEW_PART = "ADD_NEW_PART",
  UPDATE_STYLE = "UPDATE_STYLE",
  HANDLE_PARTS_REORDER = "HANDLE_PARTS_REORDER",
  SIMPLE_TEXT_UPDATE = "SIMPLE_TEXT_UPDATE",
  TEXT_WITH_LINK_UPDATE = "TEXT_WITH_LINK_UPDATE",
  UPDATE_BUTTON = "UPDATE_BUTTON" 
}

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

export type ButtonWithStyleUpdate = {
  type: ActionTypes.
}

export type Actions =
  | AddNewPartAction
  | SelectNewComponentStyleAction
  | HandlePartsReorder
  | SimpleTextUpdate
  | TextWithLinkUpdate;
