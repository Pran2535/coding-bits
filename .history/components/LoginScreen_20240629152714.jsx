import { View, Text, Image } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <View>
        <View style={{
            display:'flex',
            alignItems:'center'
        }}>

     <Image source={require('../assets/images/login.png')}  style={{
        width:250,
        height:550,
        borderRadius:20,
        borderWidth:6,
        borderColor:'#000'
     }}/>
    </View>
    </View>
  )
}

export default LoginScreen