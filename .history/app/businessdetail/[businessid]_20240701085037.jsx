import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const BusinessDetail = () => {
  const {businessid}=useLocalSearchParams();
  return (
    <View>
      <Text>{businessid}</Text>
    </View>
  )
}

export default BusinessDetail