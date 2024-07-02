import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'


const ActionButton = ({business}) => {
   
    const actionButtonMenu=[
        
        {
        id:1,
        name:'Call',
        icon:'./../../assets/images/call.png',
        url:'tel'+business?.contact

    },
  {
        id:2,
        name:'Location',
        icon:'./../../assets/images/pin.png',
        url:'https://www.google.com/maps/search/?api=1&query='+business?.address

    },

      {
        id:3,
        name:'Web',
        icon:'./../../assets/images/web.png',
        url:business?.website 

    },
     {
        id:4,
        name:'Share',
        icon:'./../../assets/images/Share.png',
        url:business?.website 

    },

]

  return (
    <View style={{
        backgroundColor:'#fff',
        padding:20
    }}>
      <FlatList
      data={actionButtonMenu}
      renderItem={({item,index})=>(
        <View>
            <Image source={require(item?.icon)}/>
            </View>
      )}
      />
    </View>
  )
}

export default ActionButton