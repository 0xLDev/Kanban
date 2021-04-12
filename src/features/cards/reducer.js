import * as actionType from "./types";

const initialState = {
  list: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.ADD_CARDS: {
      const { card } = payload;
      const list = [...state.list, card];

      return {
        ...state,
        list,
      };
    }

    case actionType.SET_CARDS: {
      const { cards } = payload;

      return {
        ...state,
        list: cards,
      };
    }

    case actionType.REMOVE_CARD: {
      const { removeId } = payload;
      const list = state.list.filter(({ id }) => id !== removeId);

      return {
        ...state,
        list,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
