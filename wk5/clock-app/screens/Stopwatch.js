import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Button from '../components/buttons';
import { useFonts, ChakraPetch_400Regular } from '@expo-google-fonts/dev';

// format numbers as strings such that 2 -> '02'
const formatNumeric = (x) => ('0' + x).slice(-2)

export default function Stopwatch() {
  let [fontsLoaded] = useFonts({
    ChakraPetch_400Regular,
  });

  // centiseconds are equivalent to seconds/100.
  const [centisecs, setCentisecs] = useState(0);

  // isCounting controls whether the stopwatch is on/off. 
  const [isCounting, setStartStop] = useState(false);

  // TODO: Use an Effect to update time on the stopwatch.
  // useEffect(() => {});
  
  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </ View>
    );
  }
  else {
    return (
      <View style={styles.container}>
        <View style={styles.clock}>
          {/* TODO: Format stopwatch time as <minutes>:<seconds>.<centiseconds> */}
          <Text style={styles.digits}>00:00.00</Text>
        </View>
        <View style={styles.buttonContainer}>
          {/* TODO: Add functionality to the reset button. It should reset time to 0. */}
          <Button
            style={{backgroundColor: "#60615f"}}
            title="Reset" 
            onPress={() => undefined } />
          {/* TODO: Add functionality to the start/stop button. */}
          <Button 
            style={{backgroundColor: isCounting ? "#ed3b53" : "#60bd31"}}
            title={isCounting ? "Stop" : "Start"}
            onPress={() => undefined } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'start'
  },
  clock: {
    flex: 3,
    justifyContent: 'center'
  },
  digits: {
    fontFamily: 'ChakraPetch_400Regular',
    fontSize: 60
  }
});
