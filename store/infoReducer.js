const defaultState = {
  items: [],
};

export const SET_ITEMS = 'SET_ITEMS';
export const FETCH_ITEMS = 'FETCH_ITEMS';

export default function infoReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload };
  }
  return state;
}

export const setItems = (payload) => ({ type: SET_ITEMS, payload });
export const fetchItems = () => ({ type: FETCH_ITEMS });
