import React from 'react'
import { Tag } from 'antd'

const ActivityTag = (props) => {
  const { activity } = props
  let color = ''
  switch (activity) {
    case 'cardio':
      color = 'magenta'
      break
    case 'functional':
      color = 'purple'
      break
    case 'bicep':
      color = 'volcano'
      break
    case 'tricep':
      color = 'orange'
      break
    case 'chest':
      color = 'gold'
      break
    case 'back':
      color = 'lime'
      break
    case 'shoulder':
      color = 'green'
      break
    case 'leg':
      color = 'cyan'
      break
    case 'glute':
      color = 'blue'
      break
    case 'abs':
      color = 'geekblue'
      break
    default:
      break
  }
  return <Tag color={color}>{activity}</Tag>
}

export default ActivityTag
