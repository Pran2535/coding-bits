import { View, Text, Image } from 'react-native'
import React from 'react'

const BusinessListCard = ({business}) => {
  return (
    <View>
      <Image source={{uri:business.imageUrl}} 
      style={{
        width:120,
        height:120,
        borderRadius:15,
        
      }}
      />
    </View>
  )
}

export default BusinessListCard