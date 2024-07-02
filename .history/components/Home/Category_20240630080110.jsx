import { View, Text } from 'react-native'
import React from 'react'

const Category = () => {
  return (
    <View>
        <View style={{padding:20,
             display:'flex',
        justifyContent:'space-between'
        }}>
      <Text style={{
         marginTop:10,
        fontSize:20,
        fontFamily:'outfit-bold',
       
      }}>Category
      
      </Text>
      <Text>View All</Text>
    </View>
    </View>
  )
}

export default Category