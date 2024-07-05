import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
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
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('./../../assets/images/adarshpandey2.jpeg')}
        style={styles.image}
      />
      <Text style={styles.name}>Adarsh Kumar Pandey</Text>
      <Text style={styles.title}>CEO & FOUNDER</Text>
      <Text style={styles.description}>
        As a passionate web developer and graphic designer, I create visually captivating and user-friendly digital experiences. I am currently pursuing a B.E. in Computer Science and Engineering at Punjab University, where I have honed my skills in various programming languages, including C++, Basic Python, HTML, CSS, JavaScript, and PHP.
      </Text>
      <View style={styles.certificationContainer}>
        <Image 
          source={require('./../../assets/images/auth-icon-01.png')}
          style={styles.icon}
        />
        <Text style={styles.certificationText}>MSME REGISTERED</Text>
      </View>
      <View style={styles.certificationContainer}>
        <Image 
          source={require('./../../assets/images/microsoft for startups.png')}
          style={styles.icon}
        />
        <Text style={styles.certificationText}>Microsoft For Startups</Text>
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.emailLabel}>EMAIL</Text>
        <Text style={styles.email}>adarshpandey@codingbits.in</Text>
        <Text style={styles.email}>codingbits1@gmail.com</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
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
    marginBottom: 20,
  },
  certificationContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  certificationText: {
    fontFamily: 'outfit-medium',
    textAlign: 'center',
  },
  emailContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  emailLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 5,
  },
})

export default Adarsh