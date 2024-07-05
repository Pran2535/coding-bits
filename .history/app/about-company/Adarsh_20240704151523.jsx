import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'

const Adarsh = () => {
   useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Add New Course',
      headerShown: true,
    });
    getCategoryList();
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