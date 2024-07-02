import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const Category = () => {
  return (
    <View>
        <View style={{padding:20,
             display:'flex',
             flexDirection:'row',
        justifyContent:'space-between',
         marginTop:10,
        }}>
      <Text style={{
        
        fontSize:20,
        fontFamily:'outfit-bold',
       
      }}>Category
      
      </Text>
      <Text style={{color:Colors.PRIMARY}}>View All</Text>
    </View>
    </View>
  )
}

export default Category