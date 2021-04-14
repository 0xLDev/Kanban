import * as actionType from "./types";

const initialState = {
  list: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.ADD_COLUMN: {
      const { column } = payload;
      const list = [...state.list, column];

      return {
        ...state,
        list,
      };
    }

    case actionType.SET_COLUMNS: {
      const { columns } = payload;

      return {
        ...state,
        list: columns,
      };
    }

    case actionType.REMOVE_COLUMN: {
      const { removeId } = payload;
      const list = state.list.filter(({ id }) => id !== removeId);

      return {
        ...state,
        list,
      };
    }

    case actionType.REPLACE_COLUMN: {
      const { id, name } = payload;
      const list = state.list.map((column) => {
        if (column.id !== id) {
          return column;
        }

        return {
          ...column,
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
