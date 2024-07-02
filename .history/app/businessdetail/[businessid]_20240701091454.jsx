import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';

const BusinessDetail = () => {
  const { businessid } = useLocalSearchParams();
  const [businessDetail, setBusinessDetail] = useState(null);

  useEffect(() => {
    GetBusinessDetailById();
  }, []);

  const GetBusinessDetailById = async () => {
    const docRef = doc(db, 'BusinessList', businessid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setBusinessDetail(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  return (
    <View>
      {businessDetail ? (
        <View>
          {/* Render the business details */}
          <Text>Name: {businessDetail.name}</Text>
          <Text>Category: {businessDetail.category}</Text>
          {/* Add other business details here */}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default BusinessDetail;
