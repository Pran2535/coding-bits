import { View, Text, Image } from 'react-native'
import React from 'react'

const PopularBusinessCard = ({business}) => {
  return (
    <View>
      <Image source={{uri:business?.imageUrl}}
      
      />
    </View>
  )
}

export default PopularBusinessCard