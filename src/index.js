import {
  parseGrid,
  parseRobotInput,
  parseLocation,
  checkOnGrid,
  moveRobotOnce,
  formatOutput,
} from './helpers/index.js'

export default (grid, ...robots) => {
  // Log input
  console.log('========== Inputs ==========')
  console.log('Grid:', grid)
  robots.forEach((robot, index) => console.log(`Robot${index + 1}:`, robot))
  console.log('============================\n\n')

  // Validate input (not needed if done using Typescript)
  if (typeof grid !== 'string' || robots.some((bot) => typeof bot !== 'string'))
    throw Error('Input params must be strings')

  // Parse inputs
  const gridArray = parseGrid(grid)

  let finalPostions = []

  robots.forEach((robot) => {
    const { location, instructions } = parseRobotInput(robot)
    const initialPosition = parseLocation(location)

    // If x, y not on grid, throw error
    if (!checkOnGrid(gridArray, initialPosition))
      throw Error('Initial robot location not on grid')

    const reducer = (position, command) => {
      const { lost } = position
      return lost ? position : moveRobotOnce(command, position, gridArray)
    }

    const finalPosition = instructions.reduce(reducer, initialPosition)
    finalPostions.push(formatOutput(finalPosition))
  })

  return finalPostions
}
