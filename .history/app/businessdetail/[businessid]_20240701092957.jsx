import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';
import { ActivityIndicator } from 'react-native';
import { Colors } from "../../constants/Colors";
import Intro from '../../components/BusinessDetail/Intro';

const BusinessDetail = () => {
  const { businessid } = useLocalSearchParams();
  const [businessDetail, setBusinessDetail] = useState();
  const [Loading,setLoading]=useState(false);
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
      setLoading(false);
    } else {
      console.log("No such document!");
      setLoading(false);
    }
  };

  return (
    <View>
    {Loading?
    <ActivityIndicator
    size={'large'}
    color={Colors.PRIMARY}
    style={{
      marginTop:'70%'
    }}
    />:
    <View>
      {/* intro  */}
<Intro/>

     {/* Action buttons  */}


     {/* about section  */}

      </View>
  }

    </View>
  );
};

export default BusinessDetail;
