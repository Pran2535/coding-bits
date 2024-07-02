import { View, Text, Image } from 'react-native'
import React from 'react'

const PopularBusinessCard = ({business}) => {
  return (
    <View style={{
        marginLeft:20,
        padding:10,
        backgroundColor:'#fff',
        borderRadius:15
    }}>
      <Image source={{uri:business?.imageUrl}}
      style={{width:200,
        height:130,
        borderRadius:15

      }}
      />
      <View>
        <Text style={{
            fontFamily:'outfit-bold'
        }}>{business.name}</Text>
      </View>
    </View>
  )
}

export default PopularBusinessCard