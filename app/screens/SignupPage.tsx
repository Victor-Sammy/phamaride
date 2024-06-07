import React from 'react'
import { Text, TextInput, View, ScrollView } from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import tw from 'twrnc'
import twd from '../../tailwind.'
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, } from '@expo-google-fonts/poppins';
import { useState } from 'react';
import CustomButton from '@/components/custom-components/CustomButton';
import passwordValidator from '@/components/utils/passwordValidator';

const SignupPage:React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(true);

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
    });

    if (!fontsLoaded) {
    return null; // Or render a loading indicator
    }

    const handleNav = () => {
      navigation.navigate('Login')
    };

    const handlePwdChange =(value: string)=> {
      setPassword(value)
      setIsValid(passwordValidator(value))
    }

    const handleSignUp = () => {
    // Handle form submission logic here (e.g., API call, validation)
    // console.log('Email:', email);
    // console.log('Password:', password);
    };

  return (
    <ScrollView style={tw`px-8 w-full`}>
      <Text style={[tw `pt-2`,{fontSize: 20, fontFamily: 'Poppins_600SemiBold'}]}>Create Account</Text>
      <View style={tw`w-full flex items-start`}>
      <View style={tw`flex flex-row justify-between gap-8`}>
      <View>
      <Text>First Name</Text>
      <TextInput
        style={tw`w-full mt-2 mb-5 border border-gray-400 py-3 px-3 rounded-lg`}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Enter First Name"
      />
      </View>
      <View>
      <Text>Last Name</Text>
      <TextInput
        style={tw`w-full mt-2 mb-5 border border-gray-400 py-3 px-3 rounded-lg`}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Enter Last Name"
      />
      </View>
      </View>
      <Text>Phone Number</Text>
      <TextInput
        style={tw`w-full mt-2 mb-5 border border-gray-400 py-3 px-3 rounded-lg`}
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        maxLength={15} // Adjust as needed
      />
      <Text>Email Address</Text>
      <TextInput
        style={tw`w-full mt-2 mb-5 border border-gray-400 py-3 px-3 rounded-lg`}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text>Password</Text>
      <TextInput
        style={tw`w-full mt-2 mb-5 border border-gray-400 py-3 px-3 rounded-lg`}
        value={password}
        onChangeText={handlePwdChange}
        placeholder="Enter password"
        secureTextEntry
      />
      </View>
      <CustomButton title='Sign Up' onPress={handleSignUp} />
      <View style={tw`flex-1 justify-center items-center my-7`}>
      <Text style={tw`text-center`}>Already have an account?
        <Text> </Text>
        <Text style={twd`text-primary`} onPress={handleNav}>Sign In</Text>
        </Text>
      </View>
    </ScrollView>
  )
}

export default SignupPage