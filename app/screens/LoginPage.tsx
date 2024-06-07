import { StyleSheet, Text, TextInput, Pressable, View, ScrollView, Image } from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import tw from 'twrnc'
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, } from '@expo-google-fonts/poppins';
import { useState } from 'react';
import CustomButton from '@/components/custom-components/CustomButton';
import passwordValidator from '@/components/utils/passwordValidator';
//import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

const LoginPage:React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null; // Or render a loading indicator
  }

  const handleResetNav = () => {
    navigation.navigate('ForgotPwd');
  };

  const handlePwdChange =(value: string)=> {
    setPassword(value)
    setIsValid(passwordValidator(value))
  }

  const handleNav = () => {
    navigation.navigate('Signup');
  };

  const handleSignIn = () => {
    // console.log('Email:', email);
    // console.log('Password:', password);
    navigation.navigate('Home')
  };

  return (
    <ScrollView style={tw``}>
      <View style={tw`h-44 w-full mb-3`}>
        <Image source={require('../../assets/images/login-img.png')} style={[tw`h-44 w-full`, styles.imagePosition]} />
      </View>
      <View style={tw`px-8 w-full flex items-center`}>
      <Image source={require('../../assets/images/p.png')} style={tw`h-[45px] w-[35px]`} />
      <Text style={[tw`text-[#007FFF]`,{fontSize: 20 ,fontFamily: 'Poppins_600SemiBold',}]}>Welcome back!</Text>
      <Text style={[tw``, {fontSize: 14 ,fontFamily: 'Poppins_400Regular'}]}>Login to your Phamaride account</Text>
      <TextInput
        style={tw`mt-4 border border-gray-400 py-3 px-3 rounded-lg w-full`}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={tw`mt-3 mb-3 border border-gray-400 py-3 px-3 rounded-lg w-full`}
        value={password}
        onChangeText={handlePwdChange}
        placeholder="Enter password"
        secureTextEntry
      />
      <Pressable onPress={handleResetNav}>
      <Text style={tw`text-[#007FFF]`}>Forgot Password?</Text>
      </Pressable>
      </View>
      <View style={tw`px-8`}>
      <CustomButton title='Sign In' onPress={handleSignIn} />
      </View>
      <View style={tw`flex-1 justify-center items-center my-3`}>
      <Text style={tw`text-center`}>Don't have an account? 
        <Text> </Text>
        <Text style={tw`text-[#007FFF]`} onPress={handleNav}>Sign Up</Text>
        </Text>
      </View>
    </ScrollView>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  imagePosition: {
    objectFit: 'contain',
  }
})
