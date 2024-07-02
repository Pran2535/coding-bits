import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useUser } from '@clerk/clerk-expo'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';

const MyBusiness= () => {
    
    const{user}=useUser();
    useEffect(()=>{
        user&&GetUserBusiness()
    },[user])

    const GetUserBusiness=async()=>{
      const q=query(collection(db,'BusinessList'),
      where('userEmail','==',user?.primaryEmailAddress.emailAddress))

      const querySnapshot= await getDocs(q);
      querySnapshot.forEach((doc)=>{
        console.log(doc.data())})

    }

  return (
    <View style={{
        padding:30,

    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
      }}>My Business </Text>
    </View>
  )
}

export default MyBusiness