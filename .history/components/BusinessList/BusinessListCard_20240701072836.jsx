import { View, Text, Image } from 'react-native'
import React from 'react'

const BusinessListCard = ({business}) => {
  return (
    <View>
      <Image source={{uri:business.imageUrl}} />
    </View>
  )
}

export default BusinessListCard