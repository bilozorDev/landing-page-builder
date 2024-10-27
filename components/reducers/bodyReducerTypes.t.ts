import {
  SelectedComponent,
  SelectionVariation,
} from "../utils/allAvailableOptions.t";

export enum ActionTypes {
  ADD_NEW_PART = "ADD_NEW_PART",
  UPDATE_STYLE = "UPDATE_STYLE",
  HANDLE_PARTS_REORDER = "HANDLE_PARTS_REORDER",
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

export type Actions =
  | AddNewPartAction
  | SelectNewComponentStyleAction
  | HandlePartsReorder;
