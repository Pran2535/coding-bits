import { View, Text } from 'react-native'
import React from 'react'
import { collection, query } from 'firebase/firestore'
import {db} from './../../configs/FirebaseConfig'
const Slider = () => {
const GetSliderList=()=>{

    const q= query(collection(db,'Slider'))
}

  return (
    <View>
      <Text>Slider</Text>
    </View>
  )
}

export default Slider