import { View, Text, Image } from 'react-native'
import React from 'react'

const Adarsh = () => {
  return (
    <View>
      <Image source={require('./../../assets/images/adarshpandey2.jpeg')}
      style={{
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        alignContent:'center'
        
      }}
      />
      <Text>Adarshkumar pandey</Text>
    </View>
  )
}

export default Adarsh