import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { StyleSheet } from 'react-native-web'

const LoginScreen = () => {
  return (
    <View>
        <View style={{
            display:'flex',
            alignItems:'center',
            marginTop:50,
        }}>

     <Image source={require('../assets/images/login.png')}  style={{
        width:250,
        height:530,
        borderRadius:20,
        borderWidth:6,
        borderColor:'#000'
     }}/>
    </View>
    <View style={styles.subContainer}>
<Text style={{
    fontSize:26,
    fontFamily:'outfit-bold',
    textAlign:center
}}>Your ultimate <Text style={{
    color:Colors.PRIMARY
}}> Business Community Directory </Text> App</Text>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  subContainer:{
    backgroundColor:'#fff',
     padding:20
  }
})


export default LoginScreen