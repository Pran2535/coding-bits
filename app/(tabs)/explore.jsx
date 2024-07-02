import { View, Text, TextInput, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors';
import Category from './../../components/Home/Category';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './../../configs/FirebaseConfig';
import ExploreBusinessList from '../../components/Explore/ExploreBusinessList';

const Explore = () => {
  const [businessList, setBusinessList] = useState([]);
  const [filteredBusinessList, setFilteredBusinessList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Initial load of all businesses
    GetAllBusinesses();
  }, []);

  const GetAllBusinesses = async () => {
    try {
      const q = query(collection(db, 'BusinessList'));
      const querySnapshot = await getDocs(q);
      const businesses = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
      setBusinessList(businesses);
      setFilteredBusinessList(businesses);
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  const GetBusinessByCategory = async (category) => {
    try {
      const q = query(collection(db, 'BusinessList'), where('category', '==', category));
      const querySnapshot = await getDocs(q);
      const businesses = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
      setBusinessList(businesses);
      setFilteredBusinessList(businesses);
      setSearchQuery('');
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = businessList.filter(business => 
      business.name.toLowerCase().includes(text.toLowerCase()) ||
      business.category.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredBusinessList(filtered);
  };

  return (
    <View style={{
      padding: 20,
    }}>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,
        }}
      >Explore More</Text>

      {/* searchbar */}
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        marginTop: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.PRIMARY
      }}>
        <FontAwesome name="search" size={24} color={Colors.PRIMARY} />
        <TextInput
          placeholder='Search...'
          style={{
            fontFamily: 'outfit',
            fontSize: 16,
            flex: 1,
          }}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {/* category */}
      <Category
        explore={true}
        onCategorySelect={(category) => GetBusinessByCategory(category)}
      />

      {/* business list */}
      <ExploreBusinessList businessList={filteredBusinessList} />
    </View>
  );
};

export default Explore;