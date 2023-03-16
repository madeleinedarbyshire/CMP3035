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
![Create Project](assets/create_project.png)

3. Name your project and select Create.

4. Back on the dashboard, in the left side bar, select APIs & Services on the left side bar and select Library from the menu.
![APIs](assets/apis.png)

5. Now follow the instructions to enable to the Google Maps API on either Android or iOS.

## Google Maps Android API
1. Select Maps SDK for Android

2. Press Enable and accept terms and conditions.

![TCs](assets/tcs.png)

**The next screen will ask for your card details. You DO NOT need to do this.** They have made it difficult to navigate back to the dashboard from this page without entering your card details so follow this link back to [your dashboard](https://console.cloud.google.com/home/dashboard).

![Stop Payment](assets/stoppay.png)

3. From the dashboard, go to side menu and under APIs & Services go to credentials. At the top of the page select +Create Credentials then API Key.

![Credentials](assets/creds1.png)

![Credentials](assets/creds2.png)

4. Go to the three dots on the key you've created and select Edit Key to configure restrictions. ![image](https://user-images.githubusercontent.com/22774558/225607518-66e26874-04e3-4467-9118-3bba6892ede7.png)


![Edit Key](assets/editkey.png)

5. Under set an application restriction, select Android apps. Under API restrictions, select Restrict key. At the drop-down that says Select APIs select Maps SDK for Android, select OK and press Save.

![Android Restrictions](assets/androidres.png)

6. Under Android restrictions, press add. Add your unique package name (something like "com.uol.exercise") and generate a key, following the instructions for the os you are using, and copy the result into the fingerprint.

![Android Restrictions Package Name](assets/packagename.png)

![Android Restrictions Keystore](assets/keystore.png)

5. Copy your API key and paste it into your app json with your bundle ID.![image](https://user-images.githubusercontent.com/22774558/225607127-5757bda8-6cd2-4d82-aa10-b49819da8873.png)![image](https://user-images.githubusercontent.com/22774558/225607132-78dc4a66-1d22-4cdb-a25e-7bbceaa57da8.png)


```javascript
"android": {![image](https://user-images.githubusercontent.com/22774558/225606796-db9a98bf-0d18-4186-9202-f25445f31e9d.png)

    "package": "com.uol.exercise",![image](https://user-images.githubusercontent.com/22774558/225606790-6276ddc7-4525-491f-9f7a-6eb4bd560694.png)

    "config": {"googleMaps": {"apiKey": "AIzaSyBpwg_YOUR_API_KEY_boQ8NJBiVEcAUs" }}
}
```

## Google Maps iOS API
1. Select Maps SDK for iOS from the api library. It should be near the top.

![APIs](assets/library.png)

2. Press Enable and accept terms and conditions.

![TCs](assets/tcs.png)

*The next screen will ask for your card details. You DO NOT need to do this.* They have made it difficult to navigate back to the dashboard from this page without entering your card details so follow this link back to [your dashboard](https://console.cloud.google.com/home/dashboard).

![Stop Payment](assets/stoppay.png)

3. From the dashboard, go to side menu and under APIs & Services go to credentials. At the top of the page select +Create Credentials then API Key.

![Credentials](assets/creds1.png)

![Credentials](assets/creds2.png)

4. Go to the three dots on the key you've created and select Edit Key to configure restrictions. 

![Edit Key](assets/editkey.png)

5. Under set an application restriction, select iOS apps. Under API restrictions, select Restrict key. Under iOS restrictions, add the a bundle ID, something memorable but unique like com.uol.exercise.

![iOS Restrictions](assets/iosres.png)

6. At the drop-down that says Select APIs select Maps SDK for iOS, select OK and press Save.

![iOS Restrictions](assets/iosres2.png)

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

6. Make the 'Stop' button stop tracking.

7. Use AsyncStorage.setItem to save the route in storage. Remember to use `JSON.stringfy` to convert the object to a string.

