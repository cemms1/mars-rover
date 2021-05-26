export const moveForward = (position) => {
  const { direction } = position
  switch (direction) {
    case 'N':
      return { ...position, y: position.y + 1 }
    case 'E':
      return { ...position, x: position.x + 1 }
    case 'S':
      return { ...position, y: position.y - 1 }
    case 'W':
      return { ...position, x: position.x - 1 }
  }
}

export const turnLeft = (position) => {
  const { direction } = position
  switch (direction) {
    case 'N':
      return { ...position, direction: 'W' }
    case 'E':
      return { ...position, direction: 'N' }
    case 'S':
      return { ...position, direction: 'E' }
    case 'W':
      return { ...position, direction: 'S' }
  }
}

export const turnRight = (position) => {
  const { direction } = position
  switch (direction) {
    case 'N':
      return { ...position, direction: 'E' }
    case 'E':
      return { ...position, direction: 'S' }
    case 'S':
      return { ...position, direction: 'W' }
    case 'W':
      return { ...position, direction: 'N' }
  }
}
