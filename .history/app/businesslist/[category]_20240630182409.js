import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";

const BusinessListByCategory = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

  return (
    <View>
      <Text>BusinessListByCategory</Text>
    </View>
  );
};

export default BusinessListByCategory;
