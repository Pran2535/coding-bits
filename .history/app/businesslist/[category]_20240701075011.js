import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig"; // Ensure to import your Firebase configuration
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
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev) => [...prev, doc.data()]);
    });
    setBusinessList(false);
  };

  return (
    <View>
      {businessList.length > 0 && loading == false ? (
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
