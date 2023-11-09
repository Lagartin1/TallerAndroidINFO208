import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import BotScreen from '../screens/BotScreen';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplasScreen" component={SplashScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BotScreen" component={BotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
