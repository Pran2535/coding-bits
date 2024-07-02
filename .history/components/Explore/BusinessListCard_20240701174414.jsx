import { View, Text, Image } from 'react-native'
import React from 'react'

const BusinessListCard = ({business}) => {
  return (
    <View>
      <Image source={{uri:business?.imageUrl}}
      style={{
        width:'100%',
        height:150,
        borderTopLeftRadius:15,
        
      }}/>

    </View>
  )
}

export default BusinessListCard