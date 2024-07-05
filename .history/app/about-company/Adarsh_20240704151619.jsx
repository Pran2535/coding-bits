import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';

const Adarsh = () => {
  const navigation=useNavigation()
   useEffect(() => {
    navigation.setOptions({
      headerTitle: 'About ',
      headerShown: true,
    });
    
  }, []);
  return (
    <View >
      <Image source={require('./../../assets/images/adarshpandey2.jpeg')}
      style={{
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        justifyContent:'center'
        
      }}
      />
      <Text>Adarshkumar pandey</Text>
    </View>
  )
}

export default Adarsh