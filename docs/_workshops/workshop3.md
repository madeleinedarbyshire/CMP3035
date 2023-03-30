---
layout: page
exclude: true
title: "Workshop 7: Geolocation and Persitent Data"
excerpt: "This week we look at how to use the geolocation and maps in React Native."
permalink: workshops/workshop7
---

## Google Cloud Platform Set Up
1. Log into [Google Cloud Platform](https://console.cloud.google.com/home/dashboard) with your existing Google account (if you have one). Otherwise create a Google account and then log in.

2. Once you log in select Create Project.
![Create Project](../assets/gmaps/create_project.png)

3. Name your project and select Create.

4. Back on the dashboard, in the left side bar, select APIs & Services on the left side bar and select Library from the menu.
![APIs](../assets/gmaps/apis.png)

5. Now follow the instructions to enable to the Google Maps API on either Android or iOS.

## Google Maps Android API
1. Select Maps SDK for Android

2. Press Enable and accept terms and conditions.

![TCs](../assets/gmaps/tcs.png)

**The next screen will ask for your card details. You DO NOT need to do this.** They have made it difficult to navigate back to the dashboard from this page without entering your card details so follow this link back to [your dashboard](https://console.cloud.google.com/home/dashboard).

![Stop Payment](../assets/gmaps/stoppay.png)

3. From the dashboard, go to side menu and under APIs & Services go to credentials. At the top of the page select +Create Credentials then API Key.

![Credentials](../assets/gmaps/creds1.png)

![Credentials](../assets/gmaps/creds2.png)

4. Go to the three dots on the key you've created and select Edit Key to configure restrictions. 

![Edit Key](../assets/gmaps/editkey.png)

5. Under set an application restriction, select Android apps. Under API restrictions, select Restrict key. At the drop-down that says Select APIs select Maps SDK for Android, select OK and press Save.

![Android Restrictions](../assets/gmaps/androidres.png)

6. (OPTIONAL: *you need to have a bunch of config that comes with android studio to make this work, if you are not on a lab machine and don't have this installed on your machine, don't worry about it for today*) Under Android restrictions, press add. 

    6.1 Add your unique package name (something like "com.uol.exercise")
    6.2 Generate a key with the follow command
    ```
    keytool -list -v -keystore "%USERPROFILE%\.android\debug.keystore" -alias androiddebugkey -storepass android -keypass android
    ```
    6.3 Copy the result into the fingerprint.

    *Caveat 1: if you're not using lab machines, you might need to install Android studio to get all the configuration you need to run this. If you can't get this to work on your machine, don't worry about it for today.*
    *Caveat 2: if you're using a lab machine, remember the fingerprint is unique to the Computing user so you'll need to change the restriction for it to work on other machines*

![Android Restrictions Package Name](../assets/gmaps/packagename.png)

![Android Restrictions Keystore](../assets/gmaps/keystore.png)

6. Copy your API key and paste it into your app json with your bundle ID.

```javascript
"android": {
    "package": "com.uol.exercise",
    "config": {"googleMaps": {"apiKey": "AIzaSyBpwg_YOUR_API_KEY_boQ8NJBiVEcAUs" }}
}
```

## Google Maps iOS API
1. Select Maps SDK for iOS from the api library. It should be near the top.

![APIs](../assets/gmaps/library.png)

2. Press Enable and accept terms and conditions.

![TCs](../assets/gmaps/tcs.png)

*The next screen will ask for your card details. You DO NOT need to do this.* They have made it difficult to navigate back to the dashboard from this page without entering your card details so follow this link back to [your dashboard](https://console.cloud.google.com/home/dashboard).

![Stop Payment](../assets/gmaps/stoppay.png)

3. From the dashboard, go to side menu and under APIs & Services go to credentials. At the top of the page select +Create Credentials then API Key.

![Credentials](../assets/gmaps/creds1.png)

![Credentials](../assets/gmaps/creds2.png)

4. Go to the three dots on the key you've created and select Edit Key to configure restrictions. 

![Edit Key](../assets/gmaps/editkey.png)

5. Under set an application restriction, select iOS apps. Under API restrictions, select Restrict key. Under iOS restrictions, add the a bundle ID, something memorable but unique like com.uol.exercise.

![iOS Restrictions](../assets/gmaps/iosres.png)

6. At the drop-down that says Select APIs select Maps SDK for iOS, select OK and press Save.

![iOS Restrictions](../assets/gmaps/iosres2.png)

5. Copy your API key and paste it into your app json with your bundle ID.
```javascript
"ios": {
    "supportsTablet": true,
    "bundleIdentifier": "com.uol.exercise",
    "config": {
        "googleMapsApiKey": "AIzaSyBpwg_YOUR_API_KEY_boQ8NJBiVEcAUs"
        }
    }
```

## Getting Started
1. Clone the repo.

2. Install dependancies
```
cd CMP3035/wk7/exercise-tracker
npm install
npx expo start --tunnel
```

## Implement History Page
1. To start with, there won't be any routes in the history so since there's nothing there we will add a `demoRoutes` to the history. In `retrieveHistory`, if `AsyncStorage.getItem('routes')` returns `null`, use `AsyncStorage.setItem` to save demoRoutes under the key 'routes' in Async Storage and then call `retrieveHistory`. Note: since `demoRoutes` is an object you will have to use `JSON.stringfy`.

2. This next call to `retrieveHistory` should not be `null` and therefore you should be able to parse the result with `JSON.parse()` and set the resulting value as `history`.

3. history has the structure 
```
{'Lincoln' : [{'coords': {'latitude': 1, 'longitude': 1}, 'timestamp': 10} }, {'coords': {'latitude': 1, 'longitude': 1}, 'timestamp': 10} }, ....]
```
3. Now you have the data, you can display it:
    - Add the name of the route.
    - Add the date. Convert the timestamp using `timestampToDate` which takes a timestamp.
    - Add the distance. Calculate the distance from the routes using `calculateDistance` which takes a list of objects like `{'coords': {'latitude': 1, 'longitude': 1}, 'timestamp': 10}`.
    - Add the duration. Calculate the duration from the routes using `calculateTime` which takes a list of objects like `{'coords': {'latitude': 1, 'longitude': 1}, 'timestamp': 10}`..

4. Provide a function to `onPress` such that pressing on a row navigates to the Map screen with the route coords as a parameter.

## Implement the Maps page
1. Set customMapStyle to mapStyle for some custom styling. You can customise this in MapStyle.json.

2. Implement a polyline using the route co-ordinates. Set the coordinates property to the coords and set a strokeColor property to a colour of your choosing.

## Implement the Tracking page
1. Implement onChangeText so that `text` is updated when the input changes.

2. Get watch id from `navigator.geolocation.watchPosition` and set the watchID in the setWatchID function.

3. Make the 'Track' button start tracking.

4. Make the 'Stop' button stop tracking.

5. Use AsyncStorage.setItem to save the route in storage. Remember to use `JSON.stringfy` to convert the object to a string.


