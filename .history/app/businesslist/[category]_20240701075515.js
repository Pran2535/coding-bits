import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";
import { Colors } from "../../constants/Colors";

const BusinessListByCategory = () => {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();

  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
    getBusinessList();
  }, [category]);

  const getBusinessList = async () => {
    setLoading(true);
    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    const businesses = [];
    querySnapshot.forEach((doc) => {
      businesses.push(doc.data());
    });
    setBusinessList(businesses);
    setLoading(false);
  };

  return (
    <View>
      {businessList.length > 0 && !loading ? (
        <FlatList
          data={businessList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <BusinessListCard business={item} />}
        />
      ) : loading ? (
        <ActivityIndicator
          style={{
            marginTop: "60%",
          }}
          size="large"
          color={Colors.PRIMARY}
        />
      ) : (
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
            color: Colors.GRAY,
            textAlign: "center",
            marginTop: "50%",
          }}
        >
          No business found
        </Text>
      )}
    </View>
  );
};

export default BusinessListByCategory;
