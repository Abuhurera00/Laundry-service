// import { View, Text, SafeAreaView, Alert, Pressable, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import * as Location from 'expo-location'
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import Feather from '@expo/vector-icons/Feather';
// import Carousal from '../../components/Carousal';
// import Services from '../../components/Services';
// import DressItem from '../../components/DressItem';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProducts } from '../../ProductReducer';
// import { useNavigation } from '@react-navigation/native';
// import { collection, getDoc, getDocs } from 'firebase/firestore';
// import { db } from '../../firebase';


// const HomeScreen = () => {
//   const cart = useSelector((state) => state.cart.cart);
//   const [items, setItems] = useState([]);
//   const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);
//   const navigation = useNavigation();
//   // console.log(cart);
//   const [displayCurrentAddress, setDisplayCurrentAddress] = useState("We are loading your location");
//   const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);

//   useEffect(() => {
//     checkIfLocationEnabled();
//     getCurrentLocation();

//   }, []);

//   const checkIfLocationEnabled = async () => {
//     let enabled = await Location.hasServicesEnabledAsync();
//     if (!enabled) {
//       Alert.alert('Location services not enabled', 'Please Enable the location services', [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//         { text: 'OK', onPress: () => console.log('OK Pressed') },
//       ]);
//     } else {
//       setLocationServicesEnabled(enabled);
//     }
//   }

//   const getCurrentLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();

//     if (status !== "granted") {
//       Alert.alert('Permission denied', 'Allow the app to use the location services', [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//         { text: 'OK', onPress: () => console.log('OK Pressed') },
//       ]);
//     }

//     const { coords } = await Location.getCurrentPositionAsync();
//     //  console.log(coords);
//     if (coords) {
//       const { latitude, longitude } = coords;

//       // console.log(latitude, longitude);

//       let response = await Location.reverseGeocodeAsync({
//         latitude,
//         longitude
//       });
//       // console.log(response);
//       for (let item of response) {
//         let address = `${item.name} ${item.city} ${item.postalCode}`;
//         setDisplayCurrentAddress(address);
//       }

//     }
//   };


//   const product = useSelector((state) => state.product.product);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (product.length > 0) return;

//     const fetchProduct = async () => {
//       // services.map((service) => dispatch(getProducts(service)));
//       const colRef = collection(db, "types");
//       const docsSnap = await getDocs(colRef);

//       docsSnap.forEach((doc) => {
//     items.push(doc.data());
//       });
//       items?.map((service) => dispatch(getProducts(service)))
//     }
//     fetchProduct();
//   }, []);
//   // console.log(product);
//   // services products=======================-
//   const services = [
//     {
//       id: "0",
//       image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
//       name: "shirt",
//       quantity: 0,
//       price: 10,
//     },
//     {
//       id: "11",
//       image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
//       name: "T-shirt",
//       quantity: 0,
//       price: 10,
//     },
//     {
//       id: "12",
//       image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
//       name: "dresses",
//       quantity: 0,
//       price: 10,
//     },
//     {
//       id: "13",
//       image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
//       name: "jeans",
//       quantity: 0,
//       price: 10,
//     },
//     {
//       id: "14",
//       image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
//       name: "Sweater",
//       quantity: 0,
//       price: 10,
//     },
//     {
//       id: "15",
//       image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
//       name: "shorts",
//       quantity: 0,
//       price: 10,
//     },
//     {
//       id: "16",
//       image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
//       name: "Sleeveless",
//       quantity: 0,
//       price: 10,
//     },
//   ];



//   return (
//     <>
//       <SafeAreaView className="bg-[#F0F0F0] h-full">
//         <ScrollView>
//           {/* Location and profile-=-=-=-=-=-=-====-=-=-=-=-==-=-=-= */}
//           <View className="flex-row items-center justify-center mt-6 p-[10]">
//             <MaterialIcons name="location-on" size={33} color="#fd5c63" />
//             <View className="mx-[10px] w-[70%]">
//               <Text className="text-base font-psemibold">Home</Text>
//               <Text className="font-pmedium text-[12px] text-black-100">{displayCurrentAddress}</Text>
//             </View>

//             <Pressable onPress={() => navigation.navigate("screens/ProfileScreen")} className="ml-auto mr-[7]">
//               <Image className="w-[35] h-[35] rounded-full" source={{ uri: "https://lh3.google.com/u/0/ogw/AF2bZygK3usWmKjF5FL4t5pA7iT5PuY8q6QnfRFmgSU3qUjgzA=s64-c-mo" }} />
//             </Pressable>
//           </View>
//           {/* search bar-=-=-=-=-=-=-=--------=-=-=-=-=-===============-=-=-=-- */}

//           <View className="px-2 space-y-6">
//             <View className="border-2 border-gray-400 w-full h-[50px] px-4 bg-gray-200 rounded-2xl focus:border-gray-600 items-center flex-row space-x-4">
//               <TextInput
//                 className="text-base mt-0.5 text-white flex-1 font-pregular"
//                 // value={query}
//                 placeholder="Search for items and More"
//                 placeholderTextColor="#000"
//               // onChangeText={(e)=> setQuery(e)}
//               />

//               <TouchableOpacity className="fill-black-200">
//                 {/* <Image source={icons.search} className="w-5 h-5 fill-black-200" resizeMode='contain' /> */}
//                 <Feather name="search" size={24} color="black" />
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Image Carousal+_+_+_+_+_+_========================/././ */}
//           <Carousal />

//           {/* Services Component */}
//           <Services />


//           {/* Render all the products===========-=-=-====-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
//           {product.map((item, index) => (
//             <DressItem item={item} key={index} />
//           ))}

//         </ScrollView>


//         {total === 0 ? (
//           null
//         ) : (
//           <Pressable className="bg-[#088F8F] p-[10px] mb-[40px] m-[15px] rounded-xl flex-row items-center justify-between">
//             <View>
//               <Text className="text-base font-psemibold text-white">{cart.length} items | ${total}</Text>
//               <Text className="text-[11px] font-psemibold text-white my-[6px]">Extra charges might apply</Text>
//             </View>


//             <Pressable onPress={()=> navigation.navigate("screens/PickUpScreen")}>
//               <Text className="text-[14px] font-pbold text-white">Proceed To Pickup</Text>
//             </Pressable>
//           </Pressable>
//         )}
//       </SafeAreaView>
//     </>
//   )
// }

// export default HomeScreen






























































































































































































































// import { View, Text, SafeAreaView, Alert, Pressable, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import * as Location from 'expo-location'
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import Feather from '@expo/vector-icons/Feather';
// import Carousal from '../../components/Carousal';
// import Services from '../../components/Services';
// import DressItem from '../../components/DressItem';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProducts } from '../../ProductReducer';
// import { useNavigation } from '@react-navigation/native';
// import { collection, getDoc, getDocs } from 'firebase/firestore';
// import { db } from '../../firebase';
// import { getAuth } from 'firebase/auth';
// import { StatusBar } from 'expo-status-bar';


// const HomeScreen = () => {
//   const cart = useSelector((state) => state.cart.cart);
//   const [items, setItems] = useState([]);
//   const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);
//   const navigation = useNavigation();
//   // console.log(cart);
//   const [displayCurrentAddress, setDisplayCurrentAddress] = useState("We are loading your location");
//   const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
//   const [currentLatitude, setCurrentLatitude] = useState("We are loading your location");
//   const [currentLongitude, setCurrentLongitude] = useState("We are loading your location");


//   useEffect(() => {
//     checkIfLocationEnabled();
//     getCurrentLocation();

//   }, []);

//   const checkIfLocationEnabled = async () => {
//     let enabled = await Location.hasServicesEnabledAsync();
//     if (!enabled) {
//       Alert.alert('Location services not enabled', 'Please Enable the location services', [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//         { text: 'OK', onPress: () => console.log('OK Pressed') },
//       ]);
//     } else {
//       setLocationServicesEnabled(enabled);
//     }
//   }

//   const getCurrentLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();

//     if (status !== "granted") {
//       Alert.alert('Permission denied', 'Allow the app to use the location services', [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//         { text: 'OK', onPress: () => console.log('OK Pressed') },
//       ]);
//     }

//     const { coords } = await Location.getCurrentPositionAsync();
//     //  console.log(coords);
//     if (coords) {
//       const { latitude, longitude } = coords;

//       // console.log(latitude, longitude);

//       // setDisplayCurrentAddress(coords);

//       let response = await Location.reverseGeocodeAsync({
//         latitude,
//         longitude
//       });
//       // console.log(latitude, longitude);
//       for (let item of response) {
//         let address = `${item.name} ${item.city} ${item.postalCode}`;
//         setDisplayCurrentAddress(address);
//         setCurrentLatitude(latitude);
//         setCurrentLongitude(longitude);
//       }

//     }
//   };


//   const product = useSelector((state) => state.product.product);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (product.length > 0) return;

//     const fetchProduct = async () => {
//       // services.map((service) => dispatch(getProducts(service)));
//       const colRef = collection(db, "types");
//       const docsSnap = await getDocs(colRef);

//       docsSnap.forEach((doc) => {
//         items.push(doc.data());
//       });
//       items?.map((service) => dispatch(getProducts(service)))
//     }
//     fetchProduct();
//   }, []);
//   // console.log(product);
//   // services products=======================-
//   const services = [
//     {
//       id: "0",
//       image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
//       name: "shirt",
//       quantity: 0,
//       price: 10,
//     },
//     {
//       id: "11",
//       image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
//       name: "T-shirt",
//       quantity: 0,
//       price: 10,
//     },
//     {
//       id: "12",
//       image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
//       name: "dresses",
//       quantity: 0,
//       price: 10,
//     },
//     {
//       id: "13",
//       image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
//       name: "jeans",
//       quantity: 0,
//       price: 10,
//     },
//     {
//       id: "14",
//       image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
//       name: "Sweater",
//       quantity: 0,
//       price: 10,
//     },
//     {
//       id: "15",
//       image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
//       name: "shorts",
//       quantity: 0,
//       price: 10,
//     },
//     {
//       id: "16",
//       image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
//       name: "Sleeveless",
//       quantity: 0,
//       price: 10,
//     },
//   ];






//   // =///=/=/=/==/==/=/==/===//=//======//==/=//==/==/=/
//   const [profileImageUrl, setProfileImageUrl] = useState(null);

//   useEffect(() => {
//     const auth = getAuth();
//     const user = auth.currentUser;

//     if (user) {
//       // Use ui-avatars.com to generate a profile image based on the user's email
//       const initials = user.email.charAt(0).toUpperCase();
//       const avatarUrl = `https://ui-avatars.com/api/?name=${initials}&background=random&format=png`;
//       console.log(avatarUrl);
//       setProfileImageUrl(avatarUrl);
//     }
//   }, []);


//   return (
//     <>
//       <SafeAreaView className="bg-[#F0F0F0] h-full">
//         <ScrollView showsVerticalScrollIndicator={false}>
//           {/* Location and profile-=-=-=-=-=-=-====-=-=-=-=-==-=-=-= */}
//           <View className="flex-row items-center justify-center mt-6 p-[10]">
//             <MaterialIcons name="location-on" size={33} color="#fd5c63" />
//             <View className="mx-[10px] w-[70%]">
//               <Text className="text-base font-psemibold">Home</Text>
//               <Text className="font-pmedium text-[12px] text-black-100">{displayCurrentAddress}</Text>
//               {/* <Text className="font-pmedium text-[12px] text-black-100">{currentLatitude}</Text>
//               <Text className="font-pmedium text-[12px] text-black-100">{currentLongitude}</Text> */}
//             </View>

//             <Pressable onPress={() => navigation.navigate("screens/ProfileScreen")} className="ml-auto mr-[7]">
//               <Image 
//               className="w-[35] h-[35] rounded-full"
//                 // source={{ uri: "https://lh3.google.com/u/0/ogw/AF2bZygK3usWmKjF5FL4t5pA7iT5PuY8q6QnfRFmgSU3qUjgzA=s64-c-mo" }} 
//                 source={{ uri: profileImageUrl }}
//                 // defaultSource={{ uri: 'https://lh3.google.com/u/0/ogw/AF2bZygK3usWmKjF5FL4t5pA7iT5PuY8q6QnfRFmgSU3qUjgzA=s64-c-mo' }}
//                 // style={{ width: 100, height: 100 }}
//                 onError={(error) => console.log('Image loading error:', error)}
//               />
//             </Pressable>
//           </View>
//           {/* search bar-=-=-=-=-=-=-=--------=-=-=-=-=-===============-=-=-=-- */}

//           <View className="px-2 space-y-6">
//             <View className="border-2 border-gray-400 w-full h-[50px] px-4 bg-gray-200 rounded-2xl focus:border-gray-600 items-center flex-row space-x-4">
//               <TextInput
//                 className="text-base mt-0.5 text-white flex-1 font-pregular"
//                 // value={query}
//                 placeholder="Search for items and More"
//                 placeholderTextColor="#000"
//               // onChangeText={(e)=> setQuery(e)}
//               />

//               <TouchableOpacity className="fill-black-200">
//                 {/* <Image source={icons.search} className="w-5 h-5 fill-black-200" resizeMode='contain' /> */}
//                 <Feather name="search" size={24} color="black" />
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Image Carousal+_+_+_+_+_+_========================/././ */}
//           <Carousal />

//           {/* Services Component */}
//           <Services />


//           {/* Render all the products===========-=-=-====-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
//           {product.map((item, index) => (
//             <DressItem item={item} key={index} />
//           ))}

//         </ScrollView>


//         {total === 0 ? (
//           null
//         ) : (
//           <Pressable className="bg-[#088F8F] p-[10px] mb-[40px] m-[15px] rounded-xl flex-row items-center justify-between">
//             <View>
//               <Text className="text-base font-psemibold text-white">{cart.length} items | AED {total}</Text>
//               <Text className="text-[11px] font-psemibold text-white my-[6px]">Extra charges might apply</Text>
//             </View>


//             <Pressable onPress={() => navigation.navigate("screens/PickUpScreen", { address: displayCurrentAddress, latitude: currentLatitude, longitude: currentLongitude })}>
//               <Text className="text-[14px] font-pbold text-white">Proceed To Pickup</Text>
//             </Pressable>
//           </Pressable>
//         )}
//       </SafeAreaView>
//       <StatusBar backgroundColor='#F0F0F0' style='dark' />
//     </>
//   )
// }

// export default HomeScreen


































































































































import { View, Text, SafeAreaView, Alert, Pressable, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import Carousal from '../../components/Carousal';
import Services from '../../components/Services';
import DressItem from '../../components/DressItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../ProductReducer';
import { useNavigation } from '@react-navigation/native';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth } from 'firebase/auth';
import { StatusBar } from 'expo-status-bar';


const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [items, setItems] = useState([]);
  const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0);
  const navigation = useNavigation();
  // console.log(cart);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState("We are loading your location");
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [currentLatitude, setCurrentLatitude] = useState("We are loading your location");
  const [currentLongitude, setCurrentLongitude] = useState("We are loading your location");
  // ==============================
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();

  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert('Location services not enabled', 'Please Enable the location services', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    } else {
      setLocationServicesEnabled(enabled);
    }
  }

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert('Permission denied', 'Allow the app to use the location services', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }

    const { coords } = await Location.getCurrentPositionAsync();
    //  console.log(coords);
    if (coords) {
      const { latitude, longitude } = coords;

      // console.log(latitude, longitude);

      // setDisplayCurrentAddress(coords);

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });
      // console.log(latitude, longitude);
      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setDisplayCurrentAddress(address);
        setCurrentLatitude(latitude);
        setCurrentLongitude(longitude);
      }

    }
  };


  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) {
      setFilteredProducts(product);
      return;
    }

    const fetchProduct = async () => {
      // services.map((service) => dispatch(getProducts(service)));
      const colRef = collection(db, "types");
      const docsSnap = await getDocs(colRef);

      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
      items.map((service) => dispatch(getProducts(service)))
      setFilteredProducts(items);
    }
    fetchProduct();
  }, []);


  useEffect(() => {
    if (searchQuery) {
      const filtered = product.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(product);
    }
  }, [searchQuery, product]);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };


  // console.log(product);
  // services products=======================-
  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "dresses",
      quantity: 0,
      price: 10,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "jeans",
      quantity: 0,
      price: 10,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 10,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "shorts",
      quantity: 0,
      price: 10,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 10,
    },
  ];






  // =///=/=/=/==/==/=/==/===//=//======//==/=//==/==/=/
  const [profileImageUrl, setProfileImageUrl] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      // Use ui-avatars.com to generate a profile image based on the user's email
      const initials = user.email.charAt(0).toUpperCase();
      const avatarUrl = `https://ui-avatars.com/api/?name=${initials}&background=random&format=png`;
      console.log(avatarUrl);
      setProfileImageUrl(avatarUrl);
    }
  }, []);


  return (
    <>
      <SafeAreaView className="bg-[#F0F0F0] h-full">
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Location and profile-=-=-=-=-=-=-====-=-=-=-=-==-=-=-= */}
          <View className="flex-row items-center justify-center mt-6 p-[10]">
            <MaterialIcons name="location-on" size={33} color="#fd5c63" />
            <View className="mx-[10px] w-[70%]">
              <Text className="text-base font-psemibold">Home</Text>
              <Text className="font-pmedium text-[12px] text-black-100">{displayCurrentAddress}</Text>
              {/* <Text className="font-pmedium text-[12px] text-black-100">{currentLatitude}</Text>
              <Text className="font-pmedium text-[12px] text-black-100">{currentLongitude}</Text> */}
            </View>

            <Pressable onPress={() => navigation.navigate("screens/ProfileScreen")} className="ml-auto mr-[7]">
              <Image
                className="w-[35] h-[35] rounded-full"
                // source={{ uri: "https://lh3.google.com/u/0/ogw/AF2bZygK3usWmKjF5FL4t5pA7iT5PuY8q6QnfRFmgSU3qUjgzA=s64-c-mo" }} 
                source={{ uri: profileImageUrl }}
                // defaultSource={{ uri: 'https://lh3.google.com/u/0/ogw/AF2bZygK3usWmKjF5FL4t5pA7iT5PuY8q6QnfRFmgSU3qUjgzA=s64-c-mo' }}
                // style={{ width: 100, height: 100 }}
                onError={(error) => console.log('Image loading error:', error)}
              />
            </Pressable>
          </View>
          {/* search bar-=-=-=-=-=-=-=--------=-=-=-=-=-===============-=-=-=-- */}

          <View className="px-2 space-y-6">
            <View className="border-2 border-gray-400 w-full h-[50px] px-4 bg-gray-200 rounded-2xl focus:border-gray-600 items-center flex-row space-x-4">
              <TextInput
                className="text-base mt-0.5 text-black flex-1 font-pregular"
                value={searchQuery}
                placeholder="Search for items and More"
                placeholderTextColor="#000"
                onChangeText={handleSearch}
              />

              <TouchableOpacity className="fill-black-200">
                {/* <Image source={icons.search} className="w-5 h-5 fill-black-200" resizeMode='contain' /> */}
                <Feather name="search" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Image Carousal+_+_+_+_+_+_========================/././ */}
          <Carousal />

          {/* Services Component */}
          <Services />


          {/* Render all the products===========-=-=-====-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
          {filteredProducts.map((item, index) => (
            <DressItem item={item} key={index} />
          ))}

        </ScrollView>


        {total === 0 ? (
          null
        ) : (
          <Pressable className="bg-[#088F8F] p-[10px] mb-[40px] m-[15px] rounded-xl flex-row items-center justify-between">
            <View>
              <Text className="text-base font-psemibold text-white">{cart.length} items | AED {total}</Text>
              <Text className="text-[11px] font-psemibold text-white my-[6px]">Extra charges might apply</Text>
            </View>


            <Pressable onPress={() => navigation.navigate("screens/PickUpScreen", { address: displayCurrentAddress, latitude: currentLatitude, longitude: currentLongitude })}>
              <Text className="text-[14px] font-pbold text-white">Proceed To Pickup</Text>
            </Pressable>
          </Pressable>
        )}
      </SafeAreaView>
      <StatusBar backgroundColor='#F0F0F0' style='dark' />
    </>
  )
}

export default HomeScreen
