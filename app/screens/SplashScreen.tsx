import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import tw from 'twrnc';
import { RootStackParamList } from '../navigation/types';

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-lg text-center text-2xl font-bold`}>PHARMRIDE</Text>
    </View>
  );
}

export default SplashScreen;
