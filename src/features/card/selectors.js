const getState = (state) => state.card;

export const getId = (state) => getState(state).id;
export const getName = (state) => getState(state).name;
export const getText = (state) => getState(state).text;
