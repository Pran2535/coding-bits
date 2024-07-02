// Intro.js
import { View, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
const Intro = ({ business }) => {
  return (
    <View>
        <View style={{
            position:'absolute',
            zIndex:10,
        }}>
<Ionicons name="arrow-back-circle-outline" size={40} color="black" />
      <Ionicons name="heart-outline" size={40} color="black" />
        </View>
      <Image
        source={{ uri: business.imageUrl }}
        style={{
          width: '100%',
          height: 300,
        }}
      />
    </View>
  );
};

export default Intro;
