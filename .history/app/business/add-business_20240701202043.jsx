import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

const AddBusiness = () => {
const navigation=useNavigation();

useEffect(()=>{
    navigation.setOptions({
        headerTitle:'Add New Business',
       headerShown:true,
    })
      
},[])

  return (
    <View>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:25,
      }}>AddBusiness</Text>
    </View>
  )
}

export default AddBusiness