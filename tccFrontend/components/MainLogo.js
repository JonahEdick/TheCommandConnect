import { StyleSheet, View, Image } from 'react-native';

export default function MainLogo(){
    return(
        <View style={styles.logoView}>
          <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    logo:{
        width:100,
        height:100,
    },
    logoView: {
        alignItems: 'center',
        position: 'absolute',
        top: 20
    },
});