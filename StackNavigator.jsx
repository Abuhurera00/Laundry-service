// import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './app/screens/homescreen'
import index from './app/index'
import PickUpScreen from './app/screens/PickUpScreen'
import CartScreen from './app/screens/CartScreen'
import LoginScreen from './app/screens/LoginScreen'
import RegisterScreen from './app/screens/RegisterScreen'
import ProfileScreen from './app/screens/ProfileScreen'
import OrderScreen from './app/screens/OrderScreen'

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="index" component={index} options={{ headerShown: false }} /> */}
        <Stack.Screen name="screens/LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="screens/homescreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="screens/PickUpScreen" component={PickUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="screens/CartScreen" component={CartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="screens/RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="screens/ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="screens/OrderScreen" component={OrderScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default StackNavigator