import { StyleSheet, Text, View } from "react-native";
import MainLogo from "../components/MainLogo";
import Colors from '../utilities/Color'

export default function CreateGame(){
    return (
        <View style={styles.container}>
            <MainLogo/>
            <Text>
            </Text>
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
  },
})