import { View, Text, Image, TextInput } from 'react-native'
import React, { useState, useCallback } from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Colors } from './../../constants/Colors'
import { FontAwesome } from '@expo/vector-icons';
import { debounce } from 'lodash'; // Make sure to install lodash: npm install lodash

const Header = ({ onSearch }) => {
  const { user } = useUser();
  const [searchQuery, setSearchQuery] = useState('');

  // Debounce the search to avoid too many calls
  const debouncedSearch = useCallback(
    debounce((text) => {
      if (onSearch) {
        onSearch(text);
      }
    }, 300),
    [onSearch]
  );

  const handleSearch = (text) => {
    setSearchQuery(text);
    debouncedSearch(text);
  };

  return (
    <View style={{
      padding: 15,
      paddingTop: 30,
      backgroundColor: Colors.PRIMARY,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
      }}>
        <Image source={{ uri: user?.imageUrl }}
          style={{
            width: 45,
            height: 45,
            borderRadius: 99
          }}
        />
        <View>
          <Text style={{
            color: '#fff'
          }}>Welcome ,</Text>
          <Text style={{
            fontSize: 19,
            fontFamily: 'outfit-medium',
            color: '#fff'
          }}>{user?.fullName}</Text>
        </View>
      </View>
      {/* search bar  */}
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        marginTop: 15,
        borderRadius: 8
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
    </View>
  )
}

export default Header