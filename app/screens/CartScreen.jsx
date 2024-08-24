import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';
import { cleanCart, decrementQuantity, incrementQuantity } from '../../CartReducer';
import { decrementQty, incrementQty } from '../../ProductReducer';
import { useRoute } from '@react-navigation/native';
import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';

const CartScreen = () => {
    const cart = useSelector((state) => state.cart.cart);
    const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);
    const navigation = useNavigation();
    const userUid = auth.currentUser.uid;
    const dispatch = useDispatch();
    const route = useRoute();
    // const { address, latitude, longitude } = route.params;

    // const placeOrder = async () => {
    //     navigation.navigate("screens/OrderScreen");
    //     dispatch(cleanCart());
    //     await setDoc(doc(db, "users", `${userUid}`),
    //         {
    //             orders: { ...cart },
    //             pickUpDetails: route.params,
    //             // address: address, // Store address
    //             // location: {
    //             //     latitude: latitude, // Store latitude
    //             //     longitude: longitude // Store longitude
    //             // }
    //         },
    //         {
    //             merge: true
    //         })
    // }

    const placeOrder = async () => {
        navigation.navigate("screens/OrderScreen");
        dispatch(cleanCart());

        // Structure the new order with pickUpDetails inside orderDetails
        const newOrder = {
            orderDetails: {
                ...cart,
                pickUpDetails: route.params,  // Nested within orderDetails
            }
        };

        const userDocRef = doc(db, "users", `${userUid}`);

        try {
            // Use updateDoc with arrayUnion to append the new order to the existing orders array
            await updateDoc(userDocRef, {
                orders: arrayUnion(newOrder),
            });
            console.log('Order placed successfully!');
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };


    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        if (route.params.pickUpDate) {
            console.log("Received pickUpDate:", route.params.pickUpDate); // Debug log

            // Directly use the ISO string to create a Date object
            const date = new Date(route.params.pickUpDate);

            console.log("Parsed Date:", date); // Log the parsed Date object

            if (!isNaN(date.getTime())) {
                setFormattedDate(date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }));
            } else {
                setFormattedDate("Invalid Date");
            }
        }
    }, [route.params.pickUpDate]);
    return (
        <>
            <ScrollView className="bg-[#F0F0F0] mt-6 p-[10]">

                {total === 0 ? (
                    <View className="items-center justify-center ">
                        <Text className="mt-[40px]">Your cart is empty</Text>
                    </View>
                ) : (
                    <>
                        <View className="p-[10px] flex-row items-center">
                            <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
                            <Text className="text-base text-black-200 font-psemibold">Your Bucket</Text>
                        </View>

                        <Pressable className="bg-gray-300 rounded-[12px] ml-[10px] mr-[10px] p-[14px]">
                            {cart.map((item, index) => (
                                <View
                                    className="flex-row items-center justify-between my-[12px]"
                                    key={index}>
                                    <Text className="w-[100px] text-[16px] font-[500]">{item.name}</Text>

                                    {/* - + button */}
                                    <Pressable
                                        style={{
                                            flexDirection: "row",
                                            paddingHorizontal: 10,
                                            paddingVertical: 5,
                                            alignItems: "center",
                                            borderColor: "#BEBEBE",
                                            borderWidth: 0.5,
                                            borderRadius: 10,
                                        }}
                                    >
                                        <Pressable
                                            onPress={() => {
                                                dispatch(decrementQuantity(item)); // cart
                                                dispatch(decrementQty(item)); // product
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    color: "#088F8F",
                                                    paddingHorizontal: 6,
                                                    fontWeight: "600",
                                                }}
                                            >
                                                -
                                            </Text>
                                        </Pressable>

                                        <Pressable>
                                            <Text
                                                style={{
                                                    fontSize: 19,
                                                    color: "#088F8F",
                                                    paddingHorizontal: 8,
                                                    fontWeight: "600",
                                                }}
                                            >
                                                {item.quantity}
                                            </Text>
                                        </Pressable>

                                        <Pressable
                                            onPress={() => {
                                                dispatch(incrementQuantity(item)); // cart
                                                dispatch(incrementQty(item)); //product
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    color: "#088F8F",
                                                    paddingHorizontal: 6,
                                                    fontWeight: "600",
                                                }}
                                            >
                                                +
                                            </Text>
                                        </Pressable>
                                    </Pressable>

                                    {/* - + button */}
                                    <Text className="text-[16px] font-[500]">AED {item.price * item.quantity}</Text>
                                </View>
                            ))}
                        </Pressable>

                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 30 }}>
                                Billing Details
                            </Text>
                            <View
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: 7,
                                    padding: 10,
                                    marginTop: 15,
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Text
                                        style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                                    >
                                        Item Total
                                    </Text>
                                    <Text style={{ fontSize: 18, fontWeight: "400" }}>
                                        AED {total}
                                    </Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginVertical: 8,
                                    }}
                                >
                                    <Text
                                        style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                                    >
                                        Delivery Fee | 1.2KM
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontWeight: "400",
                                            color: "#088F8F",
                                        }}
                                    >
                                        FREE
                                    </Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text
                                        style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                                    >
                                        Free Delivery on Your order
                                    </Text>
                                </View>

                                <View
                                    style={{
                                        borderColor: "gray",
                                        height: 1,
                                        borderWidth: 0.5,
                                        marginTop: 10,
                                    }}
                                />

                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginVertical: 10,
                                    }}
                                >
                                    <Text
                                        style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                                    >
                                        selected Date
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontWeight: "400",
                                            color: "#088F8F",
                                        }}
                                    >
                                        {formattedDate}
                                        {/* {route.params.pickUpDate.toString()} */}
                                    </Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Text
                                        style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                                    >
                                        No Of Days
                                    </Text>

                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontWeight: "400",
                                            color: "#088F8F",
                                        }}
                                    >
                                        {route.params.no_Of_days}
                                    </Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginVertical: 10,
                                    }}
                                >
                                    <Text
                                        style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                                    >
                                        selected Pick Up Time
                                    </Text>

                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontWeight: "400",
                                            color: "#088F8F",
                                        }}
                                    >
                                        {route.params.selectedTime}
                                    </Text>
                                </View>

                                {/*  */}
                                <View
                                    style={{
                                        flexDirection: "row",
                                        // alignItems: "center",
                                        justifyContent: "space-between",
                                        // marginVertical: 10,
                                    }}
                                >
                                    <Text
                                        style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                                    >
                                        Your Address
                                    </Text>

                                    <Text
                                        style={{
                                            fontSize: 15,
                                            fontWeight: "400",
                                            width: 150,
                                            color: "#088F8F",
                                        }}
                                    >
                                        {route.params.address}
                                    </Text>
                                </View>
                                {/*  */}



                                {/*  */}
                                {/* <View
                                    style={{
                                        flexDirection: "row",
                                        // alignItems: "center",
                                        justifyContent: "space-between",
                                        // marginVertical: 10,
                                    }}
                                >
                                    <Text
                                        style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                                    >
                                        Your latitude
                                    </Text>

                                    <Text
                                        style={{
                                            fontSize: 15,
                                            fontWeight: "400",
                                            // width: 150,
                                            color: "#088F8F",
                                        }}
                                    >
                                        {route.params.latitude}
                                    </Text>
                                </View> */}
                                {/*  */}

                                {/*  */}
                                {/* <View
                                    style={{
                                        flexDirection: "row",
                                        // alignItems: "center",
                                        justifyContent: "space-between",
                                        // marginVertical: 10,
                                    }}
                                >
                                    <Text
                                        style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                                    >
                                        Your longitude
                                    </Text>

                                    <Text
                                        style={{
                                            fontSize: 15,
                                            fontWeight: "400",
                                            // width: 150,
                                            color: "#088F8F",
                                        }}
                                    >
                                        {route.params.longitude}
                                    </Text>
                                </View> */}
                                {/*  */}


                                <View
                                    style={{
                                        borderColor: "gray",
                                        height: 1,
                                        borderWidth: 0.5,
                                        marginTop: 10,
                                    }}
                                />

                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginVertical: 8,
                                    }}
                                >
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                        To Pay
                                    </Text>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                                        AED {total}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </>
                )}
            </ScrollView>

            {total === 0 ? (
                null
            ) : (
                <Pressable className="bg-[#088F8F] p-[10px] mb-[40px] m-[15px] rounded-xl flex-row items-center justify-between mt-auto">
                    <View>
                        <Text className="text-base font-psemibold text-white">{cart.length} items | AED {total}</Text>
                        <Text className="text-[11px] font-psemibold text-white my-[6px]">Extra charges might apply</Text>
                    </View>


                    <Pressable onPress={placeOrder}>
                        <Text className="text-[14px] font-pbold text-white">Place Order</Text>
                    </Pressable>
                </Pressable>
            )}
        </>
    )
}

export default CartScreen