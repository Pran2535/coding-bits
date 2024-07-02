import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';

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
      url: business?.website,
    },
    {
      id: 4,
      name: 'Share',
      icon: require('./../../assets/images/share.png'),
      url: business?.website,
    },
  ];

  return (
    <View style={{ backgroundColor: '#fff', padding: 20 }}>
      <FlatList
        data={actionButtonMenu}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            // Add functionality for the buttons, e.g., open URL
            console.log(item.url);
          }}>
            <View style={{ alignItems: 'center', marginVertical: 10 }}>
              <Image source={item.icon} style={{ width: 30, height: 30, marginBottom: 5 }} />
              <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 15,
                textAlign: 'center'
              }}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ActionButton;
