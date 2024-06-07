import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import products from '../../../app/apis/popular'
import PopularSlide from './PopularSlide';
import { FontStyles } from '@/components/utils/fontstype';
import twd from '@/tailwind.';

interface FontProps {
  fontStyles: FontStyles;
}

const Popular:React.FC<FontProps> = ({ fontStyles }) => {

  return (
    <View style={twd `mb-20`}>
      <Text style={[twd `mb-3`, {fontFamily: fontStyles.semibold}]}>Popular Products</Text>
      <View style={styles.container}>
        <PopularSlide products={products} />
    </View>
    </View>
  )
}

export default Popular

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
})