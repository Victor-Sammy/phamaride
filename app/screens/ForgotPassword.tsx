import { View, Text, TextInput, Pressable, Image, StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import tw from 'twrnc'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, } from '@expo-google-fonts/poppins';
import { useState } from 'react';
import CustomButton from '@/components/custom-components/CustomButton';

const ForgotPassword:React.FC = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null; // Or render a loading indicator
  }

  const handleReset =()=> {}

  const handleNav = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
        <View style={tw`h-44 w-full mb-3`}>
        <Image source={require('../../assets/images/login-img.png')} style={[tw`h-44 w-full`, styles.imagePosition]} />
      </View>
      <View style={tw`px-8 w-full flex items-center`}>
      <Image source={require('../../assets/images/p.png')} style={tw`h-[45px] w-[35px]`} />
      <Text style={[tw`text-[#007FFF]`,{fontSize: 20 ,fontFamily: 'Poppins_600SemiBold',}]}>Forgot Your Password?</Text>
      <Text style={[tw``, {fontSize: 14 ,fontFamily: 'Poppins_400Regular'}]}>Enter email to reset your account</Text>
      <TextInput
        style={tw`mt-4 border border-gray-400 py-3 px-3 rounded-lg w-full`}
        value={email}
        onChangeText={setEmail}
        placeholder="Email address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      </View>
      <View style={tw`px-8`}>
      <CustomButton title='RESET PASSWORD' onPress={handleReset} />
      <Pressable onPress={handleNav}>
      <Text style={tw`text-[#007FFF] text-center mt-5`}>Remembered your Password? Sign in</Text>
      </Pressable>
      </View>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    imagePosition: {
      objectFit: 'contain',
    }
})