import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const CategoryItem = ({category}) => {
  return (
    <TouchableNativeFeedback>
        <View style={{padding:12,
            backgroundColor:'#000080',
            borderRadius:99,
            marginRight:15
            
        }}>
     <Image source={{uri:category.icon}} 
     style={{width: 40, height: 40}} />
    </View>
    <Text  style={
        {
            fontSize:12.,
            fontFamily:'outfit-medium',
            textAlign:'center',
            marginTop:5
        }
    }>{category.name}</Text>
    </TouchableNativeFeedback>
  )
}

export default CategoryItem