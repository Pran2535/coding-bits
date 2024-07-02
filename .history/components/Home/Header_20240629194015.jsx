import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

const Header = () => {
    const {user} =useUser();
  return (
    <View style={{
        padding:20,
        paddingTop:40
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
      }}>
      <Image source={{uri:user?.imageUrl}}
      style={{
        width:45,
        height:45,
        borderRadius:99
      }}
      />
      <View>
        <Text>Welcome ,</Text>
        <Text>{user?.fullName}</Text>
      </View>
    </View>
    </View>
  )
}

export default Header