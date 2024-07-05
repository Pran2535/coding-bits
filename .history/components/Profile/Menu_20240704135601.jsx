import { View, Text, FlatList, Image, TouchableOpacity, Share } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors } from './../../constants/Colors'
import { useRouter } from 'expo-router'
import { SignedOut, useAuth } from '@clerk/clerk-expo'

const Menu = () => {
  const { signOut, getToken } = useAuth();
  const router = useRouter();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const token = await getToken();
        // Replace this with the actual method to get user email from Clerk
        const response = await fetch('YOUR_API_ENDPOINT/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = await response.json();
        setUserEmail(userData.email);
      } catch (error) {
        console.error('Error fetching user email:', error);
      }
    };

    fetchUserEmail();
  }, []);

  const menuItems = [
    {
      id: 2,
      name: 'My Courses',
      icon: require('./../../assets/images/business-and-trade.png'),
      path: '/business/my-business',
    },
    {
      id: 3,
      name: 'Share App',
      icon: require('./../../assets/images/share_1.png'),
      path: '',
    },
    {
      id: 4,
      name: 'Logout',
      icon: require('./../../assets/images/logout.png'),
      path: 'logout',
    },
  ];

  // Conditionally add the "Add Course" or "About Company" button
  const conditionalButton = {
    id: 1,
    name: userEmail === 'pranav1256kam@gmail.com' ? 'Add Course' : 'About Company',
    icon: require('./../../assets/images/add.png'),
    path: userEmail === 'pranav1256kam@gmail.com' ? '/business/add-business' : '/about-company',
  };

  const menu = [conditionalButton, ...menuItems];

  const onShare = async () => {
    // ... (onShare function remains the same)
  };

  const onMenuClick = (item) => {
    if (item.path === 'logout') {
      signOut();
      return;
    }
    if (item.name === 'Share App') {
      onShare();
      return;
    }
    router.push(item.path);
  };

  return (
    <View style={{ marginTop: 50 }}>
      <FlatList
        numColumns={2}
        data={menu}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onMenuClick(item)}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              flex: 1,
              padding: 10,
              borderRadius: 15,
              borderWidth: 1,
              margin: 10,
              backgroundColor: '#fff',
              borderColor: Colors.PRIMARY
            }}>
            <Image 
              source={item.icon}
              style={{
                width: 50,
                height: 55,
              }}
            />
            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 15,
              flex: 1,
            }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={{
        fontFamily: 'outfit',
        textAlign: 'center',
        marginTop: 100,
        color: Colors.GRAY
      }}>Developed by Pranav kumar for Coding bits </Text>
    </View>
  )
}

export default Menu