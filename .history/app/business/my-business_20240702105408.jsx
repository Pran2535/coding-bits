import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-expo'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import BusinessListCard from '../../components/Explore/BusinessListCard';

const MyBusiness= () => {
    
    const [businessList,setBusinessList]=useState([]);
    const{user}=useUser();
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        user&&GetUserBusiness()
    },[user])

// used to get business list by user email 

    const GetUserBusiness=async()=>{
        setLoading(true);
        setBusinessList([])
      const q=query(collection(db,'BusinessList'),
      where('userEmail','==',user?.primaryEmailAddress.emailAddress))

      const querySnapshot= await getDocs(q);
      querySnapshot.forEach((doc)=>{
        console.log(doc.data())
         setBusinessList(prev=>[...prev,{id:doc.id,...doc.data()}])
    })
        setLoading(false);
    }

  return (
    <View style={{
        padding:30,

    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
      }}>My Business </Text>

      <FlatList 
      onRefresh={GetUserBusiness}
      refreshing={loading}
      data={businessList}
      renderItem={({item,index})=>(
       <BusinessListCard
       business={item}
       key={index}
       /> 
      )}/>
    </View>
  )
}

export default MyBusiness