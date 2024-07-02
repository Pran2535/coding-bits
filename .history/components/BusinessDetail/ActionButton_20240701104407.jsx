import { View, Text } from 'react-native'
import React from 'react'


const ActionButton = ({business}) => {
   
    const actionButtonMenu=[{
        id:1,
        name:'Call',
        icon:'./../../assets/images/call.png',
        url:'tel'+business.contact

    }]

  return (
    <View style={{
        backgroundColor:'#fff',
        padding:20
    }}>
      <Text>ActionButton</Text>
    </View>
  )
}

export default ActionButton