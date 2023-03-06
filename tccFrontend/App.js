import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import CreateGame from './pages/CreateGame';
import JoinGame from './pages/JoinGame';
import MainMenu from './pages/MainMenu';
import Colors from './utilities/Color';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown:false,
          animation: 'none'
          }}>
        <Stack.Screen
          name="MainMenu"
          component={MainMenu} 
        />
        <Stack.Screen
          name="CreateGame"
          component={CreateGame}
        />
        <Stack.Screen
          name="JoinGame"
          component={JoinGame}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
  logo:{
    width:100,
    height:100,
  },
  logoView: {
    alignItems: 'center',
    position: 'absolute',
    top: 20
  },
  introView:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  menuView: {
    alignItems: 'center',
    position: 'absolute',
    top: 300
  }
});
