import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
const TabLayout = () => {
  return (
   <Tabs screenOptions={{
    headerShown: false,
   }}>
    <Tabs.Screen name='home' options={{
      tabBarLabel:'Home',
      tabBarIcon:({color})=><AntDesign name="home" size={24} color="black" />
    }}/>
    <Tabs.Screen name='explore'/>
    <Tabs.Screen name='profile'/>
   </Tabs>
  )
}

export default TabLayout;