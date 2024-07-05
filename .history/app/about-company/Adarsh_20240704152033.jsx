import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';

const Adarsh = () => {
  const navigation=useNavigation()
   useEffect(() => {
    navigation.setOptions({
      headerTitle: 'About ',
      headerShown: true,
    });
    
  }, []);
  return (
    <View style={{
      backgroundColor:'#fff',
      height:'100%'
      
    }} >
      <Image source={require('./../../assets/images/adarshpandey2.jpeg')}
      style={{
        marginTop:20,
        marginLeft:130,
        marginRight:120,
        width: 100,
        height: 100,
        borderRadius: 100,
        overflow: 'hidden',
        justifyContent:'center'
        
      }}
      />
      <Text>Adarsh Kumar Pandey (CEO & FOUNDER)
As a passionate web developer and graphic designer, I create visually captivating and user-friendly digital experiences. I am currently pursuing a B.E. in Computer Science and Engineering at Punjab University, where I have honed my skills in various programming languages, including C++, Basic Python, HTML, CSS, JavaScript, and PHP.</Text>
    </View>
  )
}

export default Adarsh