import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';

const AddBusiness = () => {
const navigation=useNavigation();

useEffect(()=>{
    navigation.setOptions({
        headerTitle:'Add New Business',
       headerShown:true,
    })
      
},[])

  return (
    <View style={{
        padding:20,

    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:25,
      }}>Add New Business</Text>
      <Text style={{
        fontFamily:'outfit',
        color:Colors.GRAY
      }}>Fill all details in order to add new Business </Text>
    </View>
  )
}

export default AddBusiness