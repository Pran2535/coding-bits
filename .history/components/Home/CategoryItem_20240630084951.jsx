import { View, Text, Image } from 'react-native'
import React from 'react'

const CategoryItem = ({category}) => {
  return (
    <View>
     <Image source={{uri:category.icon}} 
     style={{width: 40, height: 40}} />
    </View>
  )
}

export default CategoryItem