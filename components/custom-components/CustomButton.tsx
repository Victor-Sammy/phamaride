import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import twd from '@/tailwind.';

interface CustomButtonProps extends PressableProps {
    title: string; // Specify the type of the title prop as string
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <Pressable role='button' style={twd`mt-5 bg-primary flex justify-center items-center py-3 rounded-lg w-[100%]`} onPress={onPress}>
      <Text style={tw`text-white`}>{title}</Text>
    </Pressable>
  )
}

export default CustomButton