import { View, ActivityIndicator, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';
import { Colors } from "../../constants/Colors";
import Intro from '../../components/BusinessDetail/Intro';
import ActionButton from '../../components/BusinessDetail/ActionButton';
import About from '../../components/BusinessDetail/About';
import Reviews from '../../components/BusinessDetail/Reviews';


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
    <ScrollView style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={Colors.PRIMARY} />
        </View>
      ) : (
        businessDetail && (
          <View style={{ paddingBottom: 20 }}>
            {/* intro */}
            <Intro business={businessDetail} />

            {/* Action buttons */}
            <ActionButton business={businessDetail} />

            {/* about section */}
            <About business={businessDetail} />

           {/* review Section  */}

          {/* <Reviews business={businessDetail}/> */}
<Reviews/>
          </View>
        )
      )}
    </ScrollView>
  );
};

export default BusinessDetail;
