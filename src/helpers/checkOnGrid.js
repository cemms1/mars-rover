export const checkOnGrid = (grid, position) => {
  const [m, n] = grid

  const { x, y } = position

  if (x < 0 || x > m || y < 0 || y > n) return false

  return true
}
