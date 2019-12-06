import random_name from 'node-random-name'
import { stateList } from './db'
let scene = [{users:[], state:stateList}]

export const runSimulation = async() => {
  let sceneState
  for (let i = 1; i < 120; i++) {
    sceneState = scene[i - 1]
    if (sceneState.users.length) {
      await updateActiveUsers(i, sceneState)
    }
    let usersComing = await getUsersComing(i, sceneState.users.length)
    if (usersComing) {
      await createUser(usersComing, sceneState)
    }
    scene.push(JSON.parse(JSON.stringify(sceneState)))
    // console.log('Iteracion', i, sceneState);
  }
  // console.log(scene);
  return scene
}

const getUsersComing = async(current, usersLength) => {
  if (usersLength >= 150) {
    return 0
  }
  const probability = Math.random()
  let constraint = 0
  if (current < 60) {
    constraint = 0.4
  } else {
    constraint = 0.3
  }
  if (probability < constraint) {
    return Math.floor(Math.random() * 3) + 1
  }
  return 0
}

const createUser = async(n, sceneState) => {
  for (let i = 0; i < n; i++) {
    const probability = Math.random()
    let newUser = {
      name: random_name({random: Math.random, gender:'female'}),
      gender: 'female',
      currentStateId: 0,
      timeOnCurrentState: 0,
      timeSpent: 0,
      routine: await getRoutine()
    }
    if (probability > 0.5) {
      newUser.gender = 'male'
      newUser.name = random_name({random: Math.random, gender:'male'})
    }
    sceneState.users.push(newUser)
    sceneState.state[0].users.push(newUser)
  }
}

const getRoutine = async() => {
  const p = Math.random()
  if (p <= 0.2) {
    return [5, 6, 18, 25, 28, 29, 26, 19, 20, 27, 30]
  } else if (p > 0.2 && p <= 0.4) {
    return [5, 6, 17, 20, 27, 28, 29, 19, 22]
  } else if (p > 0.4 && p <= 0.6) {
    return [21, 28, 29, 5, 6, 23, 24]
  } else if (p > 0.6 && p <= 0.7) {
    return [31, 32, 33, 34]
  } else {
    return [7, 8, 9, 10, 11, 12, 13, 14, 15, 5, 6, 16]
  }
}


const updateActiveUsers = async(current, sceneState) => {
  for (let i = 0; i < sceneState.users.length; i++) {
    let user = sceneState.users[i]
    if (user.timeSpent >= 60) {
      sceneState.state[user.currentStateId].users.shift()
      sceneState.users.shift()
    } else if (user.currentStateId === 0) {
      sceneState.state[user.currentStateId].users.shift()
      let r = Math.floor(Math.random() * 4) + 1
      sceneState.users[i].currentStateId = r
      sceneState.users[i].timeOnCurrentState = 0
      sceneState.state[r].users.push(sceneState.users[i])
    } else if (user.timeOnCurrentState >= 15) {
      sceneState.state[user.currentStateId].users.shift()
      let r = Math.floor(Math.random() * (user.routine.length - 1))
      let stateId = user.routine[r]
      sceneState.users[i].currentStateId = stateId
      sceneState.users[i].timeOnCurrentState = 0
      sceneState.users[i].routine.splice(r, 1)
      sceneState.state[stateId].users.push(sceneState.users[i])
    } else {
      sceneState.users[i].timeOnCurrentState = user.timeOnCurrentState+1
    }
    sceneState.users[i].timeSpent = user.timeSpent+1
  }
}

// const removeUserFromState = async(user, sceneState) => {
//   for (let i = 0; i < sceneState.state[user.currentStateId].users.length; i++) {
//     if (user.name === sceneState.state[user.currentStateId].users[i]) {
//       sceneState.state[user.currentStateId].users.splice(i, 1)
//       return
//     }
//   }
// }

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
