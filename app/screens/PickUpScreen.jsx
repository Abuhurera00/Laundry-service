
// import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Pressable, ScrollView, Alert } from 'react-native'
// import Feather from '@expo/vector-icons/Feather';
// import React, { useState } from 'react'
// import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
// import { useSelector } from 'react-redux';
// import { useNavigation } from 'expo-router';

// const PickUpScreen = () => {
//     const cart = useSelector((state) => state.cart.cart);
//     const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);
//     const [selectedDate, setSelectedDate] = useState("");
//     const [selectedTime, setSelectedTime] = useState([]);
//     const [delivery, setDelivery] = useState([]);

//     const deliveryTime = [
//         {
//             id: "0",
//             name: "2-3 Days",
//         },
//         {
//             id: "1",
//             name: "3-4 Days",
//         },
//         {
//             id: "2",
//             name: "4-5 Days",
//         },
//         {
//             id: "3",
//             name: "5-6 Days",
//         },
//         {
//             id: "4",
//             name: "Tommorrow",
//         },
//     ];

//     const times = [
//         {
//             id: "0",
//             time: "11:00 PM",
//         },
//         {
//             id: "1",
//             time: "12:00 PM",
//         },
//         {
//             id: "2",
//             time: "1:00 PM",
//         },
//         {
//             id: "3",
//             time: "2:00 PM",
//         },
//         {
//             id: "4",
//             time: "3:00 PM",
//         },
//         {
//             id: "5",
//             time: "4:00 PM",
//         },
//     ];
//     const navigation = useNavigation();

//     const ProceedToCart = () => {
//         if(!selectedDate || !selectedTime || !delivery){
//             Alert.alert('Empty or Invalid', 'Please select all the fields', [
//                 {
//                   text: 'Cancel',
//                   onPress: () => console.log('Cancel Pressed'),
//                   style: 'cancel',
//                 },
//                 {text: 'OK', onPress: () => console.log('OK Pressed')},
//               ]);
//         }

//         if(selectedDate && selectedTime && delivery){
//            navigation.replace("screens/CartScreen",{
//             pickUpDate: selectedDate.toISOString(),
//             selectedTime: selectedTime,
//             no_Of_days: delivery
//            })
//         }
//     }


//     return (
//         <>
//             <SafeAreaView className="bg-[#F0F0F0] mt-6 p-[10]">
//                 <Text className="px-2 text-[16px] font-[600] my-[10px]">Enter Your Address</Text>
//                 <TextInput
//                     className="bg-gray-200 text-base mt-0.5 p-4 text-black-200 font-pregular w-full border-gray-500 
//                 border-[0.7px] rounded-xl"
//                     placeholder="please enter your home address"
//                     placeholderTextColor="#000"
//                     multiline={true}
//                     numberOfLines={10}
//                     style={{ height: 150, textAlignVertical: 'top' }}
//                 />

//                 <Text className="px-2 text-[16px] font-[600] my-[10px]">Pick Up Date</Text>
//                 <HorizontalDatepicker
//                     mode="gregorian"
//                     startDate={new Date('2024-08-5')}
//                     endDate={new Date('2024-08-10')}
//                     initialSelectedDate={new Date('2020-08-22')}
//                     onSelectedDateChange={(date) => setSelectedDate(date)}
//                     selectedItemWidth={170}
//                     unselectedItemWidth={38}
//                     itemHeight={38}
//                     itemRadius={10}
//                     selectedItemTextStyle={styles.selectedItemTextStyle}
//                     unselectedItemTextStyle={styles.unselectedItemTextStyle}
//                     selectedItemBackgroundColor="#222831"
//                     unselectedItemBackgroundColor="#ececec"
//                     flatListContainerStyle={styles.flatListContainerStyle}
//                 />

//                 <Text className="px-2 text-[16px] font-[600] my-[10px]">Select Time</Text>

//                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                     {times.map((item, index) => (
//                         <Pressable key={index}
//                             // className="m-[10px] rounded-xl p-[15px] border-gray-300 bg-gray-300 border-[0.7px]"
//                             onPress={() => setSelectedTime(item.time)}
//                             style={selectedTime === (item.time) ? {
//                                 margin: 10,
//                                 borderRadius: 7,
//                                 padding: 10,
//                                 borderColor: "gray",
//                                 backgroundColor: "#222831",
//                                 borderWidth: 0.7,
//                                 // color: "fff"
//                             } :
//                                 {
//                                     margin: 10,
//                                     borderRadius: 7,
//                                     padding: 10,
//                                     borderColor: "gray",
//                                     // backgroundColor: "#fff",
//                                     borderWidth: 0.7
//                                 }}
//                         >
//                             <Text style={selectedTime === item.time ? { color: 'white' } : { color: 'black' }}>{item.time}</Text>
//                         </Pressable>
//                     ))}
//                 </ScrollView>

//                 <Text className="px-2 text-[16px] font-[600] my-[10px]">Delivery Date</Text>

//                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                     {deliveryTime.map((item, index) => (
//                         <Pressable key={index}
//                             onPress={() => setDelivery(item.name)}
//                             style={delivery.includes(item.name) ? {
//                                 margin: 10,
//                                 borderRadius: 7,
//                                 padding: 10,
//                                 borderColor: "gray",
//                                 backgroundColor: "#222831",
//                                 borderWidth: 0.7,
//                                 // color: "#fff"
//                             } :
//                                 {
//                                     margin: 10,
//                                     borderRadius: 7,
//                                     padding: 10,
//                                     borderColor: "gray",
//                                     //  backgroundColor: "gray", 
//                                     borderWidth: 0.7
//                                 }}
//                         >
//                             <Text style={delivery === item.name ? { color: 'white' } : { color: 'black' }}>{item.name}</Text>
//                         </Pressable>
//                     ))}
//                 </ScrollView>

//             </SafeAreaView>

//             {total === 0 ? (
//                 null
//             ) : (
//                 <Pressable className="bg-[#088F8F] p-[10px] mb-[40px] m-[15px] rounded-xl flex-row items-center justify-between mt-auto">
//                     <View>
//                         <Text className="text-base font-psemibold text-white">{cart.length} items | ${total}</Text>
//                         <Text className="text-[11px] font-psemibold text-white my-[6px]">Extra charges might apply</Text>
//                     </View>


//                     <Pressable onPress={ProceedToCart}>
//                         <Text className="text-[14px] font-pbold text-white">Proceed To Cart</Text>
//                     </Pressable>
//                 </Pressable>
//             )}
//         </>
//     )
// }

// const styles = StyleSheet.create({
//     selectedItemTextStyle: {
//         color: 'white',
//     },
//     unselectedItemTextStyle: {
//         color: 'black',
//     },
//     flatListContainerStyle: {
//         marginVertical: 10,
//     },
// });

// export default PickUpScreen































































































































import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet, Pressable, ScrollView, Alert } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from 'react'
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import { useSelector } from 'react-redux';
import { useNavigation } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

const PickUpScreen = () => {
    const route = useRoute();  // Get navigation route object
    const { address, latitude, longitude } = route.params || {};  // Retrieve address parameter
    const cart = useSelector((state) => state.cart.cart);
    const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState([]);
    const [delivery, setDelivery] = useState([]);
    const [mapRegion, setMapRegion] = useState({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [todayNewDate, setTodayNewDate] = useState(new Date());

    // Get today's date
    const today = new Date();

    // Calculate the end date (e.g., 5 days from today)
    const endDate = new Date();
    endDate.setDate(today.getDate() + 5);


    const deliveryTime = [
        {
            id: "0",
            name: "2-3 Days",
        },
        {
            id: "1",
            name: "3-4 Days",
        },
        {
            id: "2",
            name: "4-5 Days",
        },
        {
            id: "3",
            name: "5-6 Days",
        },
        {
            id: "4",
            name: "Tommorrow",
        },
    ];

    const times = [
        {
            id: "0",
            time: "11:00 PM",
        },
        {
            id: "1",
            time: "12:00 PM",
        },
        {
            id: "2",
            time: "1:00 PM",
        },
        {
            id: "3",
            time: "2:00 PM",
        },
        {
            id: "4",
            time: "3:00 PM",
        },
        {
            id: "5",
            time: "4:00 PM",
        },
    ];
    const navigation = useNavigation();

    const ProceedToCart = () => {
        if (!selectedDate || !selectedTime || !delivery || !address) {
            Alert.alert('Empty or Invalid', 'Please select all the fields', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }

        if (selectedDate && selectedTime && delivery && address) {
            navigation.replace("screens/CartScreen", {
                pickUpDate: selectedDate.toString(),
                selectedTime: selectedTime,
                no_Of_days: delivery,
                address: address,
                latitude: latitude, // Assuming `currentLocation` is set with latitude and longitude
                longitude: longitude
            })
        }
    }


    return (
        <>
            <SafeAreaView className="bg-[#F0F0F0] mt-6 p-[10]">
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text className="px-2 text-[16px] font-[600] my-[10px]">Enter Your Address</Text>
                    <TextInput
                        className="bg-gray-200 text-base mt-0.5 p-4 text-black-200 font-pregular w-full border-gray-500 
                border-[0.7px] rounded-xl"
                        placeholder="please enter your home address"
                        placeholderTextColor="#000"
                        multiline={true}
                        numberOfLines={10}
                        style={{ height: 150, textAlignVertical: 'top' }}
                        value={address}
                    />

                    <Text className="px-2 text-[16px] font-[600] my-[10px]">Pick Up Date</Text>
                    <HorizontalDatepicker
                        mode="gregorian"
                        startDate={today}
                        endDate={endDate}
                        initialSelectedDate={today}
                        onSelectedDateChange={(date) => setSelectedDate(date)}
                        selectedItemWidth={170}
                        unselectedItemWidth={38}
                        itemHeight={38}
                        itemRadius={10}
                        selectedItemTextStyle={styles.selectedItemTextStyle}
                        unselectedItemTextStyle={styles.unselectedItemTextStyle}
                        selectedItemBackgroundColor="#222831"
                        unselectedItemBackgroundColor="#ececec"
                        flatListContainerStyle={styles.flatListContainerStyle}
                    />

                    <Text className="px-2 text-[16px] font-[600] my-[10px]">Select Time</Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {times.map((item, index) => (
                            <Pressable key={index}
                                // className="m-[10px] rounded-xl p-[15px] border-gray-300 bg-gray-300 border-[0.7px]"
                                onPress={() => setSelectedTime(item.time)}
                                style={selectedTime === (item.time) ? {
                                    margin: 10,
                                    borderRadius: 7,
                                    padding: 10,
                                    borderColor: "gray",
                                    backgroundColor: "#222831",
                                    borderWidth: 0.7,
                                    // color: "fff"
                                } :
                                    {
                                        margin: 10,
                                        borderRadius: 7,
                                        padding: 10,
                                        borderColor: "gray",
                                        // backgroundColor: "#fff",
                                        borderWidth: 0.7
                                    }}
                            >
                                <Text style={selectedTime === item.time ? { color: 'white' } : { color: 'black' }}>{item.time}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>

                    <Text className="px-2 text-[16px] font-[600] my-[10px]">Delivery Date</Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {deliveryTime.map((item, index) => (
                            <Pressable key={index}
                                onPress={() => setDelivery(item.name)}
                                style={delivery.includes(item.name) ? {
                                    margin: 10,
                                    borderRadius: 7,
                                    padding: 10,
                                    borderColor: "gray",
                                    backgroundColor: "#222831",
                                    borderWidth: 0.7,
                                    // color: "#fff"
                                } :
                                    {
                                        margin: 10,
                                        borderRadius: 7,
                                        padding: 10,
                                        borderColor: "gray",
                                        //  backgroundColor: "gray", 
                                        borderWidth: 0.7
                                    }}
                            >
                                <Text style={delivery === item.name ? { color: 'white' } : { color: 'black' }}>{item.name}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>


                    {/* <ScrollView
                    // style={{ flex: 1 }}
                > */}
                    <Text className="px-2 text-[16px] font-[600] my-[10px]">{mapRegion ? 'Your Current Location' : 'Allow Loaction access to see your exact Loaction'}</Text>
                    <View style={{ width: '100%', height: 400 }} className="mt-1 flex items-center justify-center mx-auto">
                        <MapView
                            style={{ width: '100%', height: 400, borderRadius: '50px' }} // Adjust height as needed
                            className="rounded-xl"
                            region={mapRegion}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            customMapStyleId={"2416e751bcfc2010"}
                        >
                            <Marker title='Marker' coordinate={mapRegion} />
                        </MapView>
                    </View>
                </ScrollView>

            </SafeAreaView>

            {total === 0 ? (
                null
            ) : (
                <Pressable className="bg-[#088F8F] p-[10px] mb-[40px] m-[15px] rounded-xl flex-row items-center justify-between mt-auto">
                    <View>
                        <Text className="text-base font-psemibold text-white">{cart.length} items | ${total}</Text>
                        <Text className="text-[11px] font-psemibold text-white my-[6px]">Extra charges might apply</Text>
                    </View>


                    <Pressable onPress={ProceedToCart}>
                        <Text className="text-[14px] font-pbold text-white">Proceed To Cart</Text>
                    </Pressable>
                </Pressable>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    selectedItemTextStyle: {
        color: 'white',
    },
    unselectedItemTextStyle: {
        color: 'black',
    },
    flatListContainerStyle: {
        marginVertical: 10,
    },
});

export default PickUpScreen