import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Adarsh = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./../../assets/images/adarshpandey2.jpeg')}
        style={styles.image}
      />
      <Text style={styles.text}>Adarshkumar pandey</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  text: {
    marginTop: 10,
  }
});

export default Adarsh