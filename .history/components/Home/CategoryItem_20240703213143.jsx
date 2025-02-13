import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const CategoryItem = ({category,onCategoryPress}) => {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(category)}>
        <View style={{padding:10,
            backgroundColor:'#000080',
            borderRadius:99,
            marginRight:15
            
        }}>
     <Image source={{uri:category.icon}} 
     style={{width: 40, height: 40}} />  
    </View>
    <Text  style={
        {
            fontSize:10.,
            fontFamily:'outfit-bold',
            textAlign:'center',
            marginTop:5
        }
    }>{category.name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryItem