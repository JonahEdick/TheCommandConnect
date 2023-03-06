import { StyleSheet, Pressable, Text, Button, TouchableOpacity } from "react-native";
import Colors from "../utilities/Color";

export default function HostButton({navigation}){

    function onPress(){
        navigation.navigate('CreateGame')
    }

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>Host Game</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT.buttons,
        padding: 10,
        width: 150,
        height: 50,
        justifyContent: 'center',
        marginTop: 50
    },
    text:{
        color: Colors.DEFAULT.text,
        fontSize: 15
    }
})