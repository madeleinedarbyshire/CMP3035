---
layout: page
exclude: true
title: "Workshop 6: Geolocation and Persitent Data"
excerpt: "This week we look at how to use the geolocation and maps in React Native."
permalink: workshops/workshop6
---

<style type="text/css">
  img { max-height: 500px;
        border-style: solid;
        border-width: thin;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
</style>


## Getting Started
As in the previous lab, you will need node and expo. From the expo cli, you can run your app on your device or in Android simulator. Follow [this guide](https://madeleinedarbyshire.github.io/CMP3035/guides/start)  on getting started if you're unsure how to do this.

1. In this lab, we are going to start with some skeleton code. Clone the following repo to get started:
```
git clone https://github.com/madeleinedarbyshire/ReactGeolocationWorkshop.git
```

2. Install dependancies
```
cd ReactGeolocationWorkshop/exercise-tracker
npx expo install
npx expo start --tunnel
``` 

## Google Cloud Platform Set Up
1. Log into [Google Cloud Platform](https://console.cloud.google.com/home/dashboard) with your existing Google account (if you have one). Otherwise create a Google account and then log in.

2. Once you log in select Create Project.
    ![Create Project](../assets/gmaps/create_project.png)

3. Name your project and select Create.

4. Back on the dashboard, in the left side bar, select APIs & Services on the left side bar and select Library from the menu.
    ![APIs](../assets/gmaps/apis.png)

5. Now follow the instructions to enable to the Google Maps API on either [Android](https://madeleinedarbyshire.github.io/CMP3035/guides/gmapsandroid) or [iOS](https://madeleinedarbyshire.github.io/CMP3035/guides/gmapsios). Remember, for your assignments, you need to integrate with the Android API, however, if you would like your app to work on your iPhone you will can intergrate with the iOS API too.

## History Page
Once you have started the app, navigate to the history and open _screens/HistoryScreen.js_ . You will see a series of TODOs that correspond to the following instructions.

![home](../assets/workshop3/home.jpg)

![history](../assets/workshop3/history_empty.jpg)

1. At the moment, there isn't any history so in _retrieveHistory_ the _value_ returned by `await AsyncStorage.getItem("routes")` will be null. There inside the condition we are going to use demoRoutes imported from _'../components/Routes.js'_ and set routes to that. After that, we call _retrieveHistory_ again.
    ```javascript
    await AsyncStorage.setItem("routes", JSON.stringify(demoRoutes));
    retrieveHistory();
    ```

2. Now in after that call to _retrieveHistory_, _value_ will not be null, so in the else condition we need to use JSON.parse to convert the string to a javascript object and set the history. After that, we are going to add a log statement to understand the structure of this object. If this has worked, you won't see anything, you will just see a line like this.
    ```javascript
    setHistory(JSON.parse(value));
    console.log(history);
    ```

    ![history line](../assets/workshop3/history_line.jpg)

3. To list the contents of Routes we use the function Object.keys(history).map(item). Object.keys() returns a list of keys. In this case there's just one: "Lincoln". Mapping over this list we can add the name to the empty `ColumnText` of the route with:
    ```jsx
    <ColumnText>{item}</ColumnText> 
    ```

4. Now add the date. You need the first timestamp `history[item][0].timestamp` and convert it to a date using the `timestampToDate` function defined at the top of the file.

    ![history date](../assets/workshop3/history_date.jpg)

5. Next add the distance, call the imported calculateDistance function with a list of coords.
    ```jsx
    <ColumnText>{calculateDistance(history[item])}</ColumnText>
    ```
    ![history distance](../assets/workshop3/history_distance.jpg)
6. Then add the time, call the imported calculateTime finction with a list of coords.
    ```jsx
    <ColumnText>{calculateTime(history[item])}</ColumnText>
    ```
    ![history duration](../assets/workshop3/history_duration.jpg)

7. Lastly, complete the onPress so that you navigate to the map screen when the TouchButton is pressed (which corresponds to each row of the history). You will need to pass the route co-ordinates to the map screen as a parameter `{routeCoords: history[item]}`
    ![map](../assets/workshop3/map.jpg)

## Map page
1. Implement a polyline using the route co-ordinates. Set the coordinates property to the coords and set a strokeColor property to a colour of your choosing.
    ```jsx
    <Polyline
        coordinates={coords}
        strokeColor="#FFF000"
        strokeWidth={4}
        geodesic={true}
        showsMyLocationButton={false} />
    ```
    ![map](../assets/workshop3/map_line.jpg)

2. Set customMapStyle on `MapView` to add some custom styling. You can update this styling as you wish in _components/MapStyle.json_.
    ```javascript
    customMapStyle={mapStyle}
    ```
    ![map](../assets/workshop3/map_custom.jpg)

## Tracking page
Go back to the app homepage and select the Track option and open _screens/TrackScreen.js_.
![map](../assets/workshop3/tracker_home.jpg)

1. Implement the function onChangeText in the TextInput so that `text`, defined at the top using useState, is updated when the input changes.

2. In the startTracking function, get the watch id from `navigator.geolocation.watchPosition` and set watchID in the setWatchID function.
    ```javascript
    setWatchID(navigator.geolocation.watchPosition(onGeolocation, onGeolocationError));
    ```

3. Implement the `onGeolocation` function with the following. This is called each time a new position is received. We then update trackingData with the new set of co-ordinates.
    ```jsx
    const g = {timestamp: position.timestamp, 
               coords: {longitude: position.coords.longitude,
                        latitude: position.coords.latitude}};

    trackingData.push(g);
    setTrackingData(trackingData); 
    ```

4. Update the function on the 'Track' button so that is calls to the startTracking function when pressed.
    ![map](../assets/workshop3/tracker_running.jpg)

5. In StopTracking stop watching the position by calling ClearWatch:
    ```javascript
    navigator.geolocation.clearWatch(watchID);
    ```

6. In StoreRoute save the new routes object as JSON in routes:
    ```javascript
    await AsyncStorage.setItem('routes', JSON.stringify(data));
    ```

7. Once you are finished, navigate to the MapScreen with the route you've just collected as routeCoords.

8. Update the function on the 'Stop' button so that is calls to the stopTracking function when pressed.

## Test your app!

1. Go outside and walk around the building and see if you can record a route! Tips: 
    - Use the mobile network from the start because eduroam will be patchy outside. 
    - I recommend leaving the building, switching off wifi and connecting to the development server from inside the app once you're outside.

    ![map](../assets/workshop3/track_test.jpg)

