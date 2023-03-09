# Clock App

## Prerequistes

### Node
1. Check if node is installed on your machine with `node -v`
2. Install node:
    - On windows: https://nodejs.org/en/
    - On mac: `brew install node`

### Expo
1. If you haven't already, sign up for an expo.io account https://expo.io/signup, confirm your details and log in.
2. If you haven't already, get the Expo client app on your phone. Download the client for:
	- [iOS](https://apps.apple.com/us/app/expo-go/id982107779)
	- [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_GB&gl=US&pli=1)
3. Log in to the Expo client app 
4. Install Expo CLI
    ```
    npm install expo
    ```
5. Verify that the installation was successful using `npx expo whoami`

![](/images/expo_whoami.png)

6. Login with the credentials you created
    ``` 
    npx expo login -u your-username -p your-password
    ```

### ngrok
1. Install the Expo ngrok plugin `npm install @expo/ngrok`

2. Install ngrok
    - Download Windows version from here: [ngrok.com/download](https://ngrok.com/download)
    - On Mac: `brew install ngrok`

## Getting Started

1. Download/clone this repo

2. Navigate to this directory and install dependencies

```
cd CMP3035/wk5/clock-app
npm install
```

3. Start app: `npx expo start --tunnel`


## Implement Stopwatch
In Stopwatch.js, you'll see that there's some functionality missing.

1. First, change the clock face so that it shows the time formatted as `<minutes>:<seconds>.<centiseconds>` derived from `centisecs`. 
    - Hint 1: there are 100 centiseconds in a second.
    - Hint 2: you will need to use the modulo function `%` and the floor function `Math.floor` (there's no need to import `Math`).
    - Hint 3: to test you've got the maths right, try setting the initial state to `const [centisecs, setCentisecs] = useState(8015);` and your clockface should show `1:20.15`.

2. Add functionality to the start/stop button. This should stop the stopwatch if it's running and start it if it's stopped. It should also set the startTime.
    - Hint 1: set the `onPress` property to a function that sets `isCounting` and `startTime` to the right values using the setter functions `setStartStop` and `setStartTime` respectively.
    - Hint 2: `startTime` should be set to `Date.now()` (there's no need to import Date) which gives the current time in milliseconds.
    - Hint 3: You should be able to get some inspiration for how to do this by looking at the implementation of the reset button.

3. Define the function passed to useEffect to update the time.
    - Naive approach: the naive approach here is to set `centisecs` to `centisecs + 1` after each timeout. Try this out and compare your results to Google's stopwatch - you'll notice some drift (i.e. you're stopwatch will be slower) after a few seconds.
    - More robust approach: set `centisecs` to be the current time minus the start time in centiseconds after each timeout `Math.floor((Date.now() - startTime) / 10)` . This is less prone to drift.

## Implement Timer
In TimerInput.js, you'll see that there's some functionality missing.

1. Make sure the values update when values are changed in the `Input` function. 

2. Add functionality to the reset button. This reset all values in the inputs back to 0.

3. Add functionality to the start button. It should navigate to the Timer screen.
    - Hint: use the navtigate function from props.navigation defined at the top of the TimerInput function.

In Timer.js, you'll see that there's some functionality missing.

1. Format timer time as `<hours>:<minutes>:<seconds>` .

2. Add functionality to the reset button. Reset should navigate the user back to the `TimerInput` page.

3. Add functionality to the start/pause button. This should interrupt or resume timing.
