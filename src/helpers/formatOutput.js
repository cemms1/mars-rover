export const formatOutput = (position) => {
  const { x, y, direction, lost } = position
  return `(${x}, ${y}, ${direction}) ${lost ? 'LOST' : ''}`.trim()
}
