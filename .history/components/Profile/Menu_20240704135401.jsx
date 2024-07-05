import { View, Text, FlatList, Image, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors'
import { useRouter } from 'expo-router'
import { SignedOut, useAuth } from '@clerk/clerk-expo'

const Menu = () => {
  const { signOut, userId, getToken } = useAuth();
  const router = useRouter();

  const [userEmail, setUserEmail] = React.useState('');

  React.useEffect(() => {
    const fetchUserEmail = async () => {
      const token = await getToken();
      // Replace this with the actual API call to get user details
      const response = await fetch('YOUR_API_ENDPOINT/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = await response.json();
      setUserEmail(userData.email);
    };

    fetchUserEmail();
  }, []);

  const menu = [
    {
      id: 1,
      name: userEmail === 'pranav1256kam@gmail.com' ? 'Add Courses' : 'About Company',
      icon: require('./../../assets/images/add.png'),
      path: userEmail === 'pranav1256kam@gmail.com' ? '/business/add-business' : '/about-company',
    },
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
  ]

  const onShare = async () => {
    // ... (onShare function remains the same)
  };

  const onMenuClick = (item) => {
    // ... (onMenuClick function remains the same)
  };

  return (
    <View style={{
      marginTop: 50,
    }}>
      <FlatList
        numColumns={2}
        data={menu}
        renderItem={({ item, index }) => (
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
            <Image source={item.icon}
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