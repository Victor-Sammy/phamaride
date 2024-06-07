import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Carousel from 'react-native-reanimated-carousel'

interface Slide {
    key: string;
    image: number;
}

const images:Slide[] = [
    {key: '1', image: require('../../assets/images/ban1.jpg')},
    {key: '2', image: require('../../assets/images/ban2.jpg')},
    {key: '3', image: require('../../assets/images/ban3.jpg')}
]

const { width,height } = Dimensions.get('window');

const SlideShow:React.FC = () => {

    const renderImage = ({ item }: { item: Slide }) => {
        return (
            <View>
                <Image source={ item.image } style={[ tw ``, styles.imagePosition ]} />
            </View>
        )
    };

  return (
    <View style={styles.container}>
        <Carousel 
        width={width}
        height={width/2}
        data={images}
        autoPlay={true}
        pagingEnabled={true}
        scrollAnimationDuration={3000}
        renderItem={renderImage}/>
    </View>
  )
}

export default SlideShow

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePosition: {
        width: width,
        height: height/3,
        objectFit: 'contain',
    }
})