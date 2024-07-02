import { View, Text } from 'react-native'
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
            name:'Add Business',
             icon:require('./../../assets/images/add.png'),
             path:'',

        },
         {
            id:3,
            name:'Add Business',
             icon:require('./../../assets/images/add.png'),
             path:'',

        },
         {
            id:4,
            name:'Add Business',
             icon:require('./../../assets/images/add.png'),
             path:'',

        },
    ]
  return (
    <View>
      <Text>MenuList</Text>
    </View>
  )
}

export default Menu