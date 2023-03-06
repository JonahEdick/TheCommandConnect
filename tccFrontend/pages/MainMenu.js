import { StyleSheet, Button, Text, View, Image } from "react-native";
import HostButton from "../components/HostButton";
import JoinButton from "../components/JoinButton";
import MainLogo from "../components/MainLogo";
import Photos from "../utilities/Photo";
import Colors from "../utilities/Color"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function MainMenu({navigation}){
    return (
        <View style={styles.container}>
            <MainLogo/>
            <HostButton navigation={navigation}/>
            <JoinButton navigation={navigation}/>
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