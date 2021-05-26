import marsRover from './src/index.js'

const grid = '4 8'
const robots = ['(2, 3, N) FLLFR', '(1, 0, S) FFRLF']

const args = [grid, ...robots]

const results = marsRover(...args)

console.log('Final positions:', results)
