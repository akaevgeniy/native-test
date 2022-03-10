const defaultState = {
  user: 'user1',
};

export const SET_USER = 'SET_USER';

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
  }
  return state;
}

export const setUser = (payload) => ({ type: SET_USER, payload });
