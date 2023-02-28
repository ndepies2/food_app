import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import LandingScreen from './src/screens/LandingScreen';
import { Card } from '@rneui/themed'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './src/components/TabNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store'

export default function App() {

  const Stack = createNativeStackNavigator();//hello
  const loggedIn = true;

  return (
    <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 

