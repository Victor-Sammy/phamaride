import { View, Text, Image, StyleSheet, Dimensions, FlatList, NativeSyntheticEvent, NativeScrollEvent, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window')

interface Slide {
  key: string;
  image: number;
}

const slides:Slide[] = [
  {key: '1', image: require('../../assets/images/sld1.jpg')},
  {key: '2', image: require('../../assets/images/sld2.jpg')},
  {key: '3', image: require('../../assets/images/sld3.jpg')}
]

const Onboarding:React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<Slide>>(null)
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentSlide + 1 });
    } else {
      navigation.navigate('Login');
    }
  };

  const renderImages = ({ item }: {item: Slide}) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode='cover' />
    </View>
  );

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.floor(event.nativeEvent.contentOffset.x / width);
    setCurrentSlide(slideIndex);
  };


  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={slides}
        renderItem={renderImages}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false, listener: onScroll }
        )}
        scrollEventThrottle={16}
        ref={flatListRef}
      />
      <View style={styles.indicators}>
        {slides.map((_, index) => {
          const widthInterpolate = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: [15, 30, 15],
            extrapolate: 'clamp',
          });

          const backgroundColorInterpolate = scrollX.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: ['#d4d4d4', '#007FFF', '#d4d4d4'],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.indicator,
                {
                  width: widthInterpolate,
                  backgroundColor: backgroundColorInterpolate
                },
              ]}
            />
          );
        })}
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>
          <Ionicons name='arrow-forward'></Ionicons>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  indicators: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  indicator: {
    width: 15,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeIndicator: {
    width: 30,
  },
  nextButton: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    backgroundColor: '#007FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Onboarding