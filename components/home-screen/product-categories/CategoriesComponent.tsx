import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { CategoryType } from './types';
import { FontStyles } from '@/components/utils/fontstype';

const { width } = Dimensions.get('window');
const numColumns = 3;
const ITEM_WIDTH = (width - 45) / numColumns; // Adjust the subtraction to your padding/margin needs

interface categoryProp {
    categories:CategoryType[],
    fontStyles: FontStyles;
}

const CategoriesComponent:React.FC<categoryProp> = ({ categories, fontStyles }) => {
    const renderItems =({ item }: { item: CategoryType })=> (
            <View style={[ tw`w-[30%] bg-slate-200 h-[50px] mb-5 flex items-center justify-center px-2 py-1 rounded-lg border border-slate-300`, styles.item ]}>
                <Text style={{ fontFamily: fontStyles.semibold, fontSize: 11 }}>{item.name}</Text>
            </View>
    )

  return (
        <FlatList
            data={categories}
            renderItem={renderItems}
            numColumns={numColumns}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            //contentContainerStyle={styles.container}
        />
  )
}

export default CategoriesComponent

const styles = StyleSheet.create({
    // container: {
    //     paddingHorizontal: 5
    // },
    item: {
        width: ITEM_WIDTH,
        marginHorizontal: 5,
        overflow: 'hidden',
    }
})