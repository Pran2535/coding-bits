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
        borderTopRightRadius:15,
      }}/>
<View style={{
    padding:10,
}}>
    <Text>{business?.name}</Text>
    <Text>{business?.address}</Text>
</View>
    </View>
  )
}

export default BusinessListCard