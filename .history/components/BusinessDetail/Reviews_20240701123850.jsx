import { View, Text } from 'react-native'
import React from 'react'

const Reviews = ({business}) => {
  return (
    <View style={{
      padding:20,
      backgroundColor:'#fff'
    }}> 
      <Text
      style={{
        fontFamily:'outfit-bold',
        fontSize:20,
      }}
      >Reviews</Text>
    </View>
  )
}

export default Reviews