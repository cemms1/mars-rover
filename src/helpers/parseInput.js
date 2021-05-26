export const parseLocation = (location) => {
  let [x, y, direction] = location.split(', ')
  return { x: parseInt(x), y: parseInt(y), direction }
}

export const parseRobotInput = (input) => {
  const r = input.trim()
  const firstParenLoc = r.indexOf('(') + 1
  const secondParenLoc = r.indexOf(')')

  const location = r.substr(firstParenLoc, secondParenLoc - firstParenLoc)

  const instructions = r
    .replace(location, '')
    .replace('(', '')
    .replace(')', '')
    .trim()
    .split('')

  return { location, instructions }
}

export const parseGrid = (gridInput) => {
  const gridSize = gridInput.split(' ')
  return gridSize.map((x) => parseInt(x))
}
