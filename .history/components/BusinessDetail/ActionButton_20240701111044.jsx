import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Linking } from 'react-native';

const ActionButton = ({ business }) => {
  const actionButtonMenu = [
    {
      id: 1,
      name: 'Call',
      icon: require('./../../assets/images/call.png'),
      url: 'tel:' + business?.contact,
    },
    {
      id: 2,
      name: 'Location',
      icon: require('./../../assets/images/pin.png'),
      url: 'https://www.google.com/maps/search/?api=1&query=' + business?.address,
    },
    {
      id: 3,
      name: 'Web',
      icon: require('./../../assets/images/web.png'),
      url: business?.website || 'http://www.google.com',
    },
    {
      id: 4,
      name: 'Share',
      icon: require('./../../assets/images/share.png'),
      url: business?.website,
    },
  ];

  const onPressHandle = (item) => {
    if (item.name === 'Share') {
      // Handle share functionality here
      return;
    }
    Linking.openURL(item.url);
  };

  return (
    <View style={{ backgroundColor: '#fff', padding: 20 }}>
      <FlatList
        data={actionButtonMenu}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPressHandle(item)}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <Image source={item.icon} style={{ width: 50, height: 50 }} />
              <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 15,
                textAlign: 'center',
                marginTop: 5
              }}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ActionButton;
