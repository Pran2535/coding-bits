import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { query } from 'firebase/database';
import { collection } from 'firebase/firestore';
import {db} from './../../configs/FirebaseConfig'
const BusinessDetail = () => {
  const {businessid}=useLocalSearchParams();

  /**
   * used to get business detail by id
   */
  const GetBusinessDetailById=()=>{
    const q=query(collection(db,'BusinessList'));
  }
  return (
    <View>
      <Text>{businessid}</Text>
    </View>
  )
}

export default BusinessDetail