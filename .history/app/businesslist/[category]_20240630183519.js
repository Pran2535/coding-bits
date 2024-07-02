import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Ensure to import your Firebase configuration

const BusinessListByCategory = () => {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();

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
    });
  };

  return (
    <View>
      <Text>{category}</Text>
    </View>
  );
};

export default BusinessListByCategory;
