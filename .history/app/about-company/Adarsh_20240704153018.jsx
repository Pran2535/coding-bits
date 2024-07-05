import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'

const Adarsh = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'About',
      headerShown: true,
    })
  }, [])

  return (
    <View style={styles.container}>
      <Image 
        source={require('./../../assets/images/adarshpandey2.jpeg')}
        style={styles.image}
      />
      <Text style={styles.name}>Adarsh Kumar Pandey</Text>
      <Text style={styles.title}>CEO & FOUNDER</Text>
      <Text style={styles.description}>
        As a passionate web developer and graphic designer, I create visually captivating and user-friendly digital experiences. I am currently pursuing a B.E. in Computer Science and Engineering at Punjab University, where I have honed my skills in various programming languages, including C++, Basic Python, HTML, CSS, JavaScript, and PHP.
      </Text>
      <Image source={require('./../../assets/images/auth-icon-01.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: Colors.primary,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
})

export default Adarsh