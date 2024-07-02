import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, doc, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import PopularBusinessCard from './PopularBusinessCard'

const PopularBusiness = () => {

    const [businessList,setBusinessList]=useState([]);

    useEffect(() => {
        GetBusinessList();
    }, [])
    const GetBusinessList=async()=>{
        setBusinessList([])
        const q= query(collection(db,'BusinessList'),limit(10))
        const querySnapshot=await getDocs(q)
        querySnapshot.forEach((doc)=>{
            console.log(doc.data())
            setBusinessList(prev=>[...prev,doc.data()])
        })
    }
jvjcxj
  return (
    <View>
       <View style={{
        padding: 10,
        display: 'flex',
        marginBottom:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
        <Text style={{
          fontSize: 20,
          fontFamily: 'outfit-bold',
        }}>
          Popular Business 
        </Text>
        <Text style={{
          color: Colors.PRIMARY,
          fontFamily: 'outfit-medium'
        }}>
          View All
        </Text>
        </View>
        <FlatList
        horizontal={true}
        data={businessList}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
            <PopularBusinessCard
            key={index}
            business={item}
            />
        )}
        />
    </View>
  )
}

export default PopularBusiness