import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decrementQuantity, incrementQuantity } from '../CartReducer';
import { decrementQty, incrementQty } from '../ProductReducer';

const DressItem = ({ item }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state => state.cart.cart))
    const addItemToCart = () => {
        dispatch(addToCart(item));  //cart
        dispatch(incrementQty(item));   //product
    }
    return (
        <View>
            <Pressable className="flex-row bg-slate-300 rounded-xl p-4 items-center justify-between m-3">
                <View>
                    <Image style={{ width: 70, height: 70 }} source={{ uri: item.image }} />
                </View>

                <View>
                    <Text className="w-[83px] font-psemibold mb-0.5">{item.name}</Text>
                    <Text className="w-[60px] font-pmedium text-gray-600">${item.price}</Text>
                </View>

                {cart.some((c) => c.id === item.id) ? (
                    <Pressable
                        style={{
                            flexDirection: "row",
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                        }}
                    >
                        <Pressable
                            onPress={() => {
                                dispatch(decrementQuantity(item)); // cart
                                dispatch(decrementQty(item)); // product
                            }}
                            style={{
                                width: 26,
                                height: 26,
                                borderRadius: 13,
                                borderColor: "#BEBEBE",
                                backgroundColor: "#E0E0E0",
                                justifyContent: "center",
                                alignContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "#088F8F",
                                    paddingHorizontal: 6,
                                    fontWeight: "600",
                                    textAlign: "center",
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
                            style={{
                                width: 26,
                                height: 26,
                                borderRadius: 13,
                                borderColor: "#BEBEBE",
                                backgroundColor: "#E0E0E0",
                                justifyContent: "center",
                                alignContent: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "#088F8F",
                                    paddingHorizontal: 6,
                                    fontWeight: "600",
                                    textAlign: "center",
                                }}
                            >
                                +
                            </Text>
                        </Pressable>
                    </Pressable>
                ) : (
                    <Pressable onPress={addItemToCart} className="w-[80px] my-[10px]">
                        <Text className="border-gray-600 border-[1.5px]  p-[8px] rounded-md font-bold text-[#088F8F] text-center">Add</Text>
                    </Pressable>
                )}


            </Pressable>

        </View>
    )
}

export default DressItem