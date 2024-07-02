import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig"; // Ensure to import your Firebase configuration
import BusinessListCard from "../../components/BusinessList/BusinessListCard";

const BusinessListByCategory = () => {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();

  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
    getBusinessList();
  }, [category]);

  const getBusinessList = async () => {
    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <View>
      {businessList.length > 0 ? (
        <FlatList
          data={businessList}
          renderItem={({ item, index }) => (
            <BusinessListCard business={item} key={index} />
          )}
        />
      ) : (
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
          }}
        >
          No business found
        </Text>
      )}
    </View>
  );
};

export default BusinessListByCategory;
