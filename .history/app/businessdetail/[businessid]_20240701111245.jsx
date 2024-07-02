// BusinessDetail.js
import { View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';
import { Colors } from "../../constants/Colors";
import Intro from '../../components/BusinessDetail/Intro';
import ActionButton from '../../components/BusinessDetail/ActionButton';
import About from '../../components/BusinessDetail/About';

const BusinessDetail = () => {
  const { businessid } = useLocalSearchParams();
  const [businessDetail, setBusinessDetail] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetBusinessDetailById();
  }, []);

  const GetBusinessDetailById = async () => {
    setLoading(true);
    const docRef = doc(db, 'BusinessList', businessid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setBusinessDetail(docSnap.data());
    } else {
      console.log("No such document!");
    }
    setLoading(false);
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={Colors.PRIMARY}
          style={{ marginTop: '70%' }}
        />
      ) : (
        businessDetail && (
          <View>
            {/* intro */}
            <Intro business={businessDetail} />

            {/* Action buttons */}
<ActionButton  business={businessDetail}/>
            {/* about section */}
            <About business={businessDetail}/>
          </View>
        )
      )}
    </View>
  );
};

export default BusinessDetail;
