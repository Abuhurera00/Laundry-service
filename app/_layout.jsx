import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react';
// import HomeScreen from './screens/homescreen';
// import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from '../store';
import StackNavigator from '../StackNavigator';
import HomeScreen from './screens/homescreen';

const _layout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();

  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;



  return (
    // <Stack>
    //   <Stack.Screen name='index' options={{ headerShown : false }} />
    //   <Stack.Screen name='homescreen' options={{ headerShown : false }} />
    //   <HomeScreen />
    //   <StatusBar style='auto' />
    // </Stack>
    <Provider store={store}>
      <StackNavigator />
      {/* <HomeScreen /> */}
      <StatusBar style='auto' />
    </Provider>
  )
}

export default _layout