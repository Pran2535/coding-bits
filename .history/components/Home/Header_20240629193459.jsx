import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

const Header = () => {
    const {user} =useUser();
  return (
    <View>
      <View>
      <Image source={{uri:user?.imageUrl}}
    </View>
    </View>
  )
}

export default Header