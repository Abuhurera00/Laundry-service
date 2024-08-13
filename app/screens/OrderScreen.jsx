import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from 'expo-router'

const OrderScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className="items-center justify-center">
            <LottieView source={require("../../assets/thumbs.json")}
                style={{
                    height: 360,
                    width: 300,
                    alignSelf: 'center',
                    marginTop: 130,
                    justifyContent: 'center'
                }}
                autoPlay
                loop={false}
                speed={0.7}
            />

            <Text className="text-lg font-psemibold text-center">Your order has been placed</Text>

            <LottieView source={require("../../assets/sparkle.json")}
                style={{
                    height: 300,
                    position: 'absolute',
                    top: 100,
                    width: 300,
                    alignSelf: 'center',
                }}
                autoPlay
                loop={false}
                speed={0.7}
            />

            <Pressable
                onPress={() => navigation.replace('screens/homescreen')}
                className="w-[200px] bg-[#662d91] p-[15px] rounded-xl mt-[10px] mx-auto">
                <Text className="text-[18px] text-center text-white">Go to Home</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default OrderScreen