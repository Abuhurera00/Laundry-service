import { View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, TextInput, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        setLoading(true);
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (!authUser) {
                setLoading(false)
            }
            if (authUser) {
                navigation.navigate("screens/homescreen");
            };
        });

        return unsubscribe;
    }, [])

    const login = () => {
        signInWithEmailAndPassword(auth, email, password).then((userCrediential) => {
            console.log("user Credientials", userCrediential);
            const user = userCrediential.user;
            console.log("user credientials", user);

        })
    }
    return (
        <SafeAreaView className="flex-1 bg-white items-center mt-6 p-[10]">
            {loading ? (
                <View className="items-center justify-center flex-row flex-1">
                    <Text className="mr-[10px]">Loading...</Text>
                    <ActivityIndicator size='large' color={'red'} />
                </View>
            ) : (
                <KeyboardAvoidingView>
                    <View className="justify-center items-center mt-[100px]">
                        <Text className="text-lg text-[#662d91] font-pbold">Sign In</Text>
                        <Text className="text-base mt-[8px] font-psemibold">Sign In to your Account</Text>
                    </View>

                    <View className="mt-[50px]">
                        <View className="flex-row items-center">
                            <MaterialCommunityIcons name="email-outline" size={24} color="black" />
                            <TextInput
                                className={`${email ? 'text-[18px]' : 'text-[18px]'} border-b-[1px] border-b-[gray] w-[300px] my-[10px] ml-[13px]`}
                                placeholder='Email'
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                                placeholderTextColor='black'
                            />
                        </View>

                        <View className="flex-row items-center">
                            <Ionicons name="key-outline" size={24} color="black" />
                            <TextInput
                                className={`${password ? 'text-[18px]' : 'text-[18px]'} border-b-[1px] border-b-[gray] w-[300px] my-[20px] ml-[13px]`}
                                // className={`${password ? 'text-[18px]' : 'text-[18px]'}`}
                                placeholder='Password'
                                value={password}
                                secureTextEntry={true}
                                onChangeText={(text) => setPassword(text)}
                                placeholderTextColor='black'
                            />
                        </View>

                        <Pressable onPress={login} className="w-[200px] bg-[#662d91] p-[15px] rounded-xl mt-[50px] ml-auto mr-auto">
                            <Text className="text-[18px] text-center text-white">Login</Text>
                        </Pressable>
                        <View className="mt-[20px] flex-row items-center justify-center">
                            <Text className="text-center text-base font-pmedium text-[gray]">Don't have an account?</Text>
                            <Pressable onPress={() => navigation.navigate('screens/RegisterScreen')}>
                                <Text className="text-center text-base font-psemibold text-[#662d91]">{' '}Sign Up</Text>
                            </Pressable>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            )}

        </SafeAreaView>
    )
}

export default LoginScreen