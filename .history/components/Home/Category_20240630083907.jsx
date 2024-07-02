import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from './../../configs/FirebaseConfig'

const Category = () => {

  useEffect(() => {
    GetCategoryList();
  }, []);

  const GetCategoryList = async () => {
    const q = query(collection(db, 'Category'))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    })
  }

  return (fmdfk
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
          Category
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

export default Category;
