import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const LoginScreen = () => {
  return (
    <View>
        <View style={{
            display:'flex',
            alignItems:'center',
            marginTop:100,
        }}>

     <Image source={require('../assets/images/login.png')}  style={{
        width:250,
        height:550,
        borderRadius:20,
        borderWidth:6,
        borderColor:'#000'
     }}/>
    </View>
    <View style={{backgroundColor:'#fff', padding:20}}>
<Text>Your ultimate <Text style={{
    color:Colors.PRIMARY
}}> Business Community Directory </Text> App</Text>
    </View>
    </View>
  )
}

export default LoginScreen