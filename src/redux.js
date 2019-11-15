import { applyMiddleware, combineReducers, createStore } from 'redux';

import thunk from 'redux-thunk';

const initialState = {
  current: 0
};

// actions.js
export const updateCurrentTime = current => dispatch => {
  dispatch({
    type: 'UPDATE_CURRENT_TIME',
    payload: current
  });
}

// reducers.js
export const scene = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_TIME':
      return {
        ...state,
        current: action.payload
      }
    default:
      return state;
  }
};

export const reducers = combineReducers({ scene });

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
}

export const store = configureStore();
