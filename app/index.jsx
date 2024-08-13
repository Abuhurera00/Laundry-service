import { Link, Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Laundry Service</Text>
      <CustomButton 
              title="Continue with Email" 
              handlePress={() => router.push('/homescreen')} 
              containerStyles="w-80 mt-5" 
              textStyles="" 
              isLoading={false}
            />
      <StatusBar style="auto" />
    </View>
  );
}






