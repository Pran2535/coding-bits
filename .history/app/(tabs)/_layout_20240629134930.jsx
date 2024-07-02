import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
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
      tabBarIcon:({color})=><Feather name="search" size={24} color="black" />
    }}/>
    <Tabs.Screen name='profile' options={{
      tabBarLabel:'Profile',
      tabBarIcon:({color})=><Ionicons name="people" size={24} color="black" />
    }}/>
   </Tabs>
  )
}

export default TabLayout;