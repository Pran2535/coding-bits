import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-expo'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfig';
import BusinessListCard from '../../components/Explore/BusinessListCard';
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';

const MyBusiness= () => {
    const navigation=useNavigation();
    const [businessList,setBusinessList]=useState([]);
    const{user}=useUser();
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTitle:'My Courses',
            headerStyle:{backgroundColor:Colors.PRIMARY,elevation:0},
        })
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
        padding:40,

    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20,
        marginTop:200,
        textAlign:'center'
      }}> YOU HAVE GOT A CONFIRMATION MAIL REGARDING YOUR COURSE </Text>

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