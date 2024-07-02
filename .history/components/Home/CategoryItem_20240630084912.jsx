import { View, Text, Image } from 'react-native'
import React from 'react'

const CategoryItem = ({category}) => {
  return (
    <View>
     <Image source={{uri:category.icon}} />
    </View>
  )
}

export default CategoryItem