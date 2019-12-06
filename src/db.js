export const CARDIO = 'cardio'
export const FUNCTIONAL = 'functional'
export const BICEP = 'bicep'
export const TRICEP = 'tricep'
export const CHEST = 'chest'
export const BACK = 'back'
export const SHOULDER = 'shoulder'
export const LEG = 'leg'
export const GLUTE = 'glute'
export const ABS = 'abs'

export const stateList = [
  {
    id: 0,
    name: 'Idle',
    activities: [],
    capacity: 150,
    users: []
  },
  {
    id: 1,
    name: 'Treadmill',
    activities: [CARDIO],
    capacity: 10,
    users: []
  }, {
    id: 2,
    name: 'Stairmaster',
    activities: [CARDIO],
    capacity: 2,
    users: []
  }, {
    id: 3,
    name: 'Bicycle',
    activities: [CARDIO],
    capacity: 10,
    users: []
  }, {
    id: 4,
    name: 'Elliptical Machine',
    activities: [CARDIO],
    capacity: 10,
    users: []
  }, {
    id: 5,
    name: 'Single Rack',
    activities: [BICEP, TRICEP, GLUTE, CHEST, SHOULDER],
    capacity: 2,
    users: []
  }, {
    id: 6,
    name: 'Double Rack',
    activities: [BICEP, TRICEP, GLUTE, CHEST, SHOULDER],
    capacity: 12,
    users: []
  }, {
    id: 7,
    name: 'Abductor',
    activities: [LEG, GLUTE],
    capacity: 1,
    users: []
  }, {
    id: 8,
    name: 'Adductor',
    activities: [LEG, GLUTE],
    capacity: 1,
    users: []
  }, {
    id: 9,
    name: 'Smith Machine B.',
    activities: [LEG, GLUTE],
    capacity: 2,
    users: []
  }, {
    id: 10,
    name: 'Static Leg Press',
    activities: [LEG, GLUTE],
    capacity: 2,
    users: []
  }, {
    id: 11,
    name: 'Free Weight Leg Press',
    activities: [LEG, GLUTE],
    capacity: 1,
    users: []
  }, {
    id: 12,
    name: 'Femoral curl',
    activities: [LEG, GLUTE],
    capacity: 2,
    users: []
  }, {
    id: 13,
    name: 'Femoral Extension',
    activities: [LEG, GLUTE],
    capacity: 11,
    users: []
  }, {
    id: 14,
    name: 'Leg Extension',
    activities: [LEG, GLUTE],
    capacity: 3,
    users: []
  }, {
    id: 15,
    name: 'Calf Raise',
    activities: [LEG, GLUTE],
    capacity: 2,
    users: []
  }, {
    id: 16,
    name: 'Glute Machine',
    activities: [GLUTE],
    capacity: 1,
    users: []
  }, {
    id: 17,
    name: 'Tricep Curl',
    activities: [TRICEP],
    capacity: 2,
    users: []
  }, {
    id: 18,
    name: 'Bicep Curl',
    activities: [BICEP],
    capacity: 2,
    users: []
  }, {
    id: 19,
    name: 'Pec-Fly',
    activities: [CHEST, BACK],
    capacity: 1,
    users: []
  }, {
    id: 20,
    name: 'Chest Machine',
    activities: [CHEST],
    capacity: 3,
    users: []
  }, {
    id: 21,
    name: 'Shoulder Machine',
    activities: [SHOULDER],
    capacity: 4,
    users: []
  }, {
    id: 22,
    name: 'Back Machine',
    activities: [BACK],
    capacity: 2,
    users: []
  }, {
    id: 23,
    name: 'Bosu',
    activities: [ABS],
    capacity: 2,
    users: []
  }, {
    id: 24,
    name: 'Abs Machine',
    activities: [ABS],
    capacity: 4,
    users: []
  }, {
    id: 25,
    name: 'Preacher Curl',
    activities: [BICEP],
    capacity: 1,
    users: []
  }, {
    id: 26,
    name: 'Adjustable Bench',
    activities: [CHEST],
    capacity: 4,
    users: []
  }, {
    id: 27,
    name: 'Long Fixed Bench',
    activities: [CHEST, BACK, TRICEP],
    capacity: 2,
    users: []
  }, {
    id: 28,
    name: 'Short Fixed Bench',
    activities: [SHOULDER, BICEP, TRICEP],
    capacity: 2,
    users: []
  }, {
    id: 29,
    name: 'Short Fixed Bench B.',
    activities: [SHOULDER, BICEP, TRICEP],
    capacity: 2,
    users: []
  }, {
    id: 30,
    name: 'Fixed Chest Bench',
    activities: [CHEST],
    capacity: 3,
    users: []
  }, {
    id: 31,
    name: 'Weight Ball',
    activities: [FUNCTIONAL],
    capacity: 5,
    users: []
  }, {
    id: 32,
    name: 'Floor Mat',
    activities: [FUNCTIONAL],
    capacity: 5,
    users: []
  }, {
    id: 33,
    name: 'String Set',
    activities: [FUNCTIONAL],
    capacity: 1,
    users: []
  }, {
    id: 34,
    name: 'Agility Latter',
    activities: [FUNCTIONAL],
    capacity: 2,
    users: []
  }
]
