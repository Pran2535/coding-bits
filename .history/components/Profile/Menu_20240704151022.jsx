import { View, Text, FlatList, Image, TouchableOpacity, Share } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors } from './../../constants/Colors'
import { useRouter } from 'expo-router'
import { useAuth, useUser } from '@clerk/clerk-expo'

const Menu = () => {
  const { signOut } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    if (user) {
      setUserEmail(user.primaryEmailAddress?.emailAddress || '');
    }
  }, [user]);

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

  const conditionalButton = {
    id: 1,
    name: userEmail === 'pranav1256kam@gmail.com' ? 'Add Course' : 'About App',
    icon: require('./../../assets/images/add.png'),
    path: userEmail === 'pranav1256kam@gmail.com' ? '/business/add-business' : '/about-company/Adarsh',
  };

  const menu = [conditionalButton, ...menuItems];

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this awesome app!',
        // url: 'https://play.google.com/store/apps/details?id=your.app.id'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
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