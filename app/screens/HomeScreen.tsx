import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'
import Banners from '@/components/home-screen/Banners';
import Popular from '@/components/home-screen/popular-products/Popular';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, } from '@expo-google-fonts/poppins';
import { FontStyles } from '@/components/utils/fontstype';
import PdtCategories from '@/components/home-screen/product-categories/PdtCategories';


const HomeScreen:React.FC = () => {
    const currentTime = new Date()
    const currentHour = currentTime.getHours()
    let greetingMessage = ''

    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = 'Good morning!';
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = 'Good afternoon!';
    } else {
        greetingMessage = 'Good evening!';
    }

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded) {
    return null; // Or render a loading indicator
    }

    const fontStyles: FontStyles = {
        regular: 'Poppins_400Regular',
        semibold: 'Poppins_600SemiBold'
    }

  return (
    <ScrollView style={tw`px-2 py-3`}>
         {/* Header component */} 
        <View style={tw`flex flex-row justify-between h-[50px]`}>
            <View style={tw`flex flex-row`}>
            <View>
                <Image source={require('../../assets/images/p.png')} style={[tw`w-[25px] h-[25px]`, styles.imagePosition]} />
            </View>
            <View style={tw``}>
                <Text style={[tw``,{fontSize: 12, fontFamily: 'Poppins_400Regular'}]}>{greetingMessage}</Text>
                <Text style={[tw``, {fontSize: 12, fontFamily: 'Poppins_600SemiBold'}]}>Mary Joy</Text>
            </View>
            </View>
            <View style={tw`flex flex-row justify-between gap-3`}>
            <View><Ionicons name='cart-outline' size={24}></Ionicons></View>
            <View><Ionicons name='notifications-outline' size={24}></Ionicons></View>
            </View>
        </View>

         {/* Search component */} 
        <View style={tw`w-full relative`}>
            <TextInput 
            style={tw`border border-blue-300 bg-gray-200 py-1 pr-3 pl-10 rounded-3xl w-full`}
            placeholder='search products on Phamaride'/>
            <Ionicons name='search' style={tw`absolute left-3 top-2`} color={'gray'} size={22}></Ionicons>
        </View>

        {/* Banner component */}        
        <View style={tw `mb-5`}><Banners /></View>

         {/* contact us component */} 
        <View style={tw `flex flex-row w-full justify-between mb-5`}>
            <View style={tw `flex flex-row items-center justify-between border border-red-400 w-[45%] py-2 px-2 rounded-lg`}>
                <Text style={tw`font-semibold text-red-500`}>Call us</Text>
                <Ionicons name='call-outline' size={20} style={tw`text-red-600`}></Ionicons>
            </View>
            <View style={tw `flex flex-row items-center justify-between border border-green-400 w-[45%] py-2 px-2 rounded-lg`}>
                <Text style={tw`font-semibold text-green-500`}>Whatsapp us</Text>
                <Ionicons name='logo-whatsapp' size={20} style={tw`text-green-600`}></Ionicons>
            </View>
        </View>

        {/* popular products component */}
        <View>
            <Popular fontStyles={fontStyles}/>
        </View>

        {/* products categories */}
        <View><PdtCategories fontStyles={fontStyles} /></View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    imagePosition: {
        objectFit: 'contain',
    }
})