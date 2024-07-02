import { View, Text, Image } from 'react-native'
import React from 'react'

const Intro = ({businessDetail}) => {
  return (
    <View>
      <Image source={{uri:businessDetail.imageUrl}}
      
    style={{
        width: '100%',
        height: 300,

    }}

      />
    </View>
  )
}

export default Intro