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
    alignItems: 'center', // Center align the text horizontally
    justifyContent: 'center', // Center align the text vertically
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default Reviews;
