import { View, Text } from 'react-native'
import React from 'react'

const About = ({business}) => {
  return (
    <View style={{
        padding:20,
        backgroundColor:'#fff',
        
    }}>
      <Text
      style={{
        fontFamily:'outfit-bold'
      }}
      >About</Text>
    </View>
  )
}

export default About