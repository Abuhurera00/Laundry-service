// import { View, Text } from 'react-native'
// import React from 'react'
// import { SliderBox } from "react-native-image-slider-box";
// // import { width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

// const Carousal = () => {
//     const images = [
//         "https://img.freepik.com/free-vector/laundry-room-interior-design-with-furnitures-decorations_1308-75966.jpg",
//         "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D",
//         "https://plus.unsplash.com/premium_photo-1663036970563-99624abc950e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D"
//     ];

//     return (
//         <View>
//             <SliderBox images={images} 
//             autoPlay circleLoop dotColor={'#13274f'} inactiveDotColor="#90A4AE" 
//             ImageComponentStyle={{
//                 borderRadius: 6,
//                 width: "94%"
//             }}
//              />
//         </View>
//     )
// }

// export default Carousal






































































// import React from 'react';
// import { View, Dimensions, Image, ActivityIndicator } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';

// const { width } = Dimensions.get('window');

// const Carousal = () => {
//     const images = [
//         "https://img.freepik.com/free-vector/laundry-room-interior-design-with-furnitures-decorations_1308-75966.jpg",
//         "https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
//         "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D",
//         "https://plus.unsplash.com/premium_photo-1663036970563-99624abc950e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D"
//     ];

//     return (
//         <View className=" mt-3 h-52 items-center">
//             <Carousel
//             borderRadius={10}
//             loop
//             width={width * 0.94}
//             height={200}
//             data={images}
//             // autoPlay={true}
//             scrollAnimationDuration={1000}
//             onSnapToItem={(index) => console.log('current index:', index)}
//                 renderItem={({ item }) => (
//                     <View>
//                         {/* <ActivityIndicator size="small" /> */}
//                     <Image 
//                         source={{ uri: item }} 
//                         style={{ 
//                             width: width * 0.94, 
//                             height: 200, 
//                             borderRadius: 8 
//                         }} 
//                     />
//                     </View>
//                 )}
//                 // width={width}
//                 // height={200}
//                 autoPlay
//                 // loop
//             />
//         </View>
//     );
// };

// export default Carousal;

























// import React, { useState } from 'react';
// import { View, Dimensions, Image, ActivityIndicator } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
// // import { GestureHandlerRootView } from 'react-native-gesture-handler';

// const { width } = Dimensions.get('window');

// const Carousal = () => {
//     const [loading, setLoading] = useState(true);

//     const images = [
//         "https://img.freepik.com/free-vector/laundry-room-interior-design-with-furnitures-decorations_1308-75966.jpg",
//         "https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
//         "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D",
//         "https://plus.unsplash.com/premium_photo-1663036970563-99624abc950e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D"
//     ];

//     const handleImageLoad = () => {
//         setLoading(false);
//     };

//     return (
//         <View className="mt-3 h-52 items-center">
//             {/* <GestureHandlerRootView className="flex-1"> */}
//             <Carousel
//                 borderRadius={10}
//                 loop
//                 width={width * 0.94}
//                 height={200}
//                 data={images}
//                 autoPlay
//                 scrollAnimationDuration={1000}
//                 onSnapToItem={(index) => console.log('current index:', index)}
//                 renderItem={({ item }) => (
//                     <View>
//                         {loading && <ActivityIndicator size="small" />}
//                         <Image 
//                             source={{ uri: item }} 
//                             style={{ 
//                                 width: width * 0.94, 
//                                 height: 200, 
//                                 borderRadius: 8 
//                             }}
//                             onLoad={handleImageLoad}
//                         />
//                     </View>
//                 )}
//                 shouldOptimizeUpdates={true}
//             />
//             {/* </GestureHandlerRootView> */}
//         </View>
//     );
// };

// export default Carousal;






















































// import React, { useState, useRef, useEffect } from 'react';
// import { View, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';

// const { width } = Dimensions.get('window');

// const Carousal = () => {
//     const images = [
//         "https://img.freepik.com/free-vector/laundry-room-interior-design-with-furnitures-decorations_1308-75966.jpg",
//         "https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
//         "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D",
//         "https://plus.unsplash.com/premium_photo-1663036970563-99624abc950e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D"
//     ];

//     const scrollViewRef = useRef(null);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//         }, 3000); // Change image every 3 seconds

//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         if (scrollViewRef.current) {
//             scrollViewRef.current.scrollTo({ x: currentIndex * width, animated: true });
//         }
//     }, [currentIndex]);

//     return (
//         <View style={styles.container}>
//             <ScrollView
//                 ref={scrollViewRef}
//                 horizontal
//                 pagingEnabled
//                 showsHorizontalScrollIndicator={false}
//                 onMomentumScrollEnd={(event) => {
//                     const newIndex = Math.floor(event.nativeEvent.contentOffset.x / width);
//                     setCurrentIndex(newIndex);
//                 }}
//             >
//                 {images.map((image, index) => (
//                     <Image
//                         key={index}
//                         source={{ uri: image }}
//                         style={styles.image}
//                     />
//                 ))}
//             </ScrollView>
            
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 12,
//         height: 200,
//         alignItems: 'center',
//     },
//     image: {
//         width: width * 0.94,
//         height: 200,
//         borderRadius: 8,
//         marginHorizontal: width * 0.03,
//     },
// });

// export default Carousal;














































import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';





const { width } = Dimensions.get('window');

const Carousal = () => {
    const images = [
        "https://img.freepik.com/free-vector/laundry-room-interior-design-with-furnitures-decorations_1308-75966.jpg",
        "https://media.istockphoto.com/id/1247884083/vector/laundry-service-room-vector-illustration-washing-and-drying-machines-with-cleansers-on-shelf.jpg?s=612x612&w=0&k=20&c=myaNEKlqX7R--bzWGDoMI7PhdxG_zdQTKYEBlymJQGk=",
        "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1663036970563-99624abc950e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D"
    ];

    const scrollViewRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Clone the first and last image to create an infinite loop effect
    const extendedImages = [images[images.length - 1], ...images, images[0]];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: (currentIndex + 1) * width, animated: true });
        }
    }, [currentIndex]);

    const onScrollEnd = (event) => {
        let newIndex = Math.floor(event.nativeEvent.contentOffset.x / width) - 1;

        if (newIndex === -1) {
            newIndex = images.length - 1;
            scrollViewRef.current.scrollTo({ x: images.length * width, animated: false });
        } else if (newIndex === images.length) {
            newIndex = 0;
            scrollViewRef.current.scrollTo({ x: width, animated: false });
        }

        setCurrentIndex(newIndex);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={onScrollEnd}
            >
                {extendedImages.map((image, index) => (
                    <Image
                        key={index}
                        source={{ uri: image }}
                        style={styles.image}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        height: 200,
        alignItems: 'center',
    },
    image: {
        width: width * 0.94,
        height: 200,
        borderRadius: 8,
        marginHorizontal: width * 0.03,
    },
});

export default Carousal;

