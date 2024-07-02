import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';

const BusinessListCard = ({ business }) => {
  const router = useRouter();

  const handlePress = () => {
    if (business?.id) {
      // Using navigate instead of push
      router.navigate(`/businessdetail/${business.id}`);
    } else {
      console.warn('Business ID is undefined');
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image 
        source={{ uri: business?.imageUrl }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{business?.name}</Text>
        <Text style={styles.address}>{business?.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 15,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
  },
  address: {
    fontFamily: 'outfit',
    color: Colors.GRAY,
  },
});

export default BusinessListCard;