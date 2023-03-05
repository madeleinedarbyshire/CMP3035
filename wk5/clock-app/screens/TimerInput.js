import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/buttons';
import NumericInput from 'react-native-numeric-input'

function Input(props) {
    const { title, maxValue, value, onChange } = props
    return (          
      <View style={styles.input}>
        <Text style={styles.subheading}>{title}</Text>
        <NumericInput
          style={{flex: 1}}
          type="plus-minus"
          value={value}
          onChange={onChange} 
          minValue={0} 
          maxValue={maxValue} 
          valueType="integer"
          totalWidth={150}
          totalHeight={70}
          rounded />
      </View>);
  }

export default function TimerInput(props) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
        <View style={styles.inputContainer}>
            {/* TODO: Add functionality to these time input functions */}
            <Input key={`hours:${hours}`} title="Hours" maxValue={99} value={hours} onChange={value => undefined}/>
            <Input key={`minutes:${minutes}`} title="Minutes" maxValue={59} value={minutes} onChange={value => undefined}/>
            <Input key={`seconds:${seconds}`} title="Seconds" maxValue={99} value={seconds} onChange={value => undefined}/> 
        </View>
        <View style={styles.buttonContainer}>
            {/* TODO: Add functionality to the reset button. It should reset time inputs to 0. */}
            <Button style={{backgroundColor: "#60615f"}} title="Reset" onPress={() => undefined} />

            {/* TODO: Add functionality to the start button. It should navigate to the Timer screen. */}
            <Button style={{backgroundColor: "#60bd31"}} title="Start" onPress={() => undefined} />
        </View>
        </View>
    );
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
    inputContainer: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      flex: 3,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 30,
      marginRight: 30
    },
    subheading: {
      fontSize: 30,
      flex: 1
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
