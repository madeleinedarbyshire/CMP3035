import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text } from 'react-native';

export default function Button(props) {
    const { title, style, onPress } = props;
    const buttonStyle = StyleSheet.flatten([styles.button, style]);

    return(
        <TouchableOpacity style={ buttonStyle } onPress={ onPress }>
          <Text style={ styles.title }>{ title }</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        width:100,
        height:100,
        alignItems:'center',
        justifyContent:'center',
        margin: 40

    },
    title: {
        color: '#fff',
        fontSize: 20
    }
})