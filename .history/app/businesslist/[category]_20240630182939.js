import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection } from "firebase/firestore";

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

  const getBusinessList = () => {
    const q = query(collection(db, "BusinessList"));
  };

  return (
    <View>
      <Text>{category}</Text>
    </View>
  );
};

export default BusinessListByCategory;
