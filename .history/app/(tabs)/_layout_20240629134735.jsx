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
      tabBarIcon:({color})=><AntDesign name="home" size={28} color={color} />
    }}/>
    <Tabs.Screen name='explore' options={{
      tabBarLabel:'Explore',
      tabBarIcon:({color})=><AntDesign name="search" size={28} color={color} />
    }}/>
    <Tabs.Screen name='profile' options={{
      tabBarLabel:'Profile',
      tabBarIcon:({color})=><AntDesign name="home" size={28} color={color} />
    }}/>
   </Tabs>
  )
}

export default TabLayout;