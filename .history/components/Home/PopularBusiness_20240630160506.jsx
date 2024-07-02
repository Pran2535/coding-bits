import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, doc, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'

const PopularBusiness = () => {

    useEffect(() => {
        GetBusinessList();
    }, [])
    const GetBusinessList=async()=>{
        const q= query(collection(db,'BusinessList'),limit(10))
        const querySnapshot=await getDocs(q)
        querySnapshot.forEach((doc)=>{
            console.log(doc.data())
            
        })
    }

  return (
    <View>
       <View style={{
        padding: 20,
        display: 'flex',
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
    </View>
  )
}

export default PopularBusiness