import { View, Text, Image } from 'react-native'
import React from 'react'

const BusinessListCard = ({business}) => {
  return (
    <View style={{
      padding:10,
      margin:10,
      borderRadius:15,
      backgroundColor:'#fff'
    }}>
      <Image source={{uri:business.imageUrl}} 
      style={{
        width:120,
        height:120,
        borderRadius:15,

      }}
      />
      <View>
        <Text>{business.name}</Text>
      </View>
    </View>
  )
}

export default BusinessListCard