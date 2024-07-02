import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Reviews = ({ business }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'black',
  },
  text: {
    color: 'white', // Ensure text color contrasts with background
  },
});

export default Reviews;
