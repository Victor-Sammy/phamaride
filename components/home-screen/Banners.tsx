import { StyleSheet, View } from 'react-native'
import React from 'react'
import SlideShow from './SlideShow';

const Banners:React.FC = () => {

  return (
    <View style={styles.container}>
      <SlideShow />
    </View>
  )
}

export default Banners

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
} );