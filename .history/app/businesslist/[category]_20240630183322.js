import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, where } from "firebase/firestore";

const BusinessListByCategory = () => {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
  }, []);

  //   used to get businesslist by category

  const getBusinessList = async () => {
    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data);
    });
  };

  return (
    <View>
      <Text>{category}</Text>
    </View>
  );
};

export default BusinessListByCategory;
