import { View, Text, SafeAreaView, Pressable, ScrollView, Image } from 'react-native'
import React from 'react'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth';
import { useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { images } from '../../constants';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';

const ProfileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();

  const signOutUser = () => {
    signOut(auth).then(() => {
      navigation.replace("screens/LoginScreen")
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <SafeAreaView className="bg-white mt-6 p-[10] flex-1 items-center justify-center">




      {/*  */}

      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="py-[10px] flex-row items-center">
          <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
          <Text className="text-base text-black-200 font-psemibold">Profile</Text>
        </View>
        <View className="w-full justify-center items-center min-h-full px-4">
          <Pressable className="my-[10px]">
            <Text className="text-4xl text-black-200 font-pextrabold text-center">Welcome</Text>
            <Text className="text-lg text-black-200 font-pbold text-center">{user.email}</Text>
          </Pressable>

          <Pressable
            onPress={signOutUser}
            className="flex-row justify-center items-center"
          >
            <Text className="text-base text-black-200 font-psemibold text-center pr-2">Sign Out</Text>
            <Octicons name="sign-out" size={24} color="black" />
          </Pressable>
          {/* <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode='contain' /> */}
          <Image source={images.profilesect} className="max-w-[380px] w-full h-[300px]" resizeMode='contain' />

          <View className="relative mt-5">
            <Text className="text-xl text-black-200 font-pbold text-center">Discover Endless Possibilties with{' '}<Text className="text-secondary-200">Our services</Text>
            </Text>

            {/* <Image source={images.path} className="w-[136px] h-[15px] absolute -bottom-3 -right-[-35]" resizeMode='contain' /> */}
          </View>

          <Text className="text-sm font-pregular text-gray-600 mt-3 text-center">Where creativity meets innovation: embark on a journey of limitless exploration with Laundry-Service</Text>

        </View>
      </ScrollView>

      <StatusBar backgroundColor='#fff' style='dark' />
    </SafeAreaView>
  )
}

export default ProfileScreen