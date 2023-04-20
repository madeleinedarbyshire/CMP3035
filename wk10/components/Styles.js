import colours from './Colours';
import dimensions from './ScreenSize'; 
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: colours.background
    },
    input: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      backgroundColor: 'rgba(250, 250, 250, 0.1)',
      padding: 10,
      marginBottom: 10,
      borderRadius: 5
    },
    subContainer: {
      margin: 10
    },
    mainContainer: {
      justifyContent: 'center',
      flex: 1,
      paddingTop: 0
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: dimensions.width / 2 
    },
    selected: {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      borderColor: '#bb1d68',
      borderWidth: 8
    }
  })