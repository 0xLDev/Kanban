import * as actionType from "./types";

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
      const list = state.list.filter(({ id }) => id !== removeId);

      return {
        ...state,
        list,
      };
    }

    case actionType.REPLACE_BOARD: {
      const { id, name } = payload;
      const list = state.list.map((board) => {
        if (board.id !== id) {
          return board;
        }

        return {
          ...board,
          name,
        };
      });

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
