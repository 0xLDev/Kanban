import * as actionType from "../actions/types";

const initialState = {
  list: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.ADD_BOARD: {
      const { board } = payload;
      const list = [...state.list, board];

      return {
        ...state,
        list,
      };
    }

    case actionType.SET_BOARDS: {
      const { boards } = payload;

      return {
        ...state,
        list: boards,
      };
    }

    case actionType.REMOVE_BOARD: {
      const { removeId } = payload;
      const boards = state.boards.filter(({ id }) => id !== removeId);

      return {
        ...state,
        list: boards,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
