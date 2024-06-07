import { Dimensions, FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Product } from './types'

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.5; // Adjust the item width as needed
const ITEM_MARGIN = 10; // Adjust the margin between items

interface ProductSliderProps {
  products: Product[];
}

const PopularSlide:React.FC<ProductSliderProps> = ({ products }) => {
  const renderItem = ({ item }: { item: Product }) => (
    <View style={[tw `bg-slate-200`, styles.itemContainer]}>
        <Image source={ item.image } style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
    </View>
  );

  return (
    <FlatList
      data={products}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
    />
  )
}

export default PopularSlide

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 2,
    },
    itemContainer: {
        width: ITEM_WIDTH,
        marginHorizontal: ITEM_MARGIN / 2,
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5,
        paddingVertical: 10,
    },
    image: {
        width: '100%',
        height: 100, // Adjust the image height as needed
        borderRadius: 10,
        marginBottom: 10,
        objectFit: 'contain'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        color: 'green',
    },
});