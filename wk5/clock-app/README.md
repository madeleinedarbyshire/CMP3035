# Clock App

## Getting Started

Clone the repo

## Implement Stopwatch
In Stopwatch.js, you'll see that there's some functionality missing.

1. First, change the clock face so that it shows the time formatted as `<minutes>:<seconds>.<centiseconds>` derived from centiseconds. 
    - Hint 1: there 100 centiseconds in a second.
    - Hint 2: you will need to use the modulo function `%` and the floor function `Math.floor` (there's no need to import `Math`).

2. Add functionality to the reset button. This should stop the stopwatch (if it's running) and set it back to 0.

3. Add functionality to the start/stop button. This should stop the stopwatch if it's running and start it if it's stopped.

## Implement Timer
In TimerInput.js, you'll see that there's some functionality missing.

1. Make sure the values update when values are changed in the `Input` function

2. Add functionality to the reset button. This reset all values in the inputs back to 0.

3. Add functionality to the start button. It should navigate to the Timer screen.

In Timer.js, you'll see that there's some functionality missing.

1. Format timer time as `<hours>:<minutes>:<seconds>` .

2. Add functionality to the reset button. Reset should navigate the user back to the `TimerInput` page.

3. Add functionality to the start/pause button. This should interrupt or resume timing.
