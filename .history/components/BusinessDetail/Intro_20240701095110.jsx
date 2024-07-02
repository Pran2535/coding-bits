// Intro.js
import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const Intro = ({ business }) => {
    const router =useRouter();
  return (
    <View>
        <View style={{
            position:'absolute',
            zIndex:10,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            width:'100%',
            padding:20
        }}>
            <TouchableOpacity onPress={()=>router.back()}>
<Ionicons name="arrow-back-circle" size={40} color="white" />

            </TouchableOpacity>
      <Ionicons name="heart-outline" size={40} color="white" />
        </View>
      <Image
        source={{ uri: business?.imageUrl }}
        style={{
          width: '100%',
          height: 300,
        }}
      />
    </View>
  );
};

export default Intro;
