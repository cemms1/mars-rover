# Mars Rover Technical Test

A program that takes in commands and moves one or more robots around Mars.

- The world is movelled as a grid with size `m x n`
- The program reads the input, updates the robots and prints out the final states of the robots
- Each robot has a position (`x, y`) and an orientation (`N, E, S, W`)
- Each robot can move forward one space (`F`), rotate left 90 degrees (`L`) or rotate right 90 degrees (`R`)
- If a robot is off the grid, it is marked as `LOST` with its last valid grid position and orientation recorded
- Going from x -> x + 1 is in the easterly direction, and y -> y + 1 is in the northerly direction. i.e. (0, 0) represents the south-west corner of the grid

The input takes the form:

- 4 8
- (2, 3, E) LFRFF
- (0, 2, N) FFLFRFF

Where the first parameter is the grid size, the second is the initial state and moving commands of the first robot and the third parameter is the same for the second robot.
Any further input params would represent more robots on the grid.

The output takes the form:

- (4, 4, E)
- (0, 4, W) LOST

which represent the final position of the robot after executing the commands from the input and optionally whether the robot was lost.

Visually:

Initial state:

```txt
  . . . .
  . . . .
  . . . .
  . . . .
  . . . .
  . . . .
  . > . .
  ^ . . .
  . . . .
```

Resulting state:

```txt
  . . . .
  . . . .
  . . . .
  . . . .
  . . . .
  < . . >
  . . . .
  . . . .
  . . . .
```
