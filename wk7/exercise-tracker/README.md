# Geolocation and Persitent Data

## Getting Started
1. Clone the repo.

2. Install dependancies
```
cd CMP3035/wk7/exercise-tracker
npm install
```

## Google Cloud Platform Set Up
1. Log into [Google Cloud Platform](https://console.cloud.google.com/home/dashboard) with your existing Google account (if you have one). Otherwise create a Google account and then log in.

2. Once you log in select Create Project.

3. Name your project and select Create.

4. In the left side bar, select APIs & Services on the left side bar and select Library from the menu.

## Google Maps Android API
1. Select Maps SDK for Android

2. Press Enable and accept terms and conditions. *The next screen will ask for your card details. You DO NOT need to do this.* They have made it difficult to navigate back to the dashboard from this page without entering your card details so you might need follow this link back to [your dashboard](https://console.cloud.google.com/home/dashboard).

3. From the dashboard, go to side menu and under APIs & Services go to credentials. At the top of the page select +Create Credentials. 

## Google Maps iOS API
1. Select Maps SDK for Android

2. Press Enable and accept terms and conditions. *The next screen will ask for your card details. You DO NOT need to do this.* They have made it difficult to navigate back to the dashboard from this page without entering your card details so you might need follow this link back to [your dashboard](https://console.cloud.google.com/home/dashboard).

3. From the dashboard, go to side menu and under APIs & Services go to credentials. At the top of the page select +Create Credentials then API Key.

4. Click on the API key you've created to configure restrictions. 

5. Under set an application restriction, select iOS apps. Under API restrictions, select Restrict key. Under iOS restrictions, add the a bundle ID, something memorable but unique like com.uol.exercise42.

6. At the drop-down that says Select APIs select Maps SDK for iOS, select OK and press Save.

5. Copy your API key and paste it into your app json with your bundle ID.
```javascript
"ios": {
    "supportsTablet": true,
    "bundleIdentifier": "com.uol.exercise42",
    "config": {
        "googleMapsApiKey": "AIzaSyBpwg_YOUR_API_KEY_boQ8NJBiVEcAUs"
        }
    }
```

## Install react-maps
1. Install react-native-maps `expo install react-native-maps`


## Implement History Page
1. To start with, there won't be any routes in the history so since there's nothing there we will add a `demoRoutes` to the history. In `retrieveHistory`, if `AsyncStorage.getItem('routes')` returns `null`, use `AsyncStorage.setItem` to save demoRoutes under the key 'routes' in Async Storage and then call `retrieveHistory`. Note: since `demoRoutes` is an object you will have to use `JSON.stringfy`.

2. This next call to `retrieveHistory` should not be `null` and therefore you should be able to parse the result with `JSON.parse()` and set the resulting value as `history`.

3. Now you have the data, you can display it:
    - Add the name of the route.
    - Add the date. Convert the timestamp using `timestampToDate`.
    - Add the distance. Calculate the distance from the routes using `calculateDistance`.
    - Add the duration. Calculate the duration from the routes using `calculateTime`.

4. Provide a function to `onPress` such that pressing on a row navigates to the Map screen with the route coords as a parameter.

## Implement the Maps page
1. Set customMapStyle to mapStyle for some custom styling. You can customise this in MapStyle.json.

2. Implement a polyline using the route co-ordinates. Set the coordinates property to the coords and set a strokeColor property to a colour of your choosing.

## Implement the Tracking page
1. Implement onChangeText so that `text` is updated when the input changes.

2. Use `navigator.geolocation.watchPosition` to start monitoring position changes. Provide callbacks onGeolocation and onGeolocationError as well geolocationPositionOpts to the function.

3. Make the 'Track' button start tracking.

4. In onGeolocation, append the latest position to trackingData.

5. In stopTracking, stop monitoring by invoking `navigator.geolocation.clearWatch`, calling storeRoute, and resetting the state.

6. Use AsyncStorage.setItem to save the route in storage. Remember to use `JSON.stringfy` to convert the object to a string.

