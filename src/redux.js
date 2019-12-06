import { applyMiddleware, combineReducers, createStore } from 'redux';
import { stateList } from './db'

import thunk from 'redux-thunk'
import { runSimulation } from './simulation.js'

const initialState = {
  current: 0,
  users: [],
  stateList: stateList,
  scene: [{users:[], state:stateList}]
};

// actions.js
export const updateCurrentTime = current => (dispatch, getState) => {
  const { scene } = getState().scene
  console.log('[updateCurrentTime]',scene);
  console.log(scene[current].state);
  let fixedCurrent = current
  if (current >= scene.length) {
    fixedCurrent = scene.length - 1
  }
  dispatch({
    type: 'UPDATE_CURRENT_TIME',
    current: current,
    users: scene[fixedCurrent].users,
    stateList: scene[fixedCurrent].state
  });
}

export const runSimulationDispatch = current => async(dispatch, getState) => {
  try {
    const { current } = getState().scene
    const scene = await runSimulation()
    let fixedCurrent = current
    if (current >= scene.length) {
      fixedCurrent = scene.length - 1
    }
    dispatch({
      type: 'RUN_SIMULATION',
      scene: scene,
      users: scene[fixedCurrent].users,
      stateList: scene[fixedCurrent].state
    })
  } catch (e) { throw e }
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
        current: action.current,
        users: action.users,
        stateList: action.stateList
      }
    case 'RUN_SIMULATION':
      return {
        ...state,
        scene: action.scene,
        users: action.users,
        stateList: action.stateList
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
