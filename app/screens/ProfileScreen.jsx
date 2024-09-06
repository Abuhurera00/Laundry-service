import { View, Text, SafeAreaView, Pressable, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase'
import { signOut } from 'firebase/auth';
import { useNavigation } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { images } from '../../constants';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { doc, getDoc } from 'firebase/firestore';

const ProfileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);

  // const signOutUser = () => {
  //   signOut(auth).then(() => {
  //     navigation.replace("screens/LoginScreen");
  //   }).catch(err => {
  //     console.log(err);
  //   });
  // };



  const signOutUser = async () => {
    try {
      await signOut(auth);
      // setOrders([]);  // Clear any user-specific state
      setTimeout(() => {
        navigation.replace("screens/LoginScreen");
      }, 500);  // Small delay to ensure sign-out completes
    } catch (err) {
      console.log("Sign-out error:", err);
    }
  };



  useEffect(() => {
    const fetchOrders = async () => {
      const docRef = doc(db, "users", `${user.uid}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        if (userData.orders) {
          const allOrders = userData.orders.map(order => order.orderDetails);
          setOrders(allOrders);
          // console.log('Orders:', allOrders);
        }
      } else {
        console.log("No such document!");
      }
    };

    fetchOrders();
  }, []);



  return (
    <SafeAreaView className="bg-white mt-6 flex-1 items-center justify-center w-full h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View > */}
        <View className="p-[10px] mt-[5px] flex-row items-center">
          <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
          <Text className="text-base text-black-200 font-psemibold">Profile</Text>
        </View>

        <View className="w-full justify-center items-center min-h-full px-4 pb-10">
          <Pressable className="my-[10px]">
            <Text className="text-4xl text-black-200 font-pextrabold text-center">Welcome</Text>
            <Text className="text-lg text-black-200 font-pbold text-center">{user.email}</Text>
          </Pressable>

          <Pressable onPress={signOutUser} className="flex-row justify-center items-center">
            <Text className="text-base text-black-200 font-psemibold text-center pr-2">Sign Out</Text>
            <Octicons name="sign-out" size={24} color="black" />
          </Pressable>

          <Image source={images.profilesect} className="max-w-[380px] w-full h-[300px]" resizeMode='contain' />

          <View className="relative mt-5">
            <Text className="text-xl text-black-200 font-pbold text-center">
              Discover Endless Possibilties with{' '}
              <Text className="text-secondary-200">Our services</Text>
            </Text>
          </View>

          <Text className="text-sm font-pregular text-gray-600 mt-3 text-center">
            Where creativity meets innovation: embark on a journey of limitless exploration with Laundry-Service
          </Text>

          {/* Display Orders */}
          <View className="mt-10 w-full px-4 mb-5">
            <Text className="text-2xl text-black-200 font-pextrabold text-center mb-4">Your Orders</Text>
            {/* Conditional rendering for orders */}
            {orders && orders.length > 0 ? (
              <>
                {/* Table Header */}
                <View className="flex-row justify-between py-2 border-b border-gray-300">
                  <Text className="text-base font-pbold">Name</Text>
                  <Text className="text-base font-pbold">Quantity</Text>
                  <Text className="text-base font-pbold">Price</Text>
                </View>

                {/* Table Rows */}
                {orders.map((order, orderIndex) => (
                  Object.values(order).filter(item => item && item.name).map((item, index) => (
                    <View key={`${orderIndex}-${index}`} className="flex-row justify-between py-2 border-b border-gray-200">
                      <Text className="text-base text-gray-700">{item.name}</Text>
                      <Text className="text-base text-gray-700">{item.quantity}</Text>
                      <Text className="text-base text-gray-700">AED {item.price}</Text>
                    </View>
                  ))
                ))}
              </>
            ) : (
              <Text className="text-sm font-pregular text-gray-600 mt-3 text-center">
                You have no orders yet...
              </Text>
            )}
          </View>
        </View>
        {/* </View> */}
      </ScrollView>

      <StatusBar backgroundColor='#fff' style='dark' />
    </SafeAreaView>
  )
}

export default ProfileScreen;
