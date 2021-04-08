import * as actionType from "../actions/types";

const initialState = {
  boards: [],
  columns: [],
  cards: [],
  activePanel: null,
  popout: null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.ADD_COLUMN: {
      const { column } = payload;
      const columns = [...state.columns, column];

      return {
        ...state,
        columns,
      };
    }

    case actionType.SET_COLUMNS: {
      const { columns } = payload;

      return {
        ...state,
        columns,
      };
    }

    case actionType.REMOVE_COLUMN: {
      const { removeId } = payload;
      const columns = state.columns.filter(({ id }) => id !== removeId);

      return {
        ...state,
        columns,
      };
    }
    case actionType.ADD_BOARD: {
      const { board } = payload;
      const boards = [...state.boards, board];

      return {
        ...state,
        boards,
      };
    }

    case actionType.SET_BOARDS: {
      const { boards } = payload;

      return {
        ...state,
        boards,
      };
    }

    case actionType.REMOVE_BOARD: {
      const { removeId } = payload;
      const boards = state.boards.filter(({ id }) => id !== removeId);

      return {
        ...state,
        boards,
      };
    }

    case actionType.SET_ACTIVE_PANEL: {
      const { panel } = payload;

      return {
        ...state,
        activePanel: panel,
      };
    }

    case actionType.ADD_CARDS: {
      const { card } = payload;
      const cards = [...state.cards, card];

      return {
        ...state,
        cards,
      };
    }

    case actionType.SET_CARDS: {
      const { cards } = payload;

      return {
        ...state,
        cards,
      };
    }

    case actionType.REMOVE_CARD: {
      const { removeId } = payload;
      const cards = state.cards.filter(({ id }) => id !== removeId);

      return {
        ...state,
        cards,
      };
    }

    case actionType.SET_POPOUT: {
      const { popout } = payload;

      return {
        ...state,
        popout,
      };
    }

    default: {
      return state;
    }
  }
};
