import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const CategoryItem = ({category}) => {
  return (
    <View>
        <View style={{padding:10,
            backgroundColor:'#000080',
            borderRadius:99,
            marginRight:10
            
        }}>
     <Image source={{uri:category.icon}} 
     style={{width: 40, height: 40}} />
    </View>
    </View>
  )
}

export default CategoryItem