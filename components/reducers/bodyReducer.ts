import { SelectedBodyParts } from "../utils/allAvailableOptions.t";
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
      return {
        ...state,
        parts: state.parts.map((item) =>
          item.id == action.payload.id
            ? { ...item, selectedStyle: action.payload.style }
            : item
        ),
      };
    }
    default:
      return state;
  }
};

export default bodyReducer;
