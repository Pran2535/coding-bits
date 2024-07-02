import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
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
<View>
<TextInput placeholder='Name'
style={{
    padding:15,
    borderWidth:1,
    borderRadius:15,
    fontSize:17,
    backgroundColor:'#fff',
    marginTop:10,
    borderColor:Colors.PRIMARY,
    fontFamily:'outfit',

}}
/>
<TextInput placeholder='Address'
style={{
    padding:15,
    borderWidth:1,
    borderRadius:15,
    fontSize:17,
    backgroundColor:'#fff',
    marginTop:10,
    borderColor:Colors.PRIMARY,
    fontFamily:'outfit',
    
}}
/>
<TextInput placeholder='Contact'
style={{
    padding:15,
    borderWidth:1,
    borderRadius:15,
    fontSize:17,
    backgroundColor:'#fff',
    marginTop:10,
    borderColor:Colors.PRIMARY,
    fontFamily:'outfit',
    
}}
/>
<TextInput placeholder='Email'
style={{
    padding:15,
    borderWidth:1,
    borderRadius:15,
    fontSize:17,
    backgroundColor:'#fff',
    marginTop:10,
    borderColor:Colors.PRIMARY,
    fontFamily:'outfit',
    
}}
/>
<TextInput placeholder='About'
style={{
    padding:15,
    borderWidth:1,
    borderRadius:15,
    fontSize:17,
    backgroundColor:'#fff',
    marginTop:10,
    borderColor:Colors.PRIMARY,
    fontFamily:'outfit',
    
}}
/>


</View>

    </View>
  )
}

export default AddBusiness