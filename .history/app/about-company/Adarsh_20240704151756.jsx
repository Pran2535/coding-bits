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
        marginTop:80,
        marginLeft:80,
        width: 100,
        height: 100,
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