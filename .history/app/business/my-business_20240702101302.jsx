import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-expo'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';

const MyBusiness= () => {
    
    const [businessList,setBusinessList]=useState([]);
    const{user}=useUser();
    useEffect(()=>{
        user&&GetUserBusiness()
    },[user])

    const GetUserBusiness=async()=>{
      const q=query(collection(db,'BusinessList'),
      where('userEmail','==',user?.primaryEmailAddress.emailAddress))

      const querySnapshot= await getDocs(q);
      querySnapshot.forEach((doc)=>{
        console.log(doc.data())
         setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
    })

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