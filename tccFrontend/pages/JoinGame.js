import { View, StyleSheet } from "react-native";
import MainLogo from "../components/MainLogo";
import Colors from "../utilities/Color";

export default function JoinGame(){
    return (
        <View >
            <MainLogo/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT.background,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})