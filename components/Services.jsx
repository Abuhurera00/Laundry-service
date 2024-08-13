import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'

const Services = () => {
    const services = [
        {
          id: "0",
          image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
          name: "Washing",
         
        },
        {
          id: "11",
          image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
          name: "Laundry"
        },
        {
          id: "12",
          image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
          name: "Wash & Iron",
         
        },
        {
          id: "13",
          image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
          name: "Cleaning",
        },
       
      ];


  return (
    <View className="p-2">
        <Text className="text-[16px] font-psemibold">Services Available</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index)=>(
            <Pressable className="m-2 bg-slate-300 p-10 rounded-2xl" key={index}>
                <Image source={{uri: service.image}} 
                style={{width: 70, height: 70}}
                resizeMode='contain' />
                <Text className="text-center mt-3 font-psemibold">{service.name}</Text>
            </Pressable>
        ))}
    </ScrollView>
    </View>
  )
}

export default Services