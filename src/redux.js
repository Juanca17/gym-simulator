import { applyMiddleware, combineReducers, createStore } from 'redux';
import { stateList } from './db'

import thunk from 'redux-thunk';

const initialState = {
  current: 0,
  users: [
    {
      name: 'juan',
      gender:'male',
      currentStateId: 0,
      previousStates: [1,2],
      timeOnCurrentState: 10,
      timeSpent: 80,
      routine: ['cardio','leg','glute'],
      markovchain: [{stateId:0, probability: 1},{stateId:1, probability: 0}]
    }, {
      gender:'female'
    }
  ],
  stateList: stateList
};

// actions.js
export const updateCurrentTime = current => dispatch => {
  // updateUserArrival(current)
  dispatch({
    type: 'UPDATE_CURRENT_TIME',
    payload: current
  });
}


// const updateUserArrival = current => {
//   const { users } = initialState
//   if (current > 0 && users.length < 150) {
//     const probability = Math.random()
//     console.log(probability);
//     if (probability > 0.8) {
//       initialState.users.push({gender:'male'})
//     }
//   }
// }

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
