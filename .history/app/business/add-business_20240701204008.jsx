import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';

const AddBusiness = () => {
const navigation=useNavigation();
const [image,setImage]=useState(null);
useEffect(()=>{
    navigation.setOptions({
        headerTitle:'Add New Business',
       headerShown:true,
    })
      
},[])
    
   const onImagePick=async()=>{
      let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    
      quality: 1,
    });
    setImage(result?.assets[0].uri);
    console.log(result);
   } 

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
      <TouchableOpacity style={{
        marginTop:20,

      }}
      onPress={()=>onImagePick()}
      >
  {!image?    <Image source={require('./../../assets/images/placeholder.png')}
      style={{
        width:100,
        height:100
      }}
      />: <Image source={{uri:image}}
      style={{
        width:100,
        height:100,
        borderRadius:15
      }} />}
      </TouchableOpacity>
    </View>
  )
}

export default AddBusiness