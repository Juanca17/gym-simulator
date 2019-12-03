import random_name from 'node-random-name'
import { stateList } from './db'
let scene = [{users:[], state:stateList}]

/*let scene2 = {
  minute_0: {users:[], state:stateList}
}*/

export const runSimulation = async() => {
  let sceneState
  for (let i = 1; i < 10; i++) {
    sceneState = scene[i - 1]
    console.log('current time:', i);
    let usersComing = await getUsersComing(i)
    if (usersComing) {
      await createUser(usersComing, sceneState)
    }
    if (sceneState.users.length) {
      await updateActiveUsers(i, sceneState)
    }
    scene.push(JSON.parse(JSON.stringify(sceneState)))
    // console.log('Iteracion', i, sceneState);
  }
  console.log(scene);
}

const getUsersComing = async(current) => {
  const probability = Math.random()
  if (probability > 0.5) {
    return Math.floor(Math.random() * 3) + 1
  }
  return 0
}

const createUser = async(n, sceneState) => {
  // console.log('createUser', n);
  for (let i = 0; i < n; i++) {
    let newUser = {
      name: random_name({random: Math.random, gender:'female'}),
      gender: 'female',
      currentStateId: 0,
      previousStates: [],
      timeOnCurrentState: 0,
      timeSpent: 90,
      routine: ['cardio']
    }
    const probability = Math.random()
    if (probability > 0.5) {
      newUser.gender = 'male'
      newUser.name = random_name({random: Math.random, gender:'male'})
    }
    sceneState.users.push(newUser)
  }
}

const updateActiveUsers = async(current, sceneState) => {
  for (let i = 0; i < sceneState.users.length; i++) {
    console.log(i, sceneState.users[i].name);
  }
}

// function randomChoice(p) {
//     let rnd = p.reduce( (a, b) => a + b ) * Math.random();
//     return p.findIndex( a => (rnd -= a) < 0 );
// }
//
// function randomChoices(p, count) {
//     return Array.from(Array(count), randomChoice.bind(null, p));
// }

// let result = randomChoices([0.1, 0, 0.3, 0.6, 0], 3);
// console.log(result);
