import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { query } from 'firebase/database';
import { collection, doc, getDoc } from 'firebase/firestore';
import {db} from './../../configs/FirebaseConfig'
const BusinessDetail = () => {
  const {businessid}=useLocalSearchParams();

  /**
   * used to get business detail by id
   */
  const GetBusinessDetailById=async()=>{
    // const q=query(collection(db,'BusinessList'));
    const docRef=doc(db,'BusinessList',businessid);

    const docSnap= await getDoc(docRef);

    if(docSnap.exists()){
      console.log("Document data:", docSnap.data());
  }
  else{
    console.log("No such document!");
  }
  return (
    <View>
      <Text>{businessid}</Text>
    </View>
  )
}
}
export default BusinessDetail