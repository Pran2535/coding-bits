import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

const Menu = () => {
    const menu=[
        {
            id:1,
            name:'Add Business',
             icon:require('./../../assets/images/add.png'),
             path:'',

        },
         {
            id:2,
            name:'My Business',
             icon:require('./../../assets/images/business-and-trade.png'),
             path:'',

        },
         {
            id:3,
            name:'Share App',
             icon:require('./../../assets/images/share_1.png'),
             path:'',

        },
         {
            id:4,
            name:'Logout',
             icon:require('./../../assets/images/logout.png'),
             path:'',

        },
    ]
  return (
    <View>
      <FlatList
      data={menu}
      renderItem={({item,index})=>(
        <View style={{flexDirection:'row', justifyContent:'space-between', padding:10, alignItems:'center'}}>
            <Image source={item.icon}
            style={{
                width:50,
                height:50,

            }}
            />
            <Text>{item.name}</Text>
            </View>
      )}
      />
    </View>
  )
}

export default Menu