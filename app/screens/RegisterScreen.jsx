import { View, Text, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';

const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const navigation = useNavigation();
    const [loading, setLoading] = useState("");

    // const register = () => {
    //     if(email == "" || password === "" || phone === ""){
    //         Alert.alert('Invalid details', 'Please fill in all the details', [
    //             {
    //               text: 'Cancel',
    //               onPress: () => console.log('Cancel Pressed'),
    //               style: 'cancel',
    //             },
    //             {text: 'OK', onPress: () => console.log('OK Pressed')},
    //           ]);
    //     }

    //     createUserWithEmailAndPassword(auth, email, password).then((userCrediential) => {
    //         // console.log("user Credientials", userCrediential);
    //         const user = userCrediential._tokenResponse.email;
    //         const myUserUid = auth.currentUser.uid; 

    //         setDoc(doc(db, "users", `${myUserUid}`),{
    //             email: user,
    //             phone: phone
    //         })
    //     })
    // }




    const register = async () => {
        if (email === "" || password === "" || phone === "") {
            Alert.alert('Invalid details', 'Please fill in all the details', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
            return;
        }

        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // console.log("User Credentials", userCredential);
            const user = userCredential.user.email;
            const myUserUid = auth.currentUser.uid;

            await setDoc(doc(db, "users", `${myUserUid}`), {
                email: user,
                phone: phone,
            });

            // Wait until auth.currentUser is updated
            await new Promise((resolve) => {
                const unsubscribe = auth.onAuthStateChanged((authUser) => {
                    if (authUser && authUser.uid === myUserUid) {
                        unsubscribe(); // Stop listening
                        resolve(); // Resolve when the correct user is detected
                    }
                });
            });

            // Now, navigate to the home screen
            setLoading(false); // Hide loading indicator
            navigation.replace("screens/homescreen");
        } catch (error) {
            setLoading(false);  // Hide loading indicator
            // console.error("Error during registration:", error);
            Alert.alert('Registration Error', error.message);
        }
    };




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
                        <Text className="text-lg text-[#662d91] font-pbold">Sign Up</Text>
                        <Text className="text-base mt-[8px] font-psemibold">Create a new Account</Text>
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


                        <View className="flex-row items-center">
                            <Feather name="phone" size={24} color="black" />
                            <TextInput
                                className={`${phone ? 'text-[18px]' : 'text-[18px]'} border-b-[1px] border-b-[gray] w-[300px] my-[10px] ml-[13px]`}
                                // className={`${password ? 'text-[18px]' : 'text-[18px]'}`}
                                placeholder='Phone'
                                value={phone}
                                // secureTextEntry={true}
                                onChangeText={(text) => setPhone(text)}
                                placeholderTextColor='black'
                            />
                        </View>

                        <Pressable
                            onPress={register}
                            className="w-[200px] bg-[#662d91] p-[15px] rounded-xl mt-[50px] ml-auto mr-auto">
                            <Text className="text-[18px] text-center text-white">Sign Up</Text>
                        </Pressable>
                        <View className="mt-[20px] flex-row items-center justify-center">
                            <Text className="text-center text-base font-pmedium text-[gray]">Already have an account?</Text>
                            <Pressable onPress={() => navigation.goBack()}>
                                <Text className="text-center text-base font-psemibold text-[#662d91]">{' '}Sign In</Text>
                            </Pressable>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            )}



        </SafeAreaView>
    )
}

export default RegisterScreen