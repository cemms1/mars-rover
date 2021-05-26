import { moveForward, turnLeft, turnRight } from './changePosition.js'
import { checkOnGrid } from './checkOnGrid.js'

export const moveRobotOnce = (instruction, position, grid) => {
  let newPosition = position
  switch (instruction) {
    case 'F':
      newPosition = moveForward(position)
      break
    case 'L':
      newPosition = turnLeft(position)
      break
    case 'R':
      newPosition = turnRight(position)
      break
  }

  if (checkOnGrid(grid, newPosition)) {
    return newPosition
  } else {
    return { ...position, lost: true }
  }
}
