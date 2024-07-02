import { View, Text, Image } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View>
     <Image source={require('../assets/images/login.png')}  style={{
        width:400,
        height:550,
     }}/>
    </View>
  )
}

export default LoginScreen