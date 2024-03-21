---
layout: page
exclude: true
title: "Workshop 7: Build a Photobooth app from Scratch"
excerpt: "This week we look at how to use the camera with a photobooth app"
permalink: workshops/workshop7
---

## Create app template
1. Create an app using Expo.
```
npx create-expo-app
```

2. Name your app something like photobooth.

3. Install Expo.
```
cd <your-app>
npm install @expo/ngrok@^4.1.0
```

4. Start your app! `npx expo start --tunnel`

## Add Navigation
1. Create a new folder in the root of your app called 'screens'
```
mkdir screens
```

2. Make two new .js files under screens called CameraScreen.js and GalleryScreen.js.

3. Copy the contents of App.js into CameraScreen.js and GalleryScreen.js but in each change `export default function App()` to `export default function CameraScreen()` and `export default function GalleryScreen()` respectively and change the `<Text>` component to say "Camera page" and "Gallery page". For example, the CameraScreen page will look like:
  ```jsx
    import {Text, View, StyleSheet} from 'react-native'

    export default function CameraScreen() {
      return (
        <View style={styles.container}>
          <Text>Camera page</Text>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }
    });
  ```

4. Install [@react-navigation/native](https://reactnavigation.org/docs/getting-started/), [@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/) and the dependencies: react-native-gesture-handler and react-native-reanimated.
  ```
  npx expo install react-native-gesture-handler @react-navigation/native @react-navigation/bottom-tabs react-native-gesture-handler react-native-reanimated
  ```

5. Now delete the contents of App.js.

6. Import the libraries you just installed into App.js:
```javascript
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
```

7. Import the screens you created into App.js:
```javascript
import CameraScreen from './screens/CameraScreen';
import GalleryScreen from './screens/GalleryScreen';
```

8. Define the following function:
```jsx
export default function App() {
    return (
      <NavigationContainer>
          {/* All your navigation will go in here. */}
      </NavigationContainer> 
    );
}
```

9. Start by creating some bottom tabs. At the top of the App() function define the following.
  ```jsx
  const Tab = createBottomTabNavigator();
  ```

10. You can define all your `Tab.Screen` components inside the `Tab.Navigator` which will go inside the `NavigationContainer`. Adding you CameraScreen Page to the bottom nav looks like this.
```jsx
export default function App() {
      return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Camera" component={CameraScreen}/>
          </Tab.Navigator>
        </NavigationContainer> 
      );
}
```

11. Now add another `Tab.Screen` component so that your GalleryScreen page is available from the bottom tab navigator. Check your tabs are working by making sure the text changes when you change tabs.

## Render the Camera
1. Install the [expo-camera](https://docs.expo.dev/versions/latest/sdk/camera/) library:
```
npx expo install expo-camera
```

2. Import the libraries you've just installed into CameraScreen.js as well as the `useState` and `useEffect` hooks:
```javascript
import { useState, useEffect } from 'react';
import { Camera, CameraType } from "expo-camera";
import * as FileSystem from "expo-file-system"; 
``` 

3. In CameraScreen.js, we first need to ask for permission to use the camera. At the top of the CameraScreen function we are going to use the [Camera.useCameraPermissions()](https://docs.expo.dev/versions/latest/sdk/camera/#usecamerapermissionsoptions) hook. 
  ```javascript
  const [status , requestPermission] = Camera.useCameraPermissions();
  ```

4. Inside the Camera component, define a new async function called `requestCameraPermissions()`. 
  - If `status` is `null` it should call the asynchronous function `requestPermission()`.
  - Else if `status.granted == false` if should create an alert telling the user permission to use the camera has been denied.
      ```javascript
        const requestCameraPermissions = async () => {
          if (status == null) {
            await requestPermission();
          }
          else if (status.granted == false) {
            alert('Camera permissions denied');
          }
        }
      ```

5. Call `requestCameraPermissions` in useEffect
```jsx
useEffect(() => requestCameraPermissions())
```

6. Render the Camera at the bottom of the cameraScreen function.
```jsx
return (
    <View style={% raw %}{{flex : 1}}{% endraw %}>
      <Camera ratio="16:9" style={% raw %}{{flex : 1}}{% endraw %}/>
    </View>
);
```

7. Flip the Camera by setting the `type` property to `CameraType.front`.

8. For some of you, you might notice that navigating between the camera screen and the gallery screen and back again means the camera preview doesn't re-render, this is because your camera needs to be unmounted when you navigate away. The easiest fix for this is to just make sure the camera only renders when the screen is in focus. For this we will use the [useIsFocused](https://reactnavigation.org/docs/use-is-focused/) hook from react navigation.
  - Import it into CameraScreen.js
    ```javascript
    import { useIsFocused } from '@react-navigation/native';
    ```
  - Call it at the top of the CameraScreen function
    ```javascript
    const isFocused = useIsFocused();
    ```
  - Only return Camera component is page is focused
      ```jsx
        if (isFocused) {
          return (
          <View style={% raw %}{{flex : 1}}{% endraw %}>
            <Camera ratio="16:9" style={% raw %}{{flex : 1}}{% endraw %}/>
          </View>
          );  
        }
        else {
          return <View/>
        }
      ```

## Take a Picture
1. Install the [expo-file-system](https://docs.expo.dev/versions/latest/sdk/filesystem/) library with `npx expo install expo-file-system`.

2. At the top of the CameraScreen.js file, add a global variable called `PHOTOS_DIR`.
```javascript
const PHOTOS_DIR = FileSystem.documentDirectory + "CPD_Photos";
```

3. Import Filesystem from expo-file-system.
```javascript
import * as FileSystem from "expo-file-system";
```

4. Create a new async function `ensureDirExists` to check if a directory exists, and if not, create it. 
  - Use the [FileSystem.getInfoAsync](https://docs.expo.dev/versions/latest/sdk/filesystem/#filesystemgetinfoasyncfileuri-options) function call to get information about `PHOTOS_DIR`. 
  - From the information returned by `getInfoAsync` (check the docs), you will be able to check whether the directory exists. If the `PHOTOS_DIR` directory doesn't exist, make it with [FileSystem.makeDirectoryAsync](https://docs.expo.dev/versions/latest/sdk/filesystem/#filesystemmakedirectoryasyncfileuri-options).
    ```javascript
        const ensureDirExists = async () => {
          const dirInfo = await FileSystem.getInfoAsync(VIDEOS_DIR);

          if (!dirInfo.exists) {
            console.log("Photos directory doesn't exist, creating...");
            await FileSystem.makeDirectoryAsync(VIDEOS_DIR);
          }
        };
    ```


5. Update UseEffect() so your `ensureDirExists` function is called when the function renders:
```javascript
useEffect(() => {
  requestCameraPermissions();
  ensureDirExists();
})
```

6. Add the `ref` property to the `Camera` component. 
  - You will need to import `useRef` from `'react'` and define a cameraRef at the top of the function:
  ```javascript
  import { useState, useEffect, useRef } from 'react';
  ```
  - Call useRef to create the cameraRef
  ```javascript
  const cameraRef = useRef({});
  ```
  - Set the ref property on the `Camera` component as `cameraRef`:
      ```jsx
        <Camera ratio="16:9" style={% raw %}{{flex : 1}}{% endraw %} ref={cameraRef}/>
      ```

7. Add a `Button` component underneath the `Camera` component that calls a `takePicture` function `onPress`. Remember you will have to import the `Button` component from `'react-native'` 
```jsx
return (
    <View style={% raw %}{{flex : 1}}{% endraw %}>
      <Camera ratio="16:9" style={% raw %}{{flex : 1}}{% endraw %} ref={cameraRef} type={CameraType.front}/>
      <Button title="Capture Photo" onPress={takePicture}/>
    </View>
);
```

8. Implement an async `takePicture` function. 
  - Call [takePictureAsync](https://docs.expo.dev/versions/v48.0.0/sdk/camera/#takepictureasyncoptions) to take a photo. It returns an object with the photo's uri. Remember you should refer to the camera object as `cameraRef.current`.
  - Save the photo in the `PHOTOS_DIR`. Since `takePictureAsync` returns an object with a `uri` attribute, you can save the photo to `PHOTOS_DIR` by moving the photo from this uri, to a uri within `PHOTOS_DIR`. Call [moveAsync](https://docs.expo.dev/versions/latest/sdk/filesystem/#filesystemmoveasyncoptions) with an object that has `from` and `to` attributes. I recommend naming the images by the time they were taken so your saveURI should be something like:
    ```javascript
        const takePicture = async () => {
          try{
            saveURI = `${PHOTOS_DIR}/cpd_${Date.now()}.jpg`
            photoObj = await cameraRef.current.takePictureAsync();
            result = await FileSystem.moveAsync({from: photoObj.uri, to: saveURI});
          }
          catch (e) {
            console.log(e)
          }
        };
    ```

## Implement a PhotoScreen Page to view your photo
1. Create a new file PhotoScreen.js file and add the following
  ```jsx
    import {Image} from 'react-native';

    export default function PhotoScreen() {
        return (
            <Image />
        );
    }
  ```

2. Install the stack navigator:
```
npx expo install @react-navigation/stack
```

3. In App.js, import the stack navigator:
```javascript
import { createStackNavigator } from '@react-navigation/stack';
```

4. In App.js, import your the PhotoScreen page:
```javascript
import PhotoScreen from './screens/PhotoScreen';
```

5. Define a stack navigator for the Camera page in App.js.  Since we want to navigate to the PhotoScreen after taking a Photo in the CameraScreen, define Camera above Photo.
```jsx
const CameraStack = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
          <Stack.Screen name="Camera" component={CameraScreen}></Stack.Screen>
          <Stack.Screen name="Photo" component={PhotoScreen}></Stack.Screen>
      </Stack.Navigator>
  );
}
```

6. Inside your App.js function replace the `Tab.Screen` for `CameraScreen` with a `Tab.Screen` for the `CameraStack`:
```jsx
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Camera" component={CameraScreen} /> */}
        <Tab.Screen name="CameraStack" component={CameraStack}/>
        <Tab.Screen name="Gallery" component={GalleryScreen} />
      </Tab.Navigator>
    </NavigationContainer> 
  );
};
```

8. The name the tab will now be CameraStack but we want this to still say Camera so set the options property in the `Tab.Screen` for `CameraStack` with the following:
```jsx
options={% raw %}{{tabBarLabel: "Camera"}}{% endraw %}
```

9. You will see multiple headers now. Both CameraStack and Camera, but we only want the header from the Stack Navigator (i.e. Camera). To remove the CameraStack header set the following in the `Tab.Navigator` component.
  ```jsx
    <Tab.Navigator screenOptions={% raw %}{{headerShown: false}}{% endraw %}>
  ```

10. In CameraScreen.js, inside takePicture(), after you've saved the image in PHOTOS_DIR navigate to the Photo page we've just created.
  ```jsx
  props.navigation.navigate("Photo", {uri: saveURI})
  ```

11. In PhotoScreen.js, update your `Image` component so that `source` property is `props.route.params.uri`.
    ```jsx
    <Image source={% raw %}{{'uri': props.route.params.uri}}{% endraw %} style={% raw %}{{flex: 1}}{% endraw %}/>
    ```

You should now see your photo!

## Share your photo
1. In the lecture, I discussed the [React Native Share API](https://reactnative.dev/docs/share) but this doesn't appear to support file sharing on android so instead we are going to use the [Expo Sharing API](https://docs.expo.dev/versions/latest/sdk/sharing). Install it with the following command:
```
npx expo install expo-sharing
```

2. Import the Sharing libary
```js
import * as Sharing from 'expo-sharing';
```

3. Add a `Button` underneath `Image` and wrap both components in a `View`. You will need to set `style={% raw %}{{flex: 1}}{% endraw %}` on the `View` component. Remember to import the View and `Button` components.
  ```jsx
    <Button title="Share" onPress={onShare}/>
  ```

4. Define an `onShare` button and use the function [Sharing.shareAsync](https://docs.expo.dev/versions/latest/sdk/sharing/#sharingshareasyncurl-options) to share your image.
  ```javascript
  const onShare = async () => {
    Sharing.shareAsync(props.route.params.uri)
  }
  ```

Test by sharing your image with a friend!

## Saving the Photo to the Camera Roll
1. Install the media library:
```
npx expo install expo-media-library
```

2. Define an async function called onSave.
  - Request permissions using [MediaLibrary.requestPermissionsAsync](https://docs.expo.dev/versions/latest/sdk/media-library/#medialibraryrequestpermissionsasyncwriteonly). You only need writeOnly permissions.
  - From MediaLibrary.requestPermissionsAsync, you will get an object with a `status` attribute and if `status === 'granted'`, write the photo to the camera roll using [MediaLibrary.createAssetAsync](https://docs.expo.dev/versions/latest/sdk/media-library/#medialibrarycreateassetasynclocaluri)
      ```javascript
        const onSave = async () => {
          console.log(status)
          if (status.granted == true) {
            await MediaLibrary.createAssetAsync(props.route.params.uri);
            alert('Picture Added to Camera Roll')
          }
          else {
            await requestPermission();
            onSave();
          }
        }
      ```

Check your camera roll for your image.

## Implement the Gallery page
1. Import Filesystem and define `PHOTOS_DIR` as the same directory you used in Camera at the top of GalleryScreen.js

2. Import useState and define photos and setPhotos at the top of the GalleryScreen function.
```javascript
const [photo, setPhotos] = useState([])
```

3. Define a new async function `retrievePhotos` and get the contents of `PHOTOS_DIR` and display them in your gallery.
  - Use the function [FileSystem.readDirectoryAsync](https://docs.expo.dev/versions/latest/sdk/filesystem/#filesystemreaddirectoryasyncfileuri) to get the contents of `PHOTOS_DIR`.
  - Use `setPhotos` to update `photos` with the response.
      ```javascript
        const retrievePhotos = async () => { 
          try {
            const currPhotos = await FileSystem.readDirectoryAsync(PHOTOS_DIR); 
            setPhotos(currPhotos)
          } catch (error) {
            console.log('Error retrieving photos');
          }
        };
      ```

4. Call `retrievePhotos` in useEffect so that `retrievePhotos` is called when the page loads.
  ```javascript
    useEffect(() => {
      retrievePhotos();
    })
  ```

5. Define a new function called `Row` that takes a property called photos. Remember to get the source uri of the photo you need to append `PHOTO_DIR` to the photo name like this `PHOTOS_DIR + '/' + photo`
  ```jsx
    const Row = ({ dir, photos }) => {
      return(
        <View style={styles.row}>
        {photos.map((photo) => (
            <View style={styles.imageContainer} key={photo}>
              <Image source={% raw %}{{'uri': `${dir}/${photo}`}}{% endraw %} style={styles.image} />
            </View>
          ))}
        </View>
      );
    } 
  ```

6. Define some basic styling for these components:
    ```jsx
    const styles = StyleSheet.create({
      container: {
        height: '100%'
      },
      row: {
        flexDirection: 'row', 
        flex: 1
      },
      imageContainer: {
        width: '33%'
      },
      image: {
        height: 170
      }
    });
    ```

7. Test your row component by returning it from the gallery component. Here we are using the slice finction to give the first three images in our gallery to the Row component:
  ```jsx
    <View style={styles.container}>
      <Row photos={photos.slice(0, 3)} dir={PHOTOS_DIR}/>
    </View>
  ```

8. In GalleryScreen, make a gallery array with each row like this
  ```jsx
  const gallery = [];
  const rowWidth = 3;
  for (let i = 0; i < (photos.length / rowWidth) + 1; i++) {
    gallery.push(<Row photos={photos.slice(i*rowWidth, i*rowWidth+rowWidth)} key={i}></Row>)
  }
  ```

8. Render the gallery at the bottom of the GalleryScreen function:
  ```jsx
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={% raw %}{{flexGrow: 1}}{% endraw %}>
          {gallery}
        </ScrollView>
      </SafeAreaView>
    );
  ```

9. To enable navigation from the gallery page to the photo page, in App.js create a Stack Navigator component called `GalleryStack` with `GalleryScreen` at the top, then `PhotoScreen`. Replace the `Tap.Screen` that calls to `GalleryScreen` with a `Tab.Screen` that calls to `GalleryStack`.

10. Update the tabBarLabel so that it says "Gallery"

11. Wrap the Image component in [TouchableOpacity](https://reactnative.dev/docs/touchableopacity) and give the property `onPress` on TouchableOpacity a function that navigates to the Photo page.

You've done it! You've made a Camera app from scratch.

## Extension 1: Style Buttons and Tab Bar
Style the app as you like.

1. Styling the button component in React Native can be a bit limited so instead you might perfer to create a custom component and wrap it in a [TouchableOpacity](https://reactnative.dev/docs/touchableopacity). See an example in the clock-app/components/buttons.js.

2. You can change the icons shown on the TabBar:
  - Install [expo-vector-icons](https://www.npmjs.com/package/@expo/vector-icons) and import `MaterialCommunityIcons`, `FontAwesome` or another icon library
  - Choose your prefer icons from [here](https://icons.expo.fyi/)
  - Update the `options` property with a function to 

  ```jsx
  tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name="camera" size={24} color="black" />
  )
  ```

## Extension 2: Implement the Smile Detector
Use the [Expo Face Detector](https://docs.expo.dev/versions/latest/sdk/facedetector/) to capture faces and try to implement the smile detector in Camera.js. 