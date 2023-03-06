import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../utilities/Color";

export default function JoinButton({navigation}){
    
    function onPress(){
        navigation.navigate('JoinGame');
    }
    
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>Join Game</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT.buttons,
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