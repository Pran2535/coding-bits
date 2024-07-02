import { View, Text, Image } from 'react-native'
import React from 'react'

const PopularBusinessCard = ({business}) => {
  return (
    <View style={{
        marginLeft:20,
        padding:10
    }}>
      <Image source={{uri:business?.imageUrl}}
      style={{width:200,
        height:130,

      }}
      />
    </View>
  )
}

export default PopularBusinessCard