import * as actionType from './types'

const initialState = {
  id: null,
  name: null,
  text: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_CARD: {
      return {
        ...state,
        ...payload
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
