import * as actionType from "./types";

const initialState = {
  id: null,
  name: null,
  text: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_CARD:
    case actionType.REPLACE_CARD: {
      return {
        ...state,
        ...payload,
      };
    }

    case actionType.REMOVE_CARD: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
