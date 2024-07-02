import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const BusinessListCard = ({business}) => {
  return (
    <View style={{
        backgroundColor:'#fff',
        borderBottomLeftRadius:15,
        
    }}>
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
    <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20,
    }}>{business?.name}</Text>
    <Text
    style={{
        fontFamily:'outfit',
        color:Colors.GRAY
    }}
    >{business?.address}</Text>
</View>
    </View>
  )
}

export default BusinessListCard