import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import 'react-native-gesture-handler';
import HomeScreen from './screens/HomeScreen';
import TrackScreen from './screens/TrackScreen';
import HistoryScreen from './screens/HistoryScreen';
import MapScreen from './screens/MapScreen';
import { BlurView } from 'expo-blur';
import * as Location from 'expo-location';

const Stack = createStackNavigator(); 
Location.installWebGeolocationPolyfill();

const Ops = {headerTransparent: true, 
             headerTintColor: '#fff', 
             headerBackground: () => (<BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} /> ),
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={Ops} />
        <Stack.Screen name="Track" component={TrackScreen} options={Ops} />
        <Stack.Screen name="History" component={HistoryScreen} options={Ops} />
        <Stack.Screen name="Map" component={MapScreen} options={Ops} />
      </Stack.Navigator>
    </NavigationContainer>);}

export default App;
