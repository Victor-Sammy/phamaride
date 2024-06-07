import { View, Text } from 'react-native'
import React from 'react'
import twd from '@/tailwind.';
import productCategories from './categories';
import CategoriesComponent from './CategoriesComponent';
import { FontStyles } from '@/components/utils/fontstype';

interface FontProps {
    fontStyles: FontStyles;
}

const PdtCategories:React.FC<FontProps> = ({ fontStyles }) => {
  return (
    <View>
      <Text style={[twd `mb-3`, {fontFamily: fontStyles.semibold}]}>Product Categories</Text>
      <CategoriesComponent categories={productCategories} fontStyles={fontStyles} />
    </View>
  )
}

export default PdtCategories