import { View, Text } from 'react-native'
import React from 'react'

const Category = () => {
  return (
    <View>
      <Text style={{
        paddingLeft:20, marginTop:10,
        fontSize:20,
        fontFamily:'outfit-bold',
        display:'flex',
        justifyContent:'space-between'
      }}>Category
      <Text>View All</Text>
      </Text>
    </View>
  )
}

export default Category