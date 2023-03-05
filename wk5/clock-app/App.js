import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stopwatch from './screens/Stopwatch';
import Timer from './screens/Timer';
import TimerInput from './screens/TimerInput';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TimerNav = () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name="TimerInput" component={TimerInput} />
      <Stack.Screen name="Timer" component={Timer} />
    </Stack.Navigator>
  );
}

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Stopwatch" 
      component={Stopwatch}
      options={{
        tabBarLabel: 'Stopwatch',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="timer" color={color} size={size}/>
      )}} />
      <Tab.Screen 
      name="TimerNav"
      component={TimerNav}
      options={{
        tabBarLabel: 'Timer',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="av-timer" color={color} size={size}/>
      )}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNav/>
    </NavigationContainer> 
  );
}

